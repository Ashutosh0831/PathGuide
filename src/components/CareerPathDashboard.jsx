
import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, DollarSign, Calendar, BookOpen, CheckCircle, BarChart2, ExternalLink, Lock } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const CareerPathDashboard = ({ result, profile, onReset }) => {
  const [selectedPathIndex, setSelectedPathIndex] = React.useState(0);
  const [activeWeek, setActiveWeek] = React.useState(1);
  const [completedTasks, setCompletedTasks] = React.useState({});

  const toggleTask = (pathId, taskIdx) => {
    setCompletedTasks(prev => {
      const pathTasks = { ...(prev[pathId] || {}) };
      if (pathTasks[taskIdx]) {
        delete pathTasks[taskIdx];
      } else {
        pathTasks[taskIdx] = true;
      }
      return { ...prev, [pathId]: pathTasks };
    });
  };
  
  if (!result) return null;

  const currentPath = result.paths[selectedPathIndex];
  // Calculate skills gap counts for quick stats
  const missingCount = currentPath.skillsGap.filter(s => s.status === 'missing').length;

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="dashboard"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginTop: '2rem' }}
    >
      {/* Header */}
      <motion.div variants={item} style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '1rem' }}>
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {profile?.name ? `${profile.name.split(' ')[0]}'s` : "Your"} Strategic Roadmap
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>AI-Driven Insights for Your Next Leap</p>
      </motion.div>

      {/* Top Careers (Clickable) */}
      <motion.div variants={item} className="card" style={{ gridColumn: 'span 12' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <Target className="text-accent" /> Top 3 Career Trajectories (Click to View)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {result.paths.map((path, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPathIndex(idx)}
              style={{ 
                background: selectedPathIndex === idx ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255,255,255,0.03)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: selectedPathIndex === idx ? '2px solid var(--primary-color)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{path.title}</h4>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ 
                    background: idx === 0 ? 'var(--primary-color)' : 'var(--bg-card)', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>{path.match}% Overall</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>{path.description}</p>
              
              {/* Dynamic Trajectory Links */}
              {path.trajectoryLinks && (
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {path.trajectoryLinks.map((link, lIdx) => (
                    <a 
                      key={lIdx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ 
                        fontSize: '0.8rem', 
                        color: 'var(--primary-color)', 
                        textDecoration: 'none',
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {link.label} <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div variants={item} className="card" style={{ gridColumn: 'span 12', overflowX: 'auto' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <BarChart2 className="text-secondary" /> Market Comparison Matrix
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>Career Path</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>Est. Salary</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>Growth Outlook</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>Difficulty</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>Stability</th>
            </tr>
          </thead>
          <tbody>
            {result.paths.map((path, idx) => (
              <tr key={idx} style={{ 
                borderBottom: idx !== result.paths.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: idx === 0 ? 'rgba(59, 130, 246, 0.05)' : 'transparent'
              }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                  {path.title} {idx === 0 && <span style={{ fontSize: '0.7rem', background: 'var(--primary-color)', padding: '0.1rem 0.4rem', borderRadius: '4px', marginLeft: '0.5rem' }}>BEST FIT</span>}
                </td>
                <td style={{ padding: '1rem', color: 'var(--success-color)', fontWeight: '600' }}>{path.salary}</td>
                <td style={{ padding: '1rem' }}>{path.growth}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem',
                    background: path.difficulty === 'Easy' ? 'rgba(16, 185, 129, 0.2)' : 
                                path.difficulty === 'Moderate' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: path.difficulty === 'Easy' ? '#10b981' : 
                           path.difficulty === 'Moderate' ? '#f59e0b' : '#ef4444'
                  }}>
                    {path.difficulty}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} style={{ 
                        width: '8px', height: '8px', borderRadius: '50%', 
                        background: i < path.stability ? 'var(--text-accent)' : 'rgba(255,255,255,0.1)' 
                      }} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Skills Analysis */}
      <motion.div variants={item} className="card" style={{ gridColumn: 'span 12 md:span 6', gridColumnEnd: 'span 6' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <BarChart2 className="text-accent" /> Skill Gap Analysis ({currentPath.title})
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {['Already Strong', 'Needs Improvement', 'Missing Critical Skills'].map((category) => {
             const skills = currentPath.skillsGap.filter(s => s.category === category);
             if (skills.length === 0) return null;
             
             let color = 'var(--success-color)';
             if (category === 'Needs Improvement') color = 'var(--warning-color)';
             if (category === 'Missing Critical Skills') color = 'var(--accent-color)';

             return (
               <div key={category}>
                 <h4 style={{ fontSize: '0.9rem', color: color, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{category}</h4>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                   {skills.map((skill, idx) => (
                     <span key={idx} style={{ 
                       background: `color-mix(in srgb, ${color} 10%, transparent)`, 
                       border: `1px solid ${color}`,
                       color: 'var(--text-primary)',
                       padding: '0.3rem 0.8rem',
                       borderRadius: '6px',
                       fontSize: '0.85rem'
                     }}>
                       {skill.name}
                     </span>
                   ))}
                 </div>
               </div>
             );
          })}
        </div>
      </motion.div>

      {/* Learning Hub & Resources */}
      <motion.div variants={item} className="card" style={{ gridColumn: 'span 12 md:span 6', gridColumnEnd: 'span 6', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <DollarSign className="text-secondary" /> Estimated Salary Range
          </h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success-color)' }}>{currentPath.salary}</p>
        </div>
        
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <BookOpen className="text-secondary" /> Learning Hub ({currentPath.title})
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Free Resources */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Available Free Courses</h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {currentPath.learningResources.free.map((res, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-accent)', textDecoration: 'none' }}>
                      {res.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paid Certifications */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--warning-color)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Top Paid Certifications</h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {currentPath.learningResources.paidCourses.map((res, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                      {res.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Essential Tools */}
             <div>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Industry Standard Tools</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {currentPath.learningResources.tools.map((tool, idx) => (
                  <span key={idx} style={{ 
                    background: 'rgba(139, 92, 246, 0.1)', 
                    color: 'var(--secondary-color)', 
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    padding: '0.3rem 0.6rem', 
                    borderRadius: '6px',
                    fontSize: '0.85rem'
                  }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Roadmap */}
      <motion.div variants={item} className="card" style={{ gridColumn: 'span 12' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <Calendar className="text-accent" /> 6-Month Roadmap ({currentPath.title})
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {currentPath.roadmap.map((month, idx) => (
            <div key={idx} style={{ 
              background: 'rgba(255,255,255,0.03)', 
              padding: '1rem', 
              borderRadius: '10px',
              borderLeft: '4px solid var(--primary-color)'
            }}>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Month {month.month}</h4>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{month.focus}</p>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {month.tasks.map((task, tIdx) => (
                  <li key={tIdx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 7-Day Action Plan - Interactive TODOs */}
      <motion.div variants={item} className="card" style={{ 
        gridColumn: 'span 12', 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))',
        border: '1px solid var(--primary-color)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <TrendingUp className="text-accent" /> Action Plan: Week {activeWeek} ({currentPath.title})
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              Complete all tasks to unlock Week {activeWeek + 1}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '150px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden'
            }}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(Object.keys(completedTasks[currentPath.id] || {}).length / 28) * 100}%` }}
                style={{ height: '100%', background: 'var(--success-color)' }}
              />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
              {Math.round((Object.keys(completedTasks[currentPath.id] || {}).length / 28) * 100)}% Overall
            </span>
          </div>
        </div>

        {/* Week Selector Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {[1, 2, 3, 4].map(w => {
            const pathCompletedCount = Object.keys(completedTasks[currentPath.id] || {}).length;
            const isUnlocked = w === 1 || pathCompletedCount >= (w - 1) * 7;
            
            return (
              <button 
                key={w}
                onClick={() => isUnlocked && setActiveWeek(w)}
                style={{ 
                  whiteSpace: 'nowrap', 
                  opacity: isUnlocked ? 1 : 0.4,
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  border: activeWeek === w ? '2px solid var(--primary-color)' : '1px solid var(--card-border)',
                  background: activeWeek === w ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  color: activeWeek === w ? 'var(--primary-color)' : 'var(--text-secondary)',
                  fontWeight: 'bold',
                  minWidth: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                Week {w} {!isUnlocked && <Lock size={14} />}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           {/* Fallback for old data or missing week property */}
           {currentPath.dailyPlan && currentPath.dailyPlan.filter(d => (d.week || 1) === activeWeek).length > 0 ? (
             currentPath.dailyPlan.filter(d => (d.week || 1) === activeWeek).map((dayItem, wIdx) => {
               // Calculate absolute index for completedTasks
               const absIdx = (activeWeek - 1) * 7 + wIdx;
               const isDone = completedTasks[currentPath.id]?.[absIdx];
               const isNext = !isDone && (absIdx === 0 || completedTasks[currentPath.id]?.[absIdx - 1]);
             
               return (
                 <motion.div 
                   key={absIdx} 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: isDone ? 0.6 : 1, y: 0 }}
                   className="todo-item"
                   style={{ 
                     display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'center',
                     background: isNext ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.03)', 
                     padding: '1.2rem', borderRadius: '10px', 
                     border: isNext ? '1px solid var(--primary-color)' : '1px solid transparent',
                     cursor: 'pointer', marginBottom: '0.8rem'
                   }}
                   onClick={() => toggleTask(currentPath.id, absIdx)}
                 >
                   <div style={{ 
                     width: '24px', height: '24px', borderRadius: '6px', 
                     border: '2px solid' + (isDone ? ' var(--success-color)' : ' var(--text-secondary)'),
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     background: isDone ? 'var(--success-color)' : 'transparent'
                   }}>
                     {isDone && <CheckCircle size={16} color="white" />}
                   </div>
                   
                   <div>
                     <div style={{ fontSize: '0.8rem', color: isDone ? 'var(--success-color)' : 'var(--text-accent)', fontWeight: 'bold', textTransform: 'uppercase' }}>
                       {dayItem.day} {isDone && '✓ COMPLETED'}
                     </div>
                     <h4 style={{ 
                       fontSize: '1.1rem', margin: '0.2rem 0',
                       textDecoration: isDone ? 'line-through' : 'none',
                       color: isDone ? 'var(--text-secondary)' : 'var(--text-primary)'
                     }}>{dayItem.title}</h4>
                     {!isDone && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{dayItem.task}</p>}
                   </div>

                   {isNext && (
                     <span style={{ 
                       fontSize: '0.7rem', background: 'var(--primary-color)', color: 'white', 
                       padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' 
                     }}>FOCUS</span>
                   )}
                 </motion.div>
               );
             })
           ) : (
             <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                <p>No tasks found for this week. Try regenerating your strategy to get the full 28-day plan.</p>
                <button onClick={onReset} className="outline" style={{ marginTop: '1rem' }}>Regenerate Plan</button>
             </div>
           )}
        </div>

        {/* Unlock Next Week Button */}
        {Object.keys(completedTasks[currentPath.id] || {}).length === activeWeek * 7 && activeWeek < 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginTop: '2rem' }}
          >
            <p style={{ color: 'var(--success-color)', marginBottom: '1rem', fontWeight: 'bold' }}>🚀 Week {activeWeek} Complete!</p>
            <button className="primary" onClick={() => setActiveWeek(activeWeek + 1)}>
              Unlock & Start Week {activeWeek + 1}
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Resume Analysis */}
      {result.resumeAnalysis && (
        <motion.div variants={item} className="card" style={{ gridColumn: 'span 12', border: '1px solid var(--primary-color)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
             <CheckCircle className="text-primary" /> Resume AI Audit
             <span style={{ 
               fontSize: '0.8rem', background: 'var(--primary-color)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '12px', marginLeft: 'auto' 
             }}>ATS Score: {result.resumeAnalysis.score}/100</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Improvements */}
            <div>
              <h4 style={{ color: 'var(--warning-color)', marginBottom: '1rem' }}>Critical Improvements</h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {result.resumeAnalysis.improvements.map((imp, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{imp}</li>
                ))}
              </ul>
              
              <h4 style={{ color: 'var(--text-accent)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Missing Keywords</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {result.resumeAnalysis.missingKeywords.map((kw, idx) => (
                  <span key={idx} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Rewrites & Tips */}
            <div>
              <h4 style={{ color: 'var(--success-color)', marginBottom: '1rem' }}>Smart Bullet Point Rewrites</h4>
              {result.resumeAnalysis.bulletRewrites.map((rewrite, idx) => (
                <div key={idx} style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px' }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#ef4444', textDecoration: 'line-through' }}>"{rewrite.original}"</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#10b981', fontWeight: 'bold' }}>"{rewrite.improved}"</p>
                </div>
              ))}

              <h4 style={{ color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ATS Optimization Tips</h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {result.resumeAnalysis.atsTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div variants={item} style={{ gridColumn: 'span 12', textAlign: 'center', padding: '2rem' }}>
        <button onClick={onReset} style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Start New Assessment</button>
      </motion.div>
    </motion.div>
  );
};

export default CareerPathDashboard;
