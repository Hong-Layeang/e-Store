import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useProductStore from '../store/product';

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleDeleteProduct = async (productID) => {
    await deleteProduct(productID);
  };

  const handleChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (productID, updatedProduct) => {
    await updateProduct(productID, updatedProduct);
    setIsEditing(false);
  };

  const inputStyle = {
    boxSizing: 'border-box',
    display: 'block',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    width: '100%', 
    marginBottom: '10px', 
    padding: '8px'
  };

  return (
    <>
      {/* Product Card */}
      <div style={{
        backgroundColor: '#111827',
        color: 'white',
        borderRadius: '12px',
        width: '300px',
        height: '275px',
        margin: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ 
            width: '100%', 
            height: '150px', 
            objectFit: 'cover', 
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }} 
        />
        <div style={{ marginTop: '12px' }}>
          <h2 style={{ fontSize: '18px', margin: '0 0 6px' }}>{product.name}</h2>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>${product.price}</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{
                backgroundColor: '#60a5fa',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 10px',
                cursor: 'pointer',
                marginLeft: '10px',
              }}
              onClick={() => setIsEditing(true)}
            >
              <FaEdit />
            </button>
            <button
              style={{
                backgroundColor: '#f87171',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 10px',
                cursor: 'pointer',
              }}
              onClick={() => handleDeleteProduct(product._id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#1f2937',
            padding: '24px',
            borderRadius: '16px',
            width: '340px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            color: 'white',
          }}>
            <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600' }}>Edit Product</h2>

            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
              style={inputStyle}
            />
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              placeholder="Price"
              style={inputStyle}
            />
            <input
              type="text"
              name="image"
              value={editedProduct.image}
              onChange={handleChange}
              placeholder="Image URL"
              style={inputStyle}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
              <button
                onClick={() => setIsEditing(false)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#374151',
                  border: 'none',
                  color: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleSave(product._id, editedProduct)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#22c55e',
                  border: 'none',
                  color: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
