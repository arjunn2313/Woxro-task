import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h6>Interested in delving deeper into the project?</h6>
      <span>
        If you'd like to explore further details about our initiatives or any of
        our <br/> affiliated brands, don't hesitate to connect. You can reach out to
        us via <br/> email at hello@abc.com or give us a call at +91 480 20802730.
      </span>
      <div className="footerBtn">
        <button className="footer-btn1">Ring us on Skype</button>
        <button className="footer-btn2">Contact Us</button>
      </div>

      <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
    </div>
  );
}
