import React from "react";
import FooterLogo from "./FooterLogo";
import ig from "../Footer/Icons/ig.svg";
import fb from "../Footer/Icons/fb.svg";
import tw from "../Footer/Icons/tw.svg";
import yt from "../Footer/Icons/yt.svg";
import sc from "../Footer/Icons/sc.svg";
import pt from "../Footer/Icons/pt.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <nav className="footer-nav">
          <section className="social">
            <ul>
              <li>
                <a
                  href="https://instagram.com/carharttwip/"
                  target="_blank"
                  class="instagram"
                  rel="nofollow"
                >
                  <img src={ig} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carharttwip/"
                  target="_blank"
                  class="instagram"
                  rel="nofollow"
                >
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carharttwip/"
                  target="_blank"
                  class="instagram"
                  rel="nofollow"
                >
                  <img src={tw} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carharttwip/"
                  target="_blank"
                  class="instagram"
                  rel="nofollow"
                >
                  <img src={yt} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carharttwip/"
                  target="_blank"
                  class="instagram"
                  rel="nofollow"
                >
                  <img src={sc} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carharttwip/"
                  target="_blank"
                  class="instagram"
                  rel="nofollow"
                >
                  <img src={pt} alt="" />
                </a>
              </li>
            </ul>
          </section>
          <section className="footer-links">
            <ul>
              <li>
                <a href="#a">faq</a>
              </li>
              <li>
                <a href="#a">terms & conditions</a>
              </li>
              <li>
                <a href="#a">imprint</a>
              </li>
              <li>
                <a href="#a">privacy statement</a>
              </li>
              <li>
                <a href="#a">jobs</a>
              </li>
              <li>
                <a href="#a">contact</a>
              </li>
              <li>
                <a href="#a">history</a>
              </li>
              <li>
                <a href="#a">corporate responsibility</a>
              </li>
              <li>
                <a href="#a">compliance</a>
              </li>
              <li>
                <a href="#a">returns</a>
              </li>
              <li>
                ©2022 <FooterLogo />
              </li>
            </ul>
          </section>
        </nav>
        <section className="newsletter">
          <form action="">
            <h4 class="newsletter-heading">Sign up for our newsletter.</h4>
            <div className="revealed-inputs">
              <div className="contact-input">
                <input
                  type="email"
                  placeholder="Carhartt WIP Newsletter"
                  className="newsletter-form"
                />
              </div>
            </div>
            <input
              class="button"
              id="submit"
              type="submit"
              value="Subscribe"
            ></input>
          </form>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
