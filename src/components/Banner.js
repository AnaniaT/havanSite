import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["HAVAN"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to our site</span>
            <h1>{`We are`} <span className="txt-rotate" data-rotate='["HAVAN"]'><span className="wrap">{text}</span></span></h1>
              <p>
              We are a group of senior Medical students who aim to enhance the lives of university students in Ethiopia. We strive to offer high-quality educational services, create a supportive environment, and inspire students to reach their full potential by providing  range of services and programs including  mentorship, academic support, tutoring, career guidance, alumni advice, and relevant information to ensure quality education from the very beginning of university life. 
							</p>
              <br/>
              <h3>Mission</h3>
              <p>
              Through our various initiatives, we aim to equip students with the knowledge, skills, and confidence necessary to excel in their academic pursuits and future careers. 
              </p>
              <h3>Vision</h3>
              <p>
              By continuously innovating and expanding our services, we aim to become number-one destination for students looking for  comprehensive preparation, mentorship, and community engagement.
              </p>
          </Col>
          <Col xs={12} md={6} xl={5} className="md-del-me">
							<img src={contactImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
