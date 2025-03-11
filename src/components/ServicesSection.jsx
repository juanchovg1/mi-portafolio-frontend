import React from 'react';
import { FaCogs, FaRobot, FaLaptopCode, FaChartLine, FaPlug, FaDatabase } from 'react-icons/fa';
import '../styles/components/ServicesSection.css';

const services = [
  { icon: <FaCogs />, title: 'Automations & Workflows' },
  { icon: <FaRobot />, title: 'AI Agents & Chatbots' },
  { icon: <FaLaptopCode />, title: 'Custom Web Apps' },
  { icon: <FaChartLine />, title: 'Process Optimization' },
  { icon: <FaPlug />, title: 'API Development & Integration' },
  { icon: <FaDatabase />, title: 'Data Analytics & Reporting' },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h1 className="services-title">Services</h1>
      <p className="services-subtitle">"Empowering your business with cutting-edge solutions"</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <div className="service-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
