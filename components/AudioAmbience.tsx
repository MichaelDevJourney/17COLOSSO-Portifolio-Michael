import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Wind } from 'lucide-react';

const AudioAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Inicializa o contexto de áudio e o gerador de ruído
  const initAudio = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // 1. Criar um buffer de ruído (2 segundos é suficiente para um loop de ruído)
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // 2. Gerar Brown Noise (Ruído Browniano soa mais grave, como vento distante ou trovão)
    // Algoritmo simples de integração de ruído branco
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + (0.02 * white)) / 1.02;
      data[i] = lastOut * 3.5; // Compensar ganho
    }

    // 3. Criar a fonte de áudio
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    // 4. Criar filtro LowPass (Para abafar o som e parecer vento nas pedras)
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400; // 400Hz corta os agudos estridentes

    // 5. Controle de Volume (Gain)
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.05; // Começa baixo (5%)
    gainNodeRef.current = gainNode;

    // 6. Conectar os nós: Ruído -> Filtro -> Ganho -> Saída
    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    // 7. Iniciar
    noiseSource.start();
  };

  const toggleAudio = () => {
    // Se o contexto ainda não existe, cria (primeiro clique do usuário)
    if (!audioCtxRef.current) {
      try {
        initAudio();
        setIsPlaying(true);
      } catch (error) {
        console.error("Erro ao iniciar Web Audio API:", error);
        alert("Seu navegador não suporta a síntese de áudio necessária.");
      }
      return;
    }

    // Se já existe, apenas suspende ou retoma
    if (audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
      setIsPlaying(false);
    } else if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
      setIsPlaying(true);
    }
  };

  // Cleanup ao desmontar
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={toggleAudio}
        className={`
          relative group flex items-center justify-center w-12 h-12 rounded-full border border-stone-700 
          backdrop-blur-md transition-all duration-500 overflow-hidden cursor-none
          ${isPlaying ? 'bg-stone-900/80 border-sigil-blue shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-stone-950/50 text-stone-600 hover:text-stone-300'}
        `}
      >
        {/* Animated Background when playing */}
        {isPlaying && (
          <div className="absolute inset-0 bg-sigil-blue/10 animate-pulse-slow" />
        )}

        {/* Icons */}
        <div className="relative z-10 transition-transform duration-300">
          {isPlaying ? (
            <div className="flex items-center justify-center">
                <Wind size={18} className="animate-pulse text-sigil-blue" />
            </div>
          ) : (
            <VolumeX size={18} />
          )}
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 text-[10px] font-serif tracking-widest uppercase text-stone-400 bg-stone-900 border border-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {isPlaying ? 'Silenciar Ventos' : 'Entrar na Terra Proibida'}
        </span>
      </button>
    </div>
  );
};

export default AudioAmbience;