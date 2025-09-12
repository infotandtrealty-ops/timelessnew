export type ShopProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'permanent-makeup' | 'cosmetology' | 'facial-aesthetics';
  originalPrice?: string;
  description?: string;
  inStock?: boolean;
};

export const allProducts: ShopProduct[] = [
  // Permanent Makeup
  { id: 'pm-eyetint-kit', name: 'Eyelash & Eyebrow Tint Kit', price: '₹ 4500', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-ring-cups', name: 'Ring Cups', price: '₹ 500', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-brow-pencil', name: 'Brow Mapping Pencil', price: '₹ 102', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-disposable-cups', name: 'Disposable Cups', price: '₹ 500', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-golden-ratio', name: 'Golden Ratio Ruler', price: '₹ 1400', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-latex-sheet', name: 'Latex Sheet', price: '₹ 245', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-lash-lift-kit', name: 'Eye Lash Lift Kit', price: '₹ 6500', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-lip-brush', name: 'Lip Brush', price: '₹ 600', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-brow-brush', name: 'Brow Brush', price: '₹ 600', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-silicon-cup-stand', name: 'Silicon Ink Cup Stand', price: '₹ 980', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-cartridge', name: 'PMU Cartridge', price: '₹ 240', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-caliper', name: 'Caliper', price: '₹ 640', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-blades', name: 'Microblading Blades', price: '₹ 70', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-tool', name: 'Microblading Tool', price: '₹ 980', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-pigment-mixer', name: 'Pigment Mixer', price: '₹ 1050', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-pigment-shaker', name: 'Pigment Shaker', price: '₹ 4100', image: '/images/placeholder.svg', category: 'permanent-makeup' },
  { id: 'pm-wonder', name: 'Timeless Wonder', price: '₹ 35899', image: '/images/placeholder.svg', category: 'permanent-makeup' },

  // Cosmetology
  { id: 'cos-testing-era', name: 'testing-era', price: '₹ 50', originalPrice: '₹ 2000', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-vampire-plla', name: 'Vampire PLLA Infusion', price: '₹ 5140', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-barbie-pink', name: 'Timeless Aesthetics Barbie Pink', price: '₹ 5140', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-cbd-1000', name: 'Timeless Aesthetics CBD 1000mg', price: '₹ 5140', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-blue-glacier', name: 'Blue Glacier Cryo Hydrojelly', price: '₹ 5140', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-plasma-pen', name: 'Plasma Pen', price: '₹ 0', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-mesopen', name: 'Mesopen', price: '₹ 13840', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-contouring-mask', name: 'Contouring Mask', price: '₹ 5899', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-enzyme-cleanser', name: 'Enzyme Cleanser', price: '₹ 2949', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-radience', name: 'Radience', price: '₹ 218300', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-eden', name: 'Eden', price: '₹ 0', image: '/images/placeholder.svg', category: 'cosmetology' },
  { id: 'cos-lucent', name: 'Lucent', price: '₹ 17699', image: '/images/placeholder.svg', category: 'cosmetology' },

  // Facial Aesthetics
  { id: 'fa-cogg-threads', name: 'Cogg Threads', price: '₹ 16700', image: '/images/placeholder.svg', category: 'facial-aesthetics' },
];


