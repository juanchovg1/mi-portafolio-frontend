import React from 'react';
import '../styles/components/SkillsSection.css';

const skills = [
{ category: 'Development & Low-Code', skills: [
    { name: 'Bubble.io', level: '95%' },
    { name: 'n8n', level: '90%' },
    { name: 'Zapier', level: '95%' },
    { name: 'AppSheet', level: '85%' },
]},
{ category: 'Backend & Automation', skills: [
    { name: 'Python', level: '85%' },
    { name: 'SQL', level: '80%' },
    { name: 'Google Cloud Platform', level: '75%' },
    { name: 'APIs & Webhooks', level: '95%' },
]},
{ category: 'Frontend & Integrations', skills: [
    { name: 'JavaScript', level: '70%' },
    { name: 'WordPress', level: '70%' },
    { name: 'Shopify API', level: '75%' },
]},
{ category: 'CRM & Marketing Automation', skills: [
    { name: 'Monday.com', level: '95%' },
    { name: 'Ontraport', level: '85%' },
    { name: 'Mailchimp', level: '85%' },
    { name: 'Authorize.net', level: '80%' },
]},
{ category: 'IA Tools & Data', skills: [
    { name: 'OpenAI / GPT', level: '90%' },
    { name: 'Anthropic Claude', level: '85%' },
    { name: 'DeepSeek AI', level: '80%' },
    { name: 'AI Agents & RAG Systems', level: '85%' },
]},
];

const SkillsSection = () => {
return (
    <section className="skills-section">
    <h1 className="skills-title">My Skills</h1>
    <p className="skills-quote">"Efficiency through innovation—turning ideas into automated solutions."</p>
    <div className="skills-container">
        {skills.map((category, index) => (
            <div key={index} className="skills-category">
            <h2 className="skills-category-title">{category.category}</h2>
            <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill">
                    <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: skill.level }}></div>
                    </div>
                    </div>
                ))}
            </div>
            </div>
        ))}
    </div>
    </section>
);
};

export default SkillsSection;
