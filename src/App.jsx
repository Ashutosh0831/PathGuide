import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileForm from './components/ProfileForm';
import CareerPathDashboard from './components/CareerPathDashboard';
import Auth from './components/Auth';
import { Sparkles, LogOut } from 'lucide-react';

function App() {
  const [user, setUser] = useState(() => localStorage.getItem('fp_user'));
  const [token, setToken] = useState(() => localStorage.getItem('fp_token'));
  const [profile, setProfile] = useState(null);
  const [strategy, setStrategy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Persistence
  useEffect(() => {
    if (token && user) {
      localStorage.setItem('fp_token', token);
      localStorage.setItem('fp_user', user);
    } else {
      localStorage.removeItem('fp_token');
      localStorage.removeItem('fp_user');
    }
  }, [token, user]);

  const handleLogin = (authToken, username) => {
    setToken(authToken);
    setUser(username);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setProfile(null);
    setStrategy(null);
    setError(null);
  };

  const setGenericState = () => {
    setProfile(null);
    setStrategy(null);
    setError(null);
  };

  const handleGenerate = async (data) => {
    setLoading(true);
    setProfile(data);
    setError(null);
    try {
      const response = await fetch('/api/strategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to generate strategy. Server might be down.');
      }

      const result = await response.json();
      setStrategy(result);
    } catch (error) {
      console.error("Analysis failed", error);
      setError("Failed to connect to AI server. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setProfile(null);
    setStrategy(null);
  };

  if (!user) {
    return (
      <div className="app-container">
        <header style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '2rem 0', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <Sparkles size={40} style={{ color: 'var(--primary-color)' }} />
          <h1>FuturePath <span style={{ fontSize: '0.5em', verticalAlign: 'middle', background: 'var(--accent-color)', padding: '0.2em 0.6em', borderRadius: '20px', color: 'white' }}>BETA</span></h1>
        </header>
        <Auth onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '2rem 1rem', 
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Sparkles size={32} style={{ color: 'var(--primary-color)' }} />
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>FuturePath</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Welcome, {user}</span>
          <button onClick={handleLogout} className="outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <main style={{ minHeight: '60vh' }}>
        <AnimatePresence mode="wait">
          {!strategy && !loading && (
             <ProfileForm key="form" onGenerate={handleGenerate} isLoading={loading} />
          )}
          
          {loading && (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', marginTop: '4rem' }}
            >
              <div className="spinner" style={{ 
                width: '50px', 
                height: '50px', 
                border: '4px solid rgba(255,255,255,0.1)', 
                borderLeftColor: 'var(--primary-color)', 
                borderRadius: '50%', 
                margin: '0 auto 1rem',
                animation: 'spin 1s linear infinite' 
              }}></div>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Analyzing profile & market trends...</p>
              <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </motion.div>
          )}

          {error && (
            <motion.div 
               key="error"
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               style={{ textAlign: 'center', color: 'var(--warning-color)', marginTop: '2rem' }}
            >
              <p>{error}</p>
              <button className="primary" onClick={() => setError(null)} style={{ marginTop: '1rem' }}>Try Again</button>
            </motion.div>
          )}

          {strategy && (
             <CareerPathDashboard key="dashboard" profile={profile} result={strategy} onReset={handleReset} />
          )}
        </AnimatePresence>
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '4rem 0 2rem', 
        color: 'var(--text-secondary)', 
        fontSize: '0.9rem',
        borderTop: '1px solid var(--card-border)',
        marginTop: '4rem'
      }}>
        <p>&copy; 2026 FuturePath AI. Strategize your career with data.</p>
      </footer>
    </div>
  );
}

export default App;

