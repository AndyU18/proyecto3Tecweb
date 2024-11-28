import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './ProductsManagement.module.css';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: null
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost/api/products.php');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setNewProduct(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description);
    formData.append('price', newProduct.price);
    formData.append('category', newProduct.category);
    formData.append('stock', newProduct.stock);
    if (newProduct.image) {
      formData.append('image', newProduct.image);
    }

    try {
      const response = await axios.post('/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setProducts([...products, response.data]);
      setShowModal(false);
      // Reset form
      setNewProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: null
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold mb-4 text-center">Tienda Deportiva - Productos</h1>
      
      <button 
        onClick={() => setShowModal(true)} 
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
      >
        Agregar Nuevo Producto
      </button>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className="text-2xl font-bold mb-4 text-white">Nuevo Producto</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input 
                name="name"
                placeholder="Nombre"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
                required 
              />
              <input 
                name="description"
                placeholder="Descripción"
                value={newProduct.description}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input 
                name="price"
                type="number"
                placeholder="Precio"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
                required 
              />
              <input 
                name="category"
                placeholder="Categoría"
                value={newProduct.category}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
                required 
              />
              <input 
                name="stock"
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
                required 
              />
              <input 
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <div className="flex justify-between">
                <button 
                  type="submit" 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                >
                  Guardar Producto
                </button>
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border border-gray-700 rounded-lg p-4 bg-gray-800 shadow-md">
            <h2 className="text-xl font-bold mb-2 text-white">{product.name}</h2>
            {product.image_path && (
              <img 
                src={`/uploads/${product.image_path}`} 
                alt={product.name} 
                className="w-full h-48 object-cover mb-4 rounded"
              />
            )}
            <p className="text-gray-400">{product.description}</p>
            <p className="text-white font-bold mt-2">Precio: ${product.price}</p>
            <p className="text-gray-400">Categoría: {product.category}</p>
            <p className="text-gray-400">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsManagement;
