import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { faqs } from "./homeData";

const FAQs = () => {
  return (
    <Container className="mt-5 mb-5 bg-black">
      <Accordion defaultActiveKey="1">
        {faqs.map((faq) => (
          <Accordion.Item
            eventKey={faq.id}
            key={faq.id}
            className="bg-black text-white border-0"
          >
            <Accordion.Header className="acc-head mt-2">
              {faq.question}
            </Accordion.Header>
            <Accordion.Body className="acc-body mt-2">
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQs;
