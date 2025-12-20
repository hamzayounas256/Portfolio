import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sendscale from "../../Assets/Projects/sendscale.png";
import sugarpixels from "../../Assets/Projects/sugarpixels.png";
import american from "../../Assets/Projects/american.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import leave from "../../Assets/Projects/leave.png";
import diet from "../../Assets/Projects/diet.png";
import billilo from "../../Assets/Projects/billilo.png";

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
							imgPath={sugarpixels}
							isBlog={false}
							title="Sugar Pixels AI"
							description="Developed a full-stack workspace automation platform that integrates data from multiple third-party APIs to dynamically generate, manage, and deploy websites."
							// ghLink="https://github.com/hamzayounas256"
							demoLink="https://www.sugarpixels.ai/"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sendscale}
							isBlog={false}
							title="Send Scale"
							description="Built a SaaS cold-email automation platform supporting email warm-up, multi-inbox unification, automated outreach campaigns, and detailed analytics dashboards."
							// ghLink="https://github.com/hamzayounas256/americanweb"
							demoLink="https://www.sendscale.com/"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={american}
							isBlog={false}
							title="Customer Relationship Management"
							description="Developed a React.js-based CRM to streamline customer management, sales tracking, and workflow automation, enhancing efficiency and engagement."
							ghLink="https://github.com/hamzayounas256/americanweb"
							demoLink="https://crystalsolutions.com.pk/crystalsol/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={ecommerce}
							isBlog={false}
							title="Ecommerce"
							description="Developed a full-stack e-commerce platform featuring secure authentication, product management, order processing, and a responsive UI for a seamless shopping experience."
							ghLink="http://github.com/hamzayounas256/ecommerce"
							// demoLink="https://editor.soumya-jit.tech/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={billilo}
							isBlog={false}
							title="Billilo - Pet App"
							description="Developed a full-stack pet management platform facilitating pet adoption, lost-and-found listings, and sales. Integrated location-based services for shelters and veterinary care, ensuring seamless user engagement and accessibility."
							ghLink="https://github.com/hamzayounas256/billilo"
							demoLink="https://www.billilo.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={diet}
							isBlog={false}
							title="Diet Recommendation"
							description="Built an AI-powered diet recommendation web app featuring personalized diet suggestions based on BMI, diseases, and patient records."
							ghLink="https://github.com/hamzayounas256/Diet-Recommendation"
							// demoLink="https://chatify-49.web.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leave}
							isBlog={false}
							title="Leave Management System"
							description="Developed a React.js-based Leave Management System with role-based access, automated approvals, and leave tracking, enhancing efficiency and employee satisfaction."
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
