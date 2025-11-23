import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface TechItem {
  name: string;
  icon: React.ElementType;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface NavLink {
  name: string;
  href: string;
}