import React from 'react';
import "./AboutsContents.css";


// import image
import AboutImg from "../../../assets/img/about.jpg";
import { Container } from 'react-bootstrap';

function AboutsContents() {
  return (
    <section id="about" className="about">
      <Container>
        <div className="row">
            <div className="col-lg-6">
              {/* <AboutImg className="img-fluid" alt="AboutImg"/> */}
              <img src={AboutImg} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
      </Container>
      {/* <div className="container">



      </div> */}
    </section>
  );
}

export default AboutsContents;
