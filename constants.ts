import { Project, Product, TechItem, NavLink } from './types';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Zap, 
  Bot,
  Cpu,
  Sword,
  Scroll,
  Map,
  Gem
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'O Santuário', href: '#hero' },
  { name: 'Glifos', href: '#tech' },
  { name: 'Colossos', href: '#projects' },
  { name: 'Ídolos', href: '#store' },
  { name: 'O Viajante', href: '#about' },
];

export const TECH_STACK: TechItem[] = [
  { name: 'JavaScript', icon: Code2, category: 'Frontend' },
  { name: 'TypeScript', icon: Cpu, category: 'Frontend' },
  { name: 'React', icon: Zap, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'MySQL', icon: Database, category: 'Backend' },
  { name: 'Tailwind', icon: Layout, category: 'Frontend' },
  { name: 'Essência de IA', icon: Bot, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Valus - O Minotauro',
    description: 'Uma Landing Page colossal com arquitetura robusta e performance imbatível.',
    imageUrl: 'https://picsum.photos/id/122/800/600',
    tags: ['React', 'Motion', 'TS'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Gaius - O Cavaleiro',
    description: 'Dashboard administrativo blindado. Estrutura rígida de dados e segurança.',
    imageUrl: 'https://picsum.photos/id/16/800/600',
    tags: ['Node', 'MySQL', 'Segurança'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Avion - O Pássaro',
    description: 'Plataforma leve e veloz. Otimização de carga e SEO para voar nos rankings.',
    imageUrl: 'https://picsum.photos/id/132/800/600',
    tags: ['IA', 'Performance', 'SEO'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Tábula de Pedra (Template)',
    description: 'A base sólida para sua presença digital. Rápido, durável e pronto para o combate.',
    price: 'R$ 497',
    features: [
      'Estrutura Otimizada',
      'Design Ancestral',
      'Deploy Imediato',
      'Setup em 48h'
    ],
    isPopular: false,
  },
  {
    id: 2,
    title: 'A Espada de Luz (Custom)',
    description: 'Uma arma forjada exclusivamente para você. Corte através do ruído do mercado.',
    price: 'R$ 1.200',
    features: [
      'Design Único',
      'Animações Místicas',
      'Copywriting Afiado',
      'SEO de Elite',
      'Integração Full'
    ],
    isPopular: true,
  },
  {
    id: 3,
    title: 'Pacto de Dormin (Lançamento)',
    description: 'O poder absoluto. Domine as terras proibidas com um ecossistema completo.',
    price: 'R$ 2.500',
    features: [
      'Funil de Conversão',
      'Analytics Oculto',
      'Suporte Divino',
      'Domínio & Hospedagem',
      'Tráfego Pago (Setup)'
    ],
    isPopular: false,
  },
];