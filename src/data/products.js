export const categories = [
  { id: "todos", name: "Todos" },
  { id: "sandwiches", name: "Sánguches" },
  { id: "bebidas", name: "Jugos y Bebidas" },
  { id: "acompanamientos", name: "Acompañamientos" },
  { id: "combos", name: "Combos" },
];

export const products = [
  // --- SÁNGUCHES ---
  {
    id: 1,
    name: "Chicharrón Tradicional",
    category: "sandwiches",
    price: 24.90,
    popular: true,
    description: "Crocante chicharrón de cerdo, camote frito en rodajas y abundante salsa criolla en pan francés artesanal.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Lechón a la Leña",
    category: "sandwiches",
    price: 25.90,
    popular: true,
    description: "Jugoso lechón horneado a la leña con salsa tártara de la casa y salsa criolla en pan artesanal.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Pavo a la Leña",
    category: "sandwiches",
    price: 26.50,
    popular: false,
    description: "Pechuga de pavo horneada a fuego lento, acompañada de cebolla caramelizada, tártara y salsa criolla.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Lomo Fino",
    category: "sandwiches",
    price: 31.90,
    popular: true,
    description: "Cortes de lomo fino a la plancha con cebolla parrillada y doble queso fundido.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Asado de Res al Jugo",
    category: "sandwiches",
    price: 27.90,
    popular: false,
    description: "Asado de res suave cocinado en su propio jugo al estilo criollo peruano.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Pollo a la Leña",
    category: "sandwiches",
    price: 21.90,
    popular: false,
    description: "Pechuga de pollo a la plancha con tomate fresco, lechuga y salsa especial La Lucha.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"
  },

  // --- JUGOS Y BEBIDAS ---
  {
    id: 7,
    name: "Jugo de Maracuyá",
    category: "bebidas",
    price: 9.50,
    popular: true,
    description: "Jugo 100% natural de maracuyá fresca recién exprimida.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Jugo de Chicha Morada",
    category: "bebidas",
    price: 8.90,
    popular: true,
    description: "Tradicional chicha morada preparada con maíz morado, piña, manzana y canela.",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Jugo Surtido Especial",
    category: "bebidas",
    price: 11.50,
    popular: false,
    description: "Mezcla clásica de papaya, piña, plátano y un toque de algarrobina.",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Jugo de Mango y Fresa",
    category: "bebidas",
    price: 12.00,
    popular: false,
    description: "Combinación refrescante de pulpa de mango maduro y fresas frescas.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
  },

  // --- ACOMPAÑAMIENTOS ---
  {
    id: 11,
    name: "Papas Huayro Rústicas",
    category: "acompanamientos",
    price: 11.90,
    popular: true,
    description: "Papas nativas huayro cortadas a mano con piel y fritas al momento con sal marina.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Camotes Fritos",
    category: "acompanamientos",
    price: 9.90,
    popular: false,
    description: "Rodajas crocantes de camote dulce frito, ideales para acompañar cualquier sánguche.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },

  // --- COMBOS ---
  {
    id: 13,
    name: "Combo Lucha Chicharrón",
    category: "combos",
    price: 34.90,
    popular: true,
    description: "Sánguche de Chicharrón Tradicional + Papas Rústicas + Chicha Morada o Maracuyá.",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Combo Lomo Fino",
    category: "combos",
    price: 41.90,
    popular: true,
    description: "Sánguche de Lomo Fino con queso + Papas Rústicas + Jugo natural a elección.",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80"
  }
];