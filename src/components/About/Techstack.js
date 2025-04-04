import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiMysql,
	DiBootstrap,
	DiNpm,
	DiHtml5,
	DiCss3,
	DiPython,
	DiDjango,
	DiDatabase,
	DiCode,
} from "react-icons/di";
import {
	SiNextdotjs,
	SiReacthookform,
	SiReactquery,
	SiReacttable,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			{/* <Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col> */}
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDjango />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMysql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDatabase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNpm />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTailwindcss />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiReactquery />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiReacttable />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiReacthookform />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiBootstrap />
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<DiCode />
			</Col>
			{/* <Col xs={4} md={2} className="tech-icons">
				<DiResponsive />
			</Col> */}
			{/* <Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col> */}

			{/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}

			{/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
			{/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
		</Row>
	);
}

export default Techstack;
