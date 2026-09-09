export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  url: string;
  displayUrl: string;
  image: string;
  imageAlt: string;
  layoutVariant: 'visual-left' | 'visual-right' | 'full-width' | 'offset';
}

export const projects: ProjectItem[] = [
  {
    id: 'white-story-rk',
    number: '01',
    title: 'WHITE STORY.RK',
    category: 'FASHION / E-COMMERCE',
    description:
      'A refined fashion e-commerce experience designed around visual storytelling, product discovery, collections, and a premium shopping journey.',
    services: [
      'E-commerce',
      'UI/UX',
      'Responsive Development',
      'Product Experience',
    ],
    url: 'https://whitestoryrk.com/',
    displayUrl: 'whitestoryrk.com',
    image: '/assets/images/projects/whitestoryrk.png',
    imageAlt: 'WHITE STORY.RK fashion e-commerce website homepage',
    layoutVariant: 'visual-left',
  },
  {
    id: 'richerblue',
    number: '02',
    title: 'Richerblue',
    category: 'LUXURY JEWELRY / E-COMMERCE',
    description:
      'A premium digital storefront for a luxury jewelry brand, combining elegant visual presentation with product discovery, bespoke jewelry, promotional campaigns, and personalized customer assistance.',
    services: [
      'E-commerce',
      'UI/UX',
      'Web Development',
      'Responsive Design',
    ],
    url: 'https://www.richerblue.com/',
    displayUrl: 'richerblue.com',
    image: '/assets/images/projects/richerblue.png',
    imageAlt: 'Richerblue luxury jewelry e-commerce website homepage',
    layoutVariant: 'visual-right',
  },
  {
    id: 'ecocarry',
    number: '03',
    title: 'EcoCarry',
    category: 'SUSTAINABLE PRODUCTS / E-COMMERCE',
    description:
      'A product-focused e-commerce experience for sustainable bags and packaging products, designed to make a large catalog easier to explore and shop.',
    services: [
      'E-commerce',
      'Product Catalog',
      'UI/UX',
      'Responsive Development',
    ],
    url: 'https://ecocarry.co/',
    displayUrl: 'ecocarry.co',
    image: '/assets/images/projects/ecocarry.png',
    imageAlt: 'EcoCarry sustainable bags e-commerce website homepage',
    layoutVariant: 'full-width',
  },
  {
    id: 'jeem-energy',
    number: '04',
    title: 'Jeem Energy',
    category: 'RENEWABLE ENERGY / CORPORATE',
    description:
      'A modern corporate website for a renewable-energy company, combining strong visual storytelling with product discovery, solar solutions, company information, and lead-generation opportunities.',
    services: [
      'Corporate Website',
      'UI/UX',
      'Web Development',
      'Lead Generation',
    ],
    url: 'https://www.jeemenergy.com/',
    displayUrl: 'jeemenergy.com',
    image: '/assets/images/projects/jeemenergy.png',
    imageAlt: 'Jeem Energy renewable energy corporate website homepage',
    layoutVariant: 'offset',
  },
];
