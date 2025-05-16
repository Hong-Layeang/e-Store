import { useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useProductStore from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = ({ darkMode }) => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '32px',
    marginBottom: '20px',
  };

  const containerStyle = {
    minHeight: '100vh',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const productGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={gradientTextStyle}>
        Current Products <FaRocket style={{ color: '#ec4899', marginLeft: '0.5rem' }} />
      </h1>

      <div style={productGridStyle}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p
            style={{
              marginTop: '1.5rem',
              color: darkMode ? '#d1d5db' : '#4b5563',
              fontSize: '18px',
            }}
          >
            No products found{' '}
            <span style={{ color: darkMode ? '#fff' : '#000' }}>😕</span>{' '}
            <Link to="/createpage" style={{ color: '#8b5cf6', textDecoration: 'underline' }}>
              Create a product
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
