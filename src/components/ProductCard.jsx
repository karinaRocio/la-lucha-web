import React from 'react';
import './ProductCard.css'; // <--- Importante agregar esta línea

export function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        {product.popular && (
          <span className="badge-popular">Popular</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">S/ {product.price.toFixed(2)}</span>
          <button 
            className="btn-add-cart"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}