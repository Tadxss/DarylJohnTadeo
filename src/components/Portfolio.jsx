import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Zap, ChevronDown, ExternalLink, Calendar, Award, Heart } from 'lucide-react';

const Portfolio = () => {
  // SEO Meta tags effect
  useEffect(() => {
    document.title = "Daryl John Tadeo - Full Stack Developer | React, Angular, Node.js, AWS";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experienced Full Stack Developer with 3+ years in React, Angular, Node.js, and AWS. Specializing in scalable web applications and cloud architecture. Based in Philippines.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experienced Full Stack Developer with 3+ years in React, Angular, Node.js, and AWS. Specializing in scalable web applications and cloud architecture. Based in Philippines.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Full Stack Developer, React Developer, Angular Developer, Node.js, AWS, JavaScript, TypeScript, Philippines Developer, Remote Developer, Web Developer');
    } else {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'Full Stack Developer, React Developer, Angular Developer, Node.js, AWS, JavaScript, TypeScript, Philippines Developer, Remote Developer, Web Developer';
      document.getElementsByTagName('head')[0].appendChild(keywords);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      ogTitleMeta.content = 'Daryl John Tadeo - Full Stack Developer';
      document.getElementsByTagName('head')[0].appendChild(ogTitleMeta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      ogDescMeta.content = 'Experienced Full Stack Developer with 3+ years in React, Angular, Node.js, and AWS. Available for remote opportunities.';
      document.getElementsByTagName('head')[0].appendChild(ogDescMeta);
    }
  }, []);
  
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP', 'C#', 'Java', 'C'],
    frontend: ['React', 'Angular', 'Next.js', 'Vite', 'Ionic', 'Redux', 'HTML5', 'CSS3', 'SCSS'],
    backend: ['Node.js', 'Express', 'Serverless', 'PHP', '.NET Core', 'MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'],
    cloud: ['AWS Lambda', 'EC2', 'S3', 'Kinesis', 'SQS', 'Jenkins', 'Azure']
  };

  const experiences = [
    {
      title: 'Jr. Software Developer',
      company: 'Meet Parker (Twenty7tec)',
      period: 'Nov 2022 - Jan 2025',
      type: 'Remote',
      highlights: [
        'Developed scalable applications with Angular, React, and TypeScript',
        'Built serverless backends using AWS Lambda, SQS, and Kinesis',
        'Integrated APIs (Twilio, MailGun) for communication solutions',
        'Automated CI/CD pipelines with Jenkins'
      ]
    },
    {
      title: 'Software Developer',
      company: 'SuiteSpot Technology',
      period: 'Sep 2023 - Jan 2024',
      type: 'Remote',
      highlights: [
        'Built dynamic frontends with Angular, Ionic, and TypeScript',
        'Maintained robust backends with Node.js and MongoDB',
        'Achieved high code quality through SonarQube testing'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: '8th Sparks Technologies Inc.',
      period: 'Apr 2022 - May 2023',
      type: 'Remote',
      highlights: [
        'Delivered solutions using Ionic, Angular, and TypeScript',
        'Implemented PHP/MySQL backends with optimized performance',
        'Integrated payment gateways and third-party APIs'
      ]
    }
  ];

  const projects = [
    {
      title: 'Keyboard Tester Pro',
      tech: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide React'],
      description: 'A professional keyboard testing and analysis tool with real-time key detection, cross-platform support, and comprehensive testing features.',
      features: ['Real-time key visualization', 'Cross-platform support', 'Statistics tracking', 'Export test results'],
      demoLink: 'https://keyboardtesterpro.netlify.app/',
      codeLink: 'https://github.com/Tadxss/KeyboardTesterPro'
    },
    {
      title: 'More Projects Coming Soon',
      tech: ['React', 'Angular', 'TypeScript', 'Low Code', 'Node.js'],
      description: 'Currently working on additional demo projects to showcase different aspects of full-stack development and modern web technologies.',
      features: ['In development', 'Various tech stacks', 'Low code solutions', 'Coming soon'],
      demoLink: '#',
      codeLink: '#',
      isComingSoon: true
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Daryl John Tadeo",
          "jobTitle": "Full Stack Developer",
          "description": "Experienced Full Stack Developer with 3+ years in React, Angular, Node.js, and AWS",
          "url": window.location.href,
          "sameAs": [
            "https://github.com/Tadxss",
            "https://www.linkedin.com/in/daryljohntadeo/"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Orani",
            "addressRegion": "Bataan",
            "addressCountry": "Philippines"
          },
          "email": "daryltadss.workemail@gmail.com",
          "telephone": "09955079004",
          "knowsAbout": [
            "JavaScript",
            "TypeScript", 
            "React",
            "Angular",
            "Node.js",
            "AWS",
            "Full Stack Development",
            "Cloud Architecture",
            "UI/UX"
          ]
        })}
      </script>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DT
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Daryl John Tadeo
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              3+ years of remote experience building scalable web applications with React, Angular, Node.js, and AWS. 
              Passionate about creating innovative solutions that drive business growth.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://drive.google.com/file/d/1Xm_np7VYXoyk-Nou6wOVBxiEHagFamR9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Award size={20} />
              View Resume
            </a>
            <a href="mailto:daryltadss.workemail@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://github.com/Tadxss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/daryljohntadeo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Orani, Bataan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>09955079004</span>
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Professional Background</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of remote experience in designing and implementing 
                scalable web applications. I specialize in modern JavaScript frameworks, cloud architecture, and creating 
                seamless user experiences.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My journey began with a Bachelor's degree in Information Technology from Gordon College, where I graduated 
                Cum Laude. Since then, I've worked with innovative companies, building everything from serverless applications 
                to complex e-commerce platforms.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400">Company Projects</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/20">
                <Code className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-sm text-gray-400">React, Angular, TypeScript, and modern UI frameworks</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/20">
                <Database className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Backend Development</h3>
                <p className="text-sm text-gray-400">Node.js, Express, PHP, databases, and API design</p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-500/20">
                <Cloud className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Cloud Architecture</h3>
                <p className="text-sm text-gray-400">AWS services, serverless, and DevOps practices</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-xl border border-yellow-500/20">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-gray-400">Optimization, testing, and scalable solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                  </div>
                  <div className="text-right ml-4">
                    <time className="text-gray-400 font-medium block mb-1">{exp.period}</time>
                    <span className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{exp.type}</span>
                  </div>
                </div>
                <ul className="space-y-2" role="list">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600/10 to-blue-600/10 p-6 rounded-xl border border-green-500/20">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 p-6 rounded-xl border border-yellow-500/20">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Demo Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            Here are some demo projects showcasing my technical skills and development approach. 
            Most of my professional work involves proprietary company projects that I've contributed to during my employment.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article key={index} className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${project.isComingSoon ? 'opacity-75' : ''}`}>
                <header>
                  <h3 className="text-xl font-bold mb-4 text-purple-400">{project.title}</h3>
                </header>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm" role="listitem">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1 mb-4" role="list" aria-label="Project features">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-400 mr-2" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <footer className="flex justify-between items-center">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${project.isComingSoon ? 'text-gray-500 cursor-not-allowed' : 'text-purple-400 hover:text-purple-300'}`}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    {project.isComingSoon ? 'Coming Soon' : 'Live Demo'}
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${project.isComingSoon ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:text-gray-300'}`}
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github size={16} aria-hidden="true" />
                    {project.isComingSoon ? 'In Progress' : 'Code'}
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:daryltadss.workemail@gmail.com" className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              <Mail size={20} />
              daryltadss.workemail@gmail.com
            </a>
            <a href="tel:09955079004" className="flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              <Phone size={20} />
              09955079004
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/Tadxss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-slate-700">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/daryljohntadeo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-slate-700">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Developer Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Code className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold text-slate-200">Developed by</span>
              </div>
              <p className="text-xl font-bold text-purple-400 mb-2">Daryl John Tadeo</p>
              <p className="text-slate-400 text-sm">Full Stack Developer & UI/UX Enthusiast</p>
            </div>
            
            {/* Technologies Used */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold text-slate-200">Built with</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Lucide Icons</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 mb-3">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-lg font-semibold text-slate-200">Made with Passion</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">
                © {new Date().getFullYear()} Daryl John Tadeo
              </p>
              <p className="text-slate-500 text-xs">
                Professional portfolio & project showcase
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-400 text-sm">
                Full Stack Developer specializing in Angular, React, Node.js, PHP,and AWS cloud solutions
              </div>
              <div className="text-slate-500 text-xs">
                Available for remote opportunities worldwide
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;