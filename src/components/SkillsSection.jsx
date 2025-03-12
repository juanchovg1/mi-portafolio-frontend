import React from 'react';
import '../styles/components/SkillsSection.css';

const skills = [
  { category: 'Desarrollo & Low-Code', skills: [
    { name: 'Bubble.io', level: '90%' },
    { name: 'n8n', level: '85%' },
    { name: 'Zapier', level: '80%' },
    { name: 'AppSheet', level: '75%' },
  ]},
  { category: 'Backend & Automatización', skills: [
    { name: 'Python', level: '85%' },
    { name: 'SQL', level: '80%' },
    { name: 'Google Cloud Platform', level: '75%' },
    { name: 'APIs & Webhooks', level: '90%' },
  ]},
  { category: 'Frontend & Integraciones', skills: [
    { name: 'JavaScript', level: '70%' },
    { name: 'WordPress', level: '70%' },
    { name: 'Shopify API', level: '75%' },
  ]},
  { category: 'CRM & Marketing Automation', skills: [
    { name: 'Monday.com', level: '85%' },
    { name: 'Ontraport', level: '80%' },
    { name: 'Mailchimp', level: '75%' },
    { name: 'Authorize.net', level: '70%' },
  ]},
  { category: 'Herramientas de IA & Data', skills: [
    { name: 'OpenAI / GPT', level: '90%' },
    { name: 'Anthropic Claude', level: '85%' },
    { name: 'DeepSeek AI', level: '80%' },
    { name: 'AI Agents & RAG Systems', level: '85%' },
  ]},
  { category: 'Otros', skills: [
    { name: 'Botpress', level: '80%' },
  ]},
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-quote">"Efficiency through innovation—turning ideas into automated solutions."</p>
      {skills.map((category, index) => (
        <div key={index} className="skills-category">
          <h2 className="skills-category-title">{category.category}</h2>
          {category.skills.map((skill, idx) => (
            <div key={idx} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: skill.level }}></div>
              </div>
              <span className="skill-percentage">{skill.level}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
