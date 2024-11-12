// src/data/categories.js
import products from './products.json';

const categories = [...new Set(products.map(product => product.category))].map(category => ({
  id: category,
  name: category.charAt(0).toUpperCase() + category.slice(1) // Capitaliza la primera letra
}));

export default categories;
