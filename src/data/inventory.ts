
import { Marble } from '../../types';

export const INITIAL_INVENTORY: Marble[] = [
  {
    id: 'm1',
    name: 'Carrara Bianco',
    price: 185.00,
    description: 'The definitive Italian classic. Features a clean white base with iconic soft grey feathered veining, polished to a mirror finish.',
    image: '/images/carrara-bianco.jpg',
    stock: 15,
    category: 'Classic',
    specs: { material: 'Italian Marble', size: '25mm', weight: '20g' }
  },
  {
    id: 'm2',
    name: 'Nero Marquina',
    price: 210.00,
    description: 'Deep obsidian black background with distinct, striking white lightning veins. Sourced from the quarries of the Basque Country.',
    image: '/images/nero-marquina.jpg',
    stock: 4,
    category: 'Elite',
    specs: { material: 'Spanish Black Marble', size: '28mm', weight: '24g' }
  },
  {
    id: 'm3',
    name: 'Verde Guatemala',
    price: 195.00,
    description: 'A mesmerizing deep forest green marble with intricate web-like patterns reminiscent of tropical jungle canopies.',
    image: '/images/verde-guatemala.jpg',
    stock: 0,
    category: 'Exotic',
    specs: { material: 'Serpentine Marble', size: '24mm', weight: '19g' }
  },
  {
    id: 'm4',
    name: 'Calacatta Gold',
    price: 350.00,
    description: 'Rare and luxurious. Distinguished by bold, thicker veining that transitions from smoky grey to warm gold honey tones.',
    image: '/images/calacatta-gold.jpg',
    stock: 3,
    category: 'Reserve',
    specs: { material: 'Premium Calacatta', size: '26mm', weight: '22g' }
  },
  {
    id: 'm5',
    name: 'Rosso Levanto',
    price: 245.00,
    description: 'A dramatic deep cherry-red marble with white crystalline veins. A favorite of classical architecture throughout history.',
    image: '/images/rosso-levanto.jpg',
    stock: 8,
    category: 'Heritage',
    specs: { material: 'Turkish Red Marble', size: '25mm', weight: '21g' }
  },
  {
    id: 'm6',
    name: 'Lapis Blue Sodalite',
    price: 420.00,
    description: 'An extraordinary gemstone-grade marble featuring deep cobalt blue swirls and white calcite inclusions.',
    image: '/images/lapis-blue-sodalite.jpg',
    stock: 2,
    category: 'Exotic',
    specs: { material: 'Bolivian Sodalite', size: '27mm', weight: '25g' }
  }
];
