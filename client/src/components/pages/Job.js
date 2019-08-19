import React from "react";
import { ListItem } from "./List";
import { Row, Col } from "./Grid";
// import "./style.css";

function Job({ title, technologies, salary, description, contactEmail, Button }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3 className="font-italic">{title}</h3>
                    {technologies && <h5 className="font-italic">{technologies}</h5>}
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href="">
                            View
            </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p className="font-italic small">Contact {contactEmail}</p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row>
        </ListItem>
    );
}

export default Job;
