import React from "react";
import '../styles/components/ResumeSection.css';

const experiences = [
{
    year: "2024-2025",
    title: "Automation Specialist",
    company: "Automated Dreams",
    location: "Portland, Oregon, United States (Remote)",
    description:
    "Implemented automation solutions, including a subscription management system integrating Authorize.net with Shopify and Ontraport. Developed an AI-driven multi-agent RAG framework with n8n, utilizing Anthropic, OpenAI, and Deepseek models.",
},
{
    year: "2024-Present",
    title: "Automation Specialist",
    company: "Rechsteiner Signature Homes",
    location: "Vancouver, BC, Canada (Remote)",
    description:
    "Developed a customer care platform integrating AI-driven solutions with Bubble API. Optimized project workflows, improving operational efficiency by 35%. Integrated advanced data analysis tools to enhance decision-making and client engagement.",
},
{
    year: "2023-2024",
    title: "Admin and Automation Assistant",
    company: "Rechsteiner Signature Homes",
    location: "Vancouver, BC, Canada (Remote)",
    description:
    "Automated CRM and lead management via Monday.com, increasing productivity by 25%. Developed email marketing automation with Mailchimp. Integrated a chatbot with Botpress and customized internal apps using AppSheet and Bubble.io.",
},
{
    year: "2024",
    title: "Consultant (Post-Habi Project)",
    company: "Habi",
    location: "Bogotá, Colombia (Remote)",
    description:
    "Optimized budget processes using Visual Basic and App Script, reducing manual input by 60%. Enhanced API integration between budget data and internal apps. Improved operational productivity by 15% through automation solutions.",
},
{
    year: "2022-2023",
    title: "Internal Tools Specialist",
    company: "Habi",
    location: "Bogotá, Colombia (Hybrid)",
    description:
    "Developed a scheduling application improving coordination by 85%. Created a property management system, reducing manual input by 40%. Improved workflow efficiency by 30% through cross-functional tool integration.",
},
{
    year: "2021-2022",
    title: "Junior BIM Modeler",
    company: "Maeds Constructores S.A.S",
    location: "Bogotá, Colombia (Hybrid)",
    description:
    "Developed Revit architectural models, ensuring accuracy and timely project execution. Prepared detailed plan packages and contributed to reducing material estimation errors by 15%.",
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
