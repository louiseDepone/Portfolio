import Project from './Project'

export default function Projects( ) {
 const project = [
    {
        projectName: "Stock Prediction Utilizing Time Series Algorithm",
        projectDescription: [
            "Developed a user-friendly frontend for managing laboratory inventory using React, Tailwind CSS, and Shadcn, enabling smooth tracking of supplies and assets.",
            "Integrated real-time charts with Chart.js to visualize inventory trends, usage, and predictive stock levels using time series forecasting (Prophet).",
            "Collaborated with the backend to implement Flask API, JWT authentication, and PostgreSQL for secure and efficient data handling, supporting inventory updates and user access.",
        ],
        projectImage:"#",
        projectLinkGitHub: "#",
        projectFrontendStack:["React", "Tailwind CSS", "Shadcn"],
        projectBackendStack: ["Flask"],
        projectDatabase: "PostgreSQL",
    },
    {
        projectName: "LineUp: Live Queueing System",
        projectDescription: [
            "Developed the backend of LineUp using .NET Web API (C#) and PostgreSQL for efficient queue management with real-time updates.",
            "Designed a flexible system with dynamic counters and locations, optimizing service flow based on queue length.",
            "Implemented email notifications for users when their ticket is near the front of the queue and upon transaction completion.",
        ],
        projectImage:"#",
        projectLinkGitHub: "https://github.com/louiseDepone/QueueBackend",
        projectFrontendStack:[],
        projectBackendStack: [".NET Web API"],
        projectDatabase: "PostgreSQL",
    },
    {
        projectName: "EaseSched: Scheduling System for Fast-food Restaurant",
        projectDescription: [
            "Led the frontend development for a fast-food restaurant scheduling system, using React+Vite and Tailwind.",
            "Implemented file import functionality, including support for CSV files.",
            "Collaborated with the backend team, which used Express, MySQL, and JWT.",
        ],
        projectImage:"#",
        projectLinkGitHub: "https://github.com/EaseSched/Final-EaseSched",
        projectFrontendStack:["React", "Tailwind CSS"],
        projectBackendStack: ["ExpressJS"],
        projectDatabase: "MySQL",
    }
 ]
  return (
    <div>
    <p className="font-bold text-2xl pb-5">PROJECTS</p>
    <div className="flex flex-col gap-10">
    
        {
            project.map((project, index) => (
                <Project
                    key={index}
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectImage={project.projectImage}
                    projectLinkGitHub={project.projectLinkGitHub}
                    projectFrontendStack={project.projectFrontendStack}
                    projectBackendStack={project.projectBackendStack}
                    projectDatabase={project.projectDatabase}
                />
            ))
        }
      </div>
  </div>
  )
}
