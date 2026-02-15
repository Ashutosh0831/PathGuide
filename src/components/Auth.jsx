import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      onLogin(data.token, data.username);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card" 
      style={{ maxWidth: '400px', margin: '4rem auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{isLogin ? 'Welcome Back' : 'Join FuturePath'}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>{isLogin ? 'Continue your career journey' : 'Start simulating your future'}</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div className="form-group">
          <label><User size={16} /> Username</label>
          <input type="text" name="username" placeholder="Enter your username" required value={formData.username} onChange={handleChange} />
        </div>
        
        <div className="form-group">
          <label><Lock size={16} /> Password</label>
          <input type="password" name="password" placeholder="••••••••" required value={formData.password} onChange={handleChange} />
        </div>

        {error && <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="primary" 
          style={{ marginTop: '1rem' }}
          disabled={loading}
        >
          {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
        </motion.button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          onClick={() => {
            setIsLogin(!isLogin);
            setFormData({ username: '', password: '' });
            setError(null);
          }} 
          style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </motion.div>
  );
};

export default Auth;
