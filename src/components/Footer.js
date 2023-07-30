import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          {/* White background */}
          <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
              <Row>
                <Col size={12} sm={6} className="text-center text-sm-start foot-brand">
                  <img src={logo} alt="Logo" />
                </Col>
                <Col size={12} sm={6} className="text-center text-sm-end">
                  <div className="social-icon at-foot">
                    <a target="_blank" href="https://www.youtube.com/channel/UCpHC_E7mu3pABMwVd-S-FCQ"><img src={navIcon1} alt="YouTube" /></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100094127586724"><img src={navIcon2} alt="Facebook" /></a>
                    <a target="_blank" href="https://t.me/havancoctutorialofficial"><img src={navIcon3} alt="Telegram" /></a>
                  </div>
                  <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
                </Col>                
              </Row>
            </div>
          </Col>




          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>
              Website made by Abel Tadesse <br/>
              Available on <a target="_blank" href="https://t.me/abiMtad">Telegram</a>, <a target="_blank" href="https://instagram.com/abiMtad">Instagram</a> and <a target="_blank" href="mailto:tadesseabel26@gmail.com">Gmail</a>
            </p>
            
          </Col>


        </Row>
      </Container>
    </footer>
  )
}
