import React from "react";
import '../styles/components/ResumeSection.css';

const experiences = [
  {
    year: "2024-Present",
    title: "Automation Specialist",
    company: "Automated Dreams",
    location: "Remote (Portland, OR, USA)",
    description:
      "Built automation solutions integrating Authorize.net, Shopify, and Ontraport for subscription management. Developed an AI-driven multi-agent RAG system using n8n, Anthropic, OpenAI, and Deepseek.",
  },
  {
    year: "2023-2024",
    title: "Automation Specialist",
    company: "Rechsteiner Signature Homes",
    location: "Remote (Vancouver, BC, Canada)",
    description:
      "Built an AI-powered customer care platform with Bubble API to streamline client interactions. Optimized workflows, improving efficiency by 35%, and implemented data analytics tools for decision-making.",
  },
  {
    year: "2024",
    title: "Admin & Automation Assistant",
    company: "Rechsteiner Signature Homes",
    location: "Remote (Vancouver, BC, Canada)",
    description:
      "Automated CRM & lead management on Monday.com, boosting productivity by 25%. Developed email marketing automations (Mailchimp) and integrated chatbots with Botpress & AppSheet.",
  },
  {
    year: "2022-2023",
    title: "Consultant (Post-Habi Project)",
    company: "Habi",
    location: "Remote (Bogotá, Colombia)",
    description:
      "Automated budget processes with Visual Basic & App Script, reducing manual work by 60%. Improved API integrations, optimizing data flow between financial systems and internal apps.",
  },
  {
    year: "2021-2022",
    title: "Internal Tools Specialist",
    company: "Habi",
    location: "Hybrid (Bogotá, Colombia)",
    description:
      "Developed a scheduling app, improving coordination by 85%. Created a property management system, reducing manual input by 40% and boosting workflow efficiency.",
  },
  {
    year: "2020-2021",
    title: "Junior BIM Modeler",
    company: "Maeds Constructores S.A.S",
    location: "Hybrid (Bogotá, Colombia)",
    description:
      "Created Revit architectural models, improving design accuracy and reducing material estimation errors by 15%.",
  },
];

const ResumeCard = ({ year, title, company, location, description }) => (
  <div className="resume-card">
    <h3 className="resume-year">{year}</h3>
    <h2 className="resume-card-title">{title}</h2>
    <h4 className="resume-card-company-location">{company} - {location}</h4>
    <p className="resume-card-description">{description}</p>
  </div>
);

const ResumeSection = () => {
  return (
    <section className="resume-section">
      <div className="resume-header">
        <h1 className="resume-main-title">Resume</h1>
        <p className="resume-quote">"Success is the sum of small efforts, repeated day in and day out." – Robert Collier</p>
      </div>
      <div className="resume-content">
        {experiences.map((exp, index) => (
          <ResumeCard key={index} {...exp} />
        ))}
      </div>
      <div className="resume-download">
        <a href="/CV_Juan_Villota.pdf" download className="button-primary">DOWNLOAD CV</a>
      </div>
    </section>
  );
};

export default ResumeSection;
