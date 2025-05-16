import React, { useState } from 'react';
import useProductStore from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const { createProduct } = useProductStore();
  const [ notifyMessage, setNotifyMessage ] = useState('');
  const [isError, setIsError] = useState(false);

  const handleAddProduct = async(e) => {
    e.preventDefault();
    const {success, message} = await createProduct(newProduct);
    
    if (success) {
      setNotifyMessage(`✅ Product "${newProduct.name}" added successfully!`);
      setIsError(false);
    } else {
      setNotifyMessage(`❌ Error: ${message}`);
      setIsError(true);
    }

    setTimeout(() => {
      setNotifyMessage('');
    }, 3000);

    setNewProduct({ name: '', price: '', image: '' });
  };

  const formStyle = {
    margin: '0 auto',
    backgroundColor: '#111827',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    width: '50%'
  };

  const inputStyle = {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  };

  const buttonStyle = {
    boxSizing: 'border-box',
    backgroundColor: '#5dade2',
    color: '#000',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '4rem 0',
    fontSize: '3rem',
    fontWeight: 'bold'
  };

  const notifyMessageStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    color: isError ? 'red' : 'green',
    fontWeight: 'bold',
    backgroundColor: isError ? '#ffe6e6' : '#e6ffe6',
    padding: '10px',
    borderRadius: '5px',
    border: `1px solid ${isError ? '#ffb2b2' : '#b2ffb2'}`,
  };

  return (
    <>
        <div style={titleStyle}>Create New Product</div>
        <form style={formStyle}>

            <input 
                type="text" 
                style={inputStyle}
                name='name'
                placeholder='Product Name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input 
                type='text'
                style={inputStyle}
                name='price'
                placeholder='Price'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input 
                type="text"
                style={inputStyle}
                name='image'
                placeholder='Image URL'
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <button onClick={handleAddProduct} style={buttonStyle}>Add Product</button>
        </form>

        {notifyMessage && <div style={notifyMessageStyle}>{notifyMessage}</div>}
    </>
  );
};

export default CreatePage;
