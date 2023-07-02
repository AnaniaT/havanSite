import hacademy from "../assets/img/services/hacademy.svg";
import hcoc from "../assets/img/services/hcoc.svg";
import hshop from "../assets/img/services/hshop.svg";
import hmed from "../assets/img/services/hmed.svg";
import htube from "../assets/img/services/htube.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const services = [
    {
      title: "Havan Academy",
      imgSrc: hacademy,
      desc: "An online learning and tutoring center for all freshman students",
      tHandle: "havanacademy",
    },
    {
      title: "Havan COC preparation center",
      imgSrc: hcoc,
      desc: "A platform where seniors at St. Paul & Black Lion Specialized Hospital assist their juniors",
      tHandle: "havancoctutorialofficial",
    },
    {
      title: "Havan Collection",
      imgSrc: hshop,
      desc: "An online market for students",
      tHandle: "havanbrand",
    },
    {
      title: "Havan Tube",
      imgSrc: htube,
      desc: "Educational and entertainment led YouTube channel",
      tHandle: "havantube",
    },
    {
      title: "Havan Medicos",
      imgSrc: hmed,
      desc: "Program where information about health science in Ethiopia is discussed",
      tHandle: "havanmedicos",
    },
  ]

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {
                            services.map(({ title, imgSrc, desc, tHandle }, index) => {
                              return (
                                <a target="_blank" href={"https://t.me/" + tHandle } className="item">
                                    <img src={imgSrc} alt="Image" />
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                </a>
                              )
                            })
                          }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
