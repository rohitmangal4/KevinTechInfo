import crm from ".././assets/crm-7142692_1280.jpg"
import doctor from "../assets/medical-563427_1280.jpg"
import spares from "../assets/bike-909690_1280.jpg"
import movie from "../assets/movie-theater-4213751_1280.jpg"

const projectsData = [
  {
    id: 1,
    name: "CRM Project",
    shortDesc: "A scalable CRM system for business efficiency.",
    image: crm,
    techStack: ["React", "Tailwind CSS", "Java Spring Boot", "MySQL"],
    longDesc: `Our CRM solution is designed for small to large-scale enterprises looking to streamline their customer relationship management processes. Built using React and Tailwind CSS for the frontend, and Java Spring Boot with MySQL for backend and data handling, this system ensures robust performance and high scalability.
    
It includes modules like lead tracking, customer onboarding, sales pipelines, and analytics dashboards. The system is built with user roles in mind such as Super Admin, Manager, and Sales Team.  

Security, performance, and ease of use are core priorities. Custom dashboards per user role offer deeper business insights without sacrificing simplicity.`  
  },
  {
    id: 2,
    name: "Cure Connect",
    shortDesc: "Doctor appointment system with real-time booking.",
    image: doctor,
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    longDesc: `Cure Connect is a real-time doctor appointment booking platform that connects patients and doctors seamlessly. The app is built using the MERN stack for smooth client-server interaction, and Tailwind CSS for a clean UI.
    
Features include instant slot booking, doctor profiles, appointment reminders, and prescription management.  

Admins and doctors have dedicated dashboards for managing appointments and patient data securely. Cure Connect enables healthcare providers to digitalize their operations efficiently.`  
  },
  {
    id: 3,
    name: "VM Spares",
    shortDesc: "Bike spare parts e-commerce platform.",
    image: spares,
    techStack: ["Angular", "Java", "Tailwind CSS"],
    longDesc: `VM Spares is a modern e-commerce web application tailored for selling motorcycle spare parts. Developed using Angular for frontend, Java for backend services, and styled with Tailwind CSS, it delivers both performance and flexibility.
    
Customers can search, filter, and order parts online. Admins can manage inventory, prices, and orders through a secure portal.  

This system includes order tracking, secure checkout, and mobile responsiveness—optimized for garage owners and end-users alike.`  
  },
  {
    id: 4,
    name: "Popcorn Spot",
    shortDesc: "Online movie ticket booking software.",
    image: movie,
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    longDesc: `Popcorn Spot is a full-featured movie ticket booking system developed using MERN stack and Tailwind CSS. It enables users to view showtimes, select seats, and make payments securely online.
    
The system includes role-based access for Admins, Theaters, and Customers. Admins can add movies, showtimes, and theater details.  

Customers can view seating availability and pay via integrated gateways. It also supports mobile UI and QR code-based ticketing for entry.`  
  }
];

export default projectsData;
