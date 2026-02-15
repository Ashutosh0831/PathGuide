import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Heart, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const ProfileForm = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    skills: '',
    interests: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Shape Your Future</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Enter your details to generate a personalized career strategy.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div className="form-group">
          <label><User size={16} style={{ display: 'inline', marginRight: '8px' }}/> Full Name</label>
          <motion.input 
            whileFocus="focus" variants={inputVariants}
            type="text" name="name" placeholder="e.g. Alex Chen" required 
            value={formData.name} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><Briefcase size={16} style={{ display: 'inline', marginRight: '8px' }}/> Current Role</label>
          <motion.input 
            whileFocus="focus" variants={inputVariants}
            type="text" name="role" placeholder="e.g. Junior Frontend Dev" required 
            value={formData.role} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><Code size={16} style={{ display: 'inline', marginRight: '8px' }}/> Skills (comma separated)</label>
          <motion.textarea 
            whileFocus="focus" variants={inputVariants}
            name="skills" placeholder="e.g. React, JavaScript, CSS, Communication" rows={3} required 
            value={formData.skills} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><Heart size={16} style={{ display: 'inline', marginRight: '8px' }}/> Interests</label>
          <motion.textarea 
            whileFocus="focus" variants={inputVariants}
            name="interests" placeholder="e.g. AI, fin-tech, leadership, design" rows={2} required 
            value={formData.interests} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><MapPin size={16} style={{ display: 'inline', marginRight: '8px' }}/> Location</label>
          <motion.input 
            whileFocus="focus" variants={inputVariants}
            type="text" name="location" placeholder="e.g. San Francisco (or Remote)" required 
            value={formData.location} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px' }}/> Resume Content (Optional)</label>
          <motion.textarea 
            whileFocus="focus" variants={inputVariants}
            name="resume" placeholder="Paste your resume text here for AI analysis..." rows={5}
            value={formData.resume} onChange={handleChange}
            style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}
          />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit" 
          className="primary" 
          style={{ marginTop: '1rem', width: '100%', fontSize: '1.2rem' }}
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : <>Generate Strategy <ArrowRight size={20} /></>}
        </motion.button>

      </form>
    </motion.div>
  );
};

export default ProfileForm;
