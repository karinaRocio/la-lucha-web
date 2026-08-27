import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

// ⚠️ Asegúrate de poner 'export' aquí al inicio
export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  return (
    <section className="menu-section">
      <h2 className="menu-title">NUESTRO MENÚ</h2>
      
      <div className="category-buttons">
        {categories.map(cat => (
          <button 
            key={cat.id} 
            className={`btn-category ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}