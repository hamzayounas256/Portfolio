import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import american from "../../Assets/Projects/american.png";
import emotion from "../../Assets/Projects/emotion.png";
import leave from "../../Assets/Projects/leave.png";
import diet from "../../Assets/Projects/diet.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={diet}
							isBlog={false}
							title="Diet Recommendation"
							description="Developed a comprehensive web application for diet recommendations using AI, incorporating React for the front-end, Python for AI, and Hugging Face for natural language processing. The application features five key modules: a homepage with diet-related content, a BMI assistant that predicts and displays diet recommendations based on user BMI, a disease assistant that suggests diets according to user-reported diseases, a reports section housing patient medical records, and a contact us page. I was responsible for the front-end development, ensuring seamless user experience and integration with AI-driven functionalities."
							ghLink="https://github.com/hamzayounas256/Diet-Recommendation"
							// demoLink="https://chatify-49.web.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={american}
							isBlog={false}
							title="American Electronics"
							description="Developed a user-friendly and efficient accounting software interface using React.js, enhancing the checkout experience for customers and streamlining sales processes for retailers. Utilized React's component-based architecture to build reusable UI elements, optimized performance, and ensured seamless integration with backend systems. Implemented features such as real-time inventory management, payment processing, and order tracking, resulting in improved sales efficiency and customer satisfaction."
							ghLink="https://github.com/hamzayounas256/americanweb"
							demoLink="https://crystalsolutions.com.pk/americanweb/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leave}
							isBlog={false}
							title="Leave Management System"
							description="Designed and developed a comprehensive Leave Management System using React.js, enabling employees and administrators to efficiently manage leave requests, approvals, and tracking. Key features included a user-friendly dashboard, leave balance tracking, multiple leave types, and automated approval workflows. Successfully implemented role-based access control, ensuring secure and compliant management of sensitive employee data. The system resulted in improved leave management efficiency, reduced administrative burdens, and enhanced employee satisfaction"
							ghLink="https://github.com/hamzayounas256/leave-webapp"
							// demoLink="https://editor.soumya-jit.tech/"
						/>
					</Col>

					{/* <Col md={4} className="project-card">
						<ProjectCard
							// imgPath={leaf}
							isBlog={false}
							title="CRUD"
							description="Developed a full-stack CRUD application utilizing Node.js, React.js, Express.js, and MySQL, demonstrating proficiency in designing and implementing end-to-end web development projects. Built a scalable and efficient backend using Node.js and Express.js, leveraging MySQL for data storage and management. Created a user-friendly frontend with React.js, enabling seamless data interaction and visualization. Successfully implemented CRUD operations, including data validation, authentication, and authorization, showcasing my ability to design and develop robust and data-driven applications."
							ghLink="https://github.com/hamzayounas256/crud-node-react"
							// demoLink="https://plant49-ai.herokuapp.com/"
						/>
					</Col> */}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
