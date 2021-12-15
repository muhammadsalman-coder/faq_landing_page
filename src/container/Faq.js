import React from "react";
import "./faq.css";
import { Container, Accordion } from "react-bootstrap";
import data from "../data.json";

function Faq() {
  console.log("data", data);

  return (
    <>
      <header>FAQ</header>

      <Container>
        {data.map((value, index) => {
          return (
            <div class="body-container">
              <div className="question-container">
                <img src="logo192.png" />
                <Accordion className="main-accordion">
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>{value.question}</Accordion.Header>
                    <Accordion.Body>
                      {value.anwser}
                      {value.child ? (
                        <Accordion className="main-accordion">
                          <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                              {value.question}
                            </Accordion.Header>

                            <Accordion.Body>{value.anwser}</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      ) : (
                        <p></p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
}

export default Faq;
