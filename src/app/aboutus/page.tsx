import NAVBAR from "../components/nav-bar";
import styles from "../page.module.css";

const About = () => {
  return (
    <div>
      <main className={styles.main}>
        <header className="header-section ">
          <NAVBAR />
        </header>
        <div className="container-fluid  text-white py-5 gradient-bg">
          <div className="row">
            <div className="col-12 text-center">
              <h2>About Us</h2>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <h1>Image</h1>
            </div>
            <div className="col-lg-6  about-text">
              <h2>Company Information</h2>
              <h5 >
              Parshwa Impex offers wordclass products and services Since 1992
              </h5>
              <p>
                Our company, Parshwa Impex, was established in 1992. We have
                made a name for ourselves as one of the top suppliers in India.
                Our company is a leading seller of various types of bearings and
                industrial products. We take pride in introducing ourselves as
                one of the premier importers, stockists, and suppliers of ball,
                roller, taper roller, and needle roller bearings. Our founder,
                Hitesh Shah, started the bearing distribution business, and
                today, we offer a wide range of industrial products and
                bearings.
              </p>
            </div>
          </div>
        </div>

        <footer className="footer-section " style={{}}>
          <div className="row ">
            <div className="footer-bottom">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center text-lg-right pt-4">
                  <p style={{ fontSize: "10px" }}>
                    2024 PARSHWA IMPEX  Bearings and Company 
                  </p>
                  <ul className="footer-nav">
                    <li>
                      <a href="">DPA</a>
                    </li>
                    <li>
                      <a href="">Terms of Use</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy </a>
                    </li>
                    <li>
                      <a href="">support@company.com</a>
                    </li>
                    <li>
                      <a href="">(123) 456-7890</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
export default About;
