// Comprehensive Knowledge Base simulating an AI model's training data (Localized for India)
const CAREER_DATABASE = [
  {
    id: 'frontend_senior',
    title: 'Senior Frontend Engineer',
    keywords: ['frontend', 'react', 'vue', 'angular', 'javascript', 'css', 'web', 'ui', 'ux', 'design'],
    requiredSkills: ['System Design', 'Performance Optimization', 'Advanced React Patterns', 'a11y', 'Testing Library'],
    tools: ['Next.js', 'Storybook', 'Figma', 'Jest', 'Webpack'],
    salary: '₹18 LPA - ₹35 LPA',
    description: 'Elevate web experiences by architecting scalable frontend systems and mentoring junior developers.',
    certifications: ['Meta Frontend Developer', 'AWS Certified Developer'],
    growthOutlook: 'High (15% YoY)',
    learningDifficulty: 'Moderate',
    stability: 4,
    resources: {
      free: [
        { title: 'Namaste JavaScript (YouTube)', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP' },
        { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
        { title: 'Patterns.dev', url: 'https://www.patterns.dev/' }
      ],
      paidCourses: [
        { title: 'Frontend Masters: Advanced React', url: 'https://frontendmasters.com/courses/advanced-react/' },
        { title: 'Udemy: Clean Code via TypeScript', url: 'https://www.udemy.com/course/understanding-typescript/' }
      ]
    }
  },
  {
    id: 'backend_architect',
    title: 'Backend System Architect',
    keywords: ['backend', 'api', 'database', 'sql', 'python', 'java', 'go', 'node', 'server', 'cloud'],
    requiredSkills: ['Microservices', 'Database Sharding', 'Cloud Design Patterns', 'Security', 'gRPC'],
    tools: ['Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'Kafka'],
    salary: '₹25 LPA - ₹50 LPA',
    description: 'Design the skeletal structure of complex server-side applications ensuring high availability and resilience.',
    certifications: ['AWS Solutions Architect', 'Google Professional Cloud Architect'],
    growthOutlook: 'Very High (22% YoY)',
    learningDifficulty: 'Hard',
    stability: 5,
    resources: {
      free: [
        { title: 'System Design Primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer' },
        { title: 'Gaurav Sen (YouTube)', url: 'https://www.youtube.com/c/GauravSensei' },
        { title: 'AWS Whitepapers', url: 'https://aws.amazon.com/whitepapers/' }
      ],
      paidCourses: [
        { title: 'Educative.io: Scalability', url: 'https://www.educative.io/courses/grokking-the-system-design-interview' },
        { title: 'Coursera: Google Cloud Architect', url: 'https://www.coursera.org/professional-certificates/google-cloud-architect' }
      ]
    }
  },
  {
    id: 'fullstack_lead',
    title: 'Lead Full Stack Engineer',
    keywords: ['fullstack', 'full stack', 'javascript', 'node', 'react', 'web', 'engineer', 'startup'],
    requiredSkills: ['End-to-End Testing', 'CI/CD Pipelines', 'System Architecture', 'Team Leadership', 'Mentorship'],
    tools: ['Vercel', 'Supabase', 'GitHub Actions', 'Prisma', 'TypeScript'],
    salary: '₹22 LPA - ₹45 LPA',
    description: 'Bridge the gap between client and server, leading the technical vision for entire product features.',
    certifications: ['MongoDB Certified Developer', 'Azure DevOps Engineer'],
    growthOutlook: 'High (18% YoY)',
    learningDifficulty: 'Hard',
    stability: 4,
    resources: {
      free: [
        { title: 'FullStackOpen.com', url: 'https://fullstackopen.com/en/' },
        { title: 'The Odin Project', url: 'https://www.theodinproject.com/' }
      ],
      paidCourses: [
        { title: 'Udemy: Complete Web Bootcamp', url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/' },
        { title: 'Wes Bos: Advanced React', url: 'https://wesbos.com/courses' }
      ]
    }
  },
  {
    id: 'data_scientist',
    title: 'Senior Data Scientist',
    keywords: ['data', 'analysis', 'python', 'statistics', 'machine learning', 'ai', 'sql', 'pandas', 'research'],
    requiredSkills: ['Deep Learning', 'NLP', 'Big Data Processing', 'MLOps', 'Statistical Modeling'],
    tools: ['TensorFlow', 'PyTorch', 'Jupyter', 'Spark', 'Snowflake'],
    salary: '₹15 LPA - ₹30 LPA',
    description: 'Extract actionable insights from vast datasets to drive strategic business decisions.',
    certifications: ['TensorFlow Developer Certificate', 'DataBricks Certified'],
    growthOutlook: 'Explosive (30% YoY)',
    learningDifficulty: 'Very Hard',
    stability: 5,
    resources: {
      free: [
        { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
        { title: 'Fast.ai: Practical Deep Learning', url: 'https://course.fast.ai/' },
        { title: 'Krish Naik (YouTube)', url: 'https://www.youtube.com/user/krishnaik06' }
      ],
      paidCourses: [
        { title: 'Scaler Academy: Data Science', url: 'https://www.scaler.com/data-science-course/' },
        { title: 'UpGrad: DS Diploma', url: 'https://www.upgrad.com/data-science-pgd-iiitb/' }
      ]
    }
  },
  {
    id: 'ai_engineer',
    title: 'AI/ML Engineer',
    keywords: ['ai', 'machine learning', 'robotics', 'automation', 'llm', 'nlp', 'vision', 'neural networks'],
    requiredSkills: ['Model Tuning', 'RAG Architecture', 'Vector Databases', 'Python Optimization', 'GPU Computing'],
    tools: ['LangChain', 'HuggingFace', 'Pinecone', 'OpenAI API', 'CUDA'],
    salary: '₹20 LPA - ₹45 LPA',
    description: 'Build and deploy cutting-edge artificial intelligence models into production environments.',
    certifications: ['DeepLearning.AI Specs', 'NVIDIA DLI'],
    growthOutlook: 'Explosive (40% YoY)',
    learningDifficulty: 'Very Hard',
    stability: 5,
    resources: {
      free: [
        { title: 'Hugging Face Course', url: 'https://huggingface.co/course/chapter1/1' },
        { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs/get_started/introduction' },
        { title: 'CampusX (YouTube)', url: 'https://www.youtube.com/@campusx-official' }
      ],
      paidCourses: [
        { title: 'Udacity: AI Engineer Nanodegree', url: 'https://www.udacity.com/course/ai-engineer-nanodegree--nd009t' },
        { title: 'Coursera: GenAI with LLMs', url: 'https://www.coursera.org/learn/generative-ai-with-llms' }
      ]
    }
  },
  {
    id: 'product_manager',
    title: 'Principal Product Manager',
    keywords: ['product', 'management', 'agile', 'scrum', 'business', 'user', 'strategy', 'roadmap', 'planning'],
    requiredSkills: ['Market Analysis', 'Stakeholder Management', 'Data-Driven Decision Making', 'UX Research', 'Roadmapping'],
    tools: ['Jira', 'Amplitude', 'Notion', 'Miro', 'ProdPad'],
    salary: '₹18 LPA - ₹40 LPA',
    description: 'Define the "why" and "what" of products, aligning engineering, design, and business goals.',
    certifications: ['PMP', 'CSPO', 'ISB Product Management'],
    growthOutlook: 'Stable (10% YoY)',
    learningDifficulty: 'Moderate',
    stability: 4,
    resources: {
      free: [
        { title: 'Y Combinator Startup School', url: 'https://www.startupschool.org/' },
        { title: 'The Product Folks (Community)', url: 'https://www.theproductfolks.com/' }
      ],
      paidCourses: [
        { title: 'UpGrad: Product Management', url: 'https://www.upgrad.com/product-management-certification-program-duke-ce/' },
        { title: 'Reforge: Product Strategy', url: 'https://www.reforge.com/' }
      ]
    }
  },
  {
    id: 'devops_sre',
    title: 'Site Reliability Engineer (SRE)',
    keywords: ['devops', 'cloud', 'infrastructure', 'server', 'linux', 'automation', 'aws', 'deploy', 'ops'],
    requiredSkills: ['Infrastructure as Code', 'Observability', 'Chaos Engineering', 'Incident Response', 'Networking'],
    tools: ['Terraform', 'Prometheus', 'Grafana', 'Ansible', 'CircleCI'],
    salary: '₹16 LPA - ₹32 LPA',
    description: 'Ensure systems are reliable, scalable, and automated, minimizing downtime and manual toil.',
    certifications: ['CKA (Kubernetes Admin)', 'HashiCorp Terraform Associate'],
    growthOutlook: 'High (20% YoY)',
    learningDifficulty: 'Hard',
    stability: 5,
    resources: {
      free: [
        { title: 'Kubernetes.io Docs', url: 'https://kubernetes.io/docs/home/' },
        { title: 'Roadmap.sh/devops', url: 'https://roadmap.sh/devops' }
      ],
      paidCourses: [
        { title: 'A Cloud Guru', url: 'https://acloudguru.com/' },
        { title: 'KodeKloud: CKA Course', url: 'https://kodekloud.com/courses/certified-kubernetes-administrator-cka/' }
      ]
    }
  },
  {
    id: 'ux_lead',
    title: 'Lead UX/UI Designer',
    keywords: ['design', 'visual', 'creative', 'art', 'ui', 'ux', 'web', 'graphic', 'interface'],
    requiredSkills: ['Design Systems', 'User Research', 'Prototyping', 'Accessibility Standards', 'Interaction Design'],
    tools: ['Figma', 'Adobe CC', 'Principle', 'Maze', 'Webflow'],
    salary: '₹12 LPA - ₹25 LPA',
    description: 'Shape the visual language and user journey of products to create delightful experiences.',
    certifications: ['Google UX Design', 'Nielsen Norman Group UX Master'],
    growthOutlook: 'Moderate (8% YoY)',
    learningDifficulty: 'Moderate',
    stability: 3,
    resources: {
      free: [
        { title: 'LawsofUX.com', url: 'https://lawsofux.com/' },
        { title: 'Figma Community', url: 'https://www.figma.com/community' },
        { title: 'Saptarshi Prakash (YouTube)', url: 'https://www.youtube.com/c/SaptarshiPrakash' }
      ],
      paidCourses: [
        { title: 'Interaction Design Foundation', url: 'https://www.interaction-design.org/' },
        { title: 'DesignBoat School', url: 'https://www.designboatschool.in/' }
      ]
    }
  },
  {
    id: 'marketing_director',
    title: 'Director of Growth Marketing',
    keywords: ['marketing', 'sales', 'social', 'brand', 'content', 'seo', 'growth', 'advertising'],
    requiredSkills: ['Performance Marketing', 'Conversion Rate Optimization', 'Budget Management', 'Brand Strategy', 'Leadership'],
    tools: ['Google Ads', 'HubSpot', 'Salesforce', 'Canva', 'Semrush'],
    salary: '₹15 LPA - ₹35 LPA',
    description: 'Drive revenue and user acquisition through strategic multi-channel marketing campaigns.',
    certifications: ['Google Ads Certification', 'HubSpot Inbound Marketing'],
    growthOutlook: 'Moderate (12% YoY)',
    learningDifficulty: 'Moderate',
    stability: 3,
    resources: {
      free: [
        { title: 'Google Digital Garage', url: 'https://learndigital.withgoogle.com/digitalgarage' },
        { title: 'HubSpot Academy', url: 'https://academy.hubspot.com/' }
      ],
      paidCourses: [
        { title: 'CXL Institute: Growth', url: 'https://cxl.com/institute/' },
        { title: 'UpGrad: Digital Marketing', url: 'https://www.upgrad.com/digital-marketing-pgd-mica/' }
      ]
    }
  },
  {
    id: 'security_engineer',
    title: 'Senior Cybersecurity Engineer',
    keywords: ['security', 'cyber', 'hack', 'network', 'defense', 'compliance', 'privacy', 'audit'],
    requiredSkills: ['Penetration Testing', 'Cryptography', 'Compliance (SOC2/GDPR)', 'Threat Analysis', 'Secure Coding'],
    tools: ['Wireshark', 'Metasploit', 'Burp Suite', 'Splunk', 'CrowdStrike'],
    salary: '₹14 LPA - ₹28 LPA',
    description: 'Protect organization assets and data from evolving digital threats and vulnerabilities.',
    certifications: ['CISSP', 'CEH', 'CompTIA Security+'],
    growthOutlook: 'Very High (25% YoY)',
    learningDifficulty: 'Hard',
    stability: 5,
    resources: {
      free: [
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { title: 'Hack The Box (Free)', url: 'https://www.hackthebox.com/' }
      ],
      paidCourses: [
        { title: 'OffSec: PEN-200 (OSCP)', url: 'https://www.offsec.com/courses/pen-200/' },
        { title: 'SANS Institute Training', url: 'https://www.sans.org/' }
      ]
    }
  }
];

const GENERAL_PATH = {
  id: 'general_tech',
  title: 'Digital Transformation Consultant',
  description: 'Leverage your unique background to guide businesses through digital evolution.',
  requiredSkills: ['Agile Methodologies', 'Digital Literacy', 'Change Management', 'Data Fluency'],
  tools: ['Slack', 'Zoom', 'Trello', 'G Suite', 'Asana'],
  salary: '₹8 LPA - ₹15 LPA',
  certifications: ['Certified ScrumMaster', 'Google Project Management'],
  growthOutlook: 'Stable (7% YoY)',
  learningDifficulty: 'Easy',
  stability: 3,
  resources: {
      free: ['Google Digital Garage', 'Atlassian Agile Coach'],
      paidCourses: ['PMI: PMP Certification', 'Coursera: Google Project Management Ccertificate']
    }
};

// Helper: Text tokenization and similarity scoring
const calculateMatchScore = (profileText, roleKeywords) => {
  const tokens = profileText.toLowerCase().split(/[\s,]+/);
  let matches = 0;
  roleKeywords.forEach(keyword => {
    if (tokens.some(token => token.includes(keyword) || keyword.includes(token))) {
      matches += 1;
    }
  });
  // Normalize score somewhat (max 100)
  return Math.min(Math.round((matches / Math.max(tokens.length, 5)) * 100) + 40, 98); 
  // Base 40 + variable match. This is a heuristic mock.
};

export const generateStrategy = async (profile) => {
  // Simulate "Thinking" time based on complexity
  const responseTime = 1500 + Math.random() * 1500;
  await new Promise(resolve => setTimeout(resolve, responseTime));

  const profileText = `${profile.role} ${profile.skills} ${profile.interests} ${profile.name}`.toLowerCase();
  
  // 1. Find Top 3 Roles
  const scoredRoles = CAREER_DATABASE.map(role => {
    const score = calculateMatchScore(profileText, role.keywords);
    return { ...role, match: score };
  })
  .sort((a, b) => b.match - a.match)
  .slice(0, 3);

  // Fallback if no good matches found (rare given broad keywords)
  if (scoredRoles.length === 0 || scoredRoles[0].match < 50) {
    scoredRoles.unshift({ ...GENERAL_PATH, match: 65 });
  }

  const primaryRole = scoredRoles[0];
  const secondaryRole = scoredRoles[1] || CAREER_DATABASE[Math.floor(Math.random() * CAREER_DATABASE.length)];
  const tertiaryRole = scoredRoles[2] || GENERAL_PATH;

  // 2. Enhanced Skill Analysis Logic
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const userSkills = profile.skills.split(',').map(normalize);
  const userInterests = profile.interests.split(',').map(normalize);

  const analyzeSkills = (role) => {
    let strongCount = 0;
    
    const analysis = role.requiredSkills.map(reqSkill => {
      const normReq = normalize(reqSkill);
      
      // 1. Check for Strong Match (in Skills)
      const isStrong = userSkills.some(us => us.includes(normReq) || normReq.includes(us));
      if (isStrong) {
        strongCount++;
        return { name: reqSkill, category: 'Already Strong', status: 'strong' };
      }

      // 2. Check for Needs Improvement (in Interests)
      const isInterest = userInterests.some(ui => ui.includes(normReq) || normReq.includes(ui));
      if (isInterest) {
        return { name: reqSkill, category: 'Needs Improvement', status: 'improve' };
      }

      // 3. Missing
      return { name: reqSkill, category: 'Missing Critical Skills', status: 'missing' };
    });

    const skillMatchPercentage = Math.round((strongCount / role.requiredSkills.length) * 100);
    return { analysis, skillMatchPercentage };
  };

  // Helper to generate full details for a specific role
  const generateRoleDetails = (role) => {
    const months = [
      'Foundation & Assessment', 'Core Competency', 'Advanced/Specialized', 
      'Portfolio & Application', 'Networking & Personal Brand', 'Career Launch'
    ];

    const { analysis, skillMatchPercentage } = analyzeSkills(role);
    
    // Weighted Score
    const compositeScore = Math.round((skillMatchPercentage * 0.6) + (role.match * 0.4));

    const missingSkills = analysis.filter(s => s.status === 'missing');
    const improveSkills = analysis.filter(s => s.status === 'improve');
    const allGaps = [...missingSkills, ...improveSkills];

    // Roadmap
    const roadmap = months.map((focus, index) => {
      const skillFocus = allGaps[index % allGaps.length]?.name || role.requiredSkills[index % role.requiredSkills.length];
      let tasks = [];
      if (index === 0) {
        tasks = [`Assess current proficiency in ${skillFocus}`, `Complete a crash course in ${skillFocus}`, 'Map out specific certification requirements'];
      } else if (index === 5) {
        tasks = [`Apply to 5 jobs requiring ${skillFocus}`, 'Schedule mock interviews', 'Finalize portfolio integration'];
      } else {
        tasks = [`Build a practical project using ${skillFocus}`, `Read documentation for ${skillFocus}`, `Join a community discussed ${skillFocus}`];
      }
      return { month: index + 1, focus, tasks };
    });

    // Daily Plan
    const dailyPlan = [
      { day: 'Day 1', title: 'Gap Analysis & Research', task: `Deep dive into the "${role.title}" role. Read 3 job descriptions and list every requirement you lack.` },
      { day: 'Day 2', title: 'Environment Setup', task: `Install and configure ${role.tools[0]} and ${role.tools[1] || 'Git'}. Create a "Hello World" project.` },
      { day: 'Day 3', title: 'Knowledge Kickoff', task: missingSkills.length > 0 ? `Start the first module of a course on ${missingSkills[0].name}.` : `Review advanced documentation for ${role.requiredSkills[0]}.` },
      { day: 'Day 4', title: 'Practical Application', task: `Build a small component or script using ${role.tools[0]} that solves a specific problem.` },
      { day: 'Day 5', title: 'Social Proof', task: `Update your LinkedIn headline. Follow 5 thought leaders in ${role.title}.` },
      { day: 'Day 6', title: 'Portfolio Strategy', task: `Draft a case study outline for a potential project that demonstrates ${role.requiredSkills[0]}.` },
      { day: 'Day 7', title: 'Weekly Review', task: 'Review progress from the week. Schedule learning blocks for the upcoming month.' }
    ];

    return {
      ...role,
      match: compositeScore,
      skillMatch: skillMatchPercentage,
      skillsGap: analysis,
      roadmap: roadmap,
      dailyPlan: dailyPlan,
      learningResources: {
        ...role.resources,
        certifications: role.certifications,
        tools: role.tools
      }
    };
  };

  // Generate details for all top 3 paths
  const detailedPaths = [primaryRole, secondaryRole, tertiaryRole].map(generateRoleDetails);

  // Resume Analysis (Global)
  let resumeAnalysis = null;
  if (profile.resume && profile.resume.length > 50) {
    const resumeLower = profile.resume.toLowerCase();
    const specificMissing = primaryRole.requiredSkills.filter(skill => !resumeLower.includes(skill.toLowerCase()));
    
    // ... (Keep existing resume logic condensed for brevity if unchanged, or re-include it fully)
    const toolMissing = primaryRole.tools.filter(tool => !resumeLower.includes(tool.toLowerCase()));
    const improvements = [];
    if (specificMissing.length > 0) improvements.push(`Integrate these keywords: ${specificMissing.join(', ')}.`);
    
    resumeAnalysis = {
      score: Math.max(10, 100 - (specificMissing.length * 10)),
      missingKeywords: specificMissing,
      improvements: improvements,
      bulletRewrites: [{ original: "Worked on features", improved: `Architected scalable modules using ${primaryRole.tools[0]}` }],
      atsTips: ["Use standard headings.", "Save as PDF."]
    };
  }

  return {
    paths: detailedPaths,
    resumeAnalysis: resumeAnalysis
  };
};
