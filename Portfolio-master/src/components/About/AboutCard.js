import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Sukumar </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br />I am pursuing Full Stack Web Development at
            Masaischool.
            <br />
            <br />
            Apart from coding, my hobbies are:-
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Geopolitics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
            <ImPointRight /> Acupressure
          </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Rest hard, work harder!"{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
