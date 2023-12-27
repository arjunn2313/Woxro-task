import React from "react";
import "./bottom.css";

export default function Bottom() {
  return (
    <>
      <div className="bottom">
        <div className="bottom-section1">
          <div className="sec-child">
            <img src="assets\Mask group.png" alt="b-1" />
            <span>
              Explore large, destructible <br /> environments where no two games{" "}
              <br /> are ever the same.
            </span>
          </div>
          <div className="sec-child">
            <img src="assets\Mask group (1).png" alt="b-2" />
            <span>
              Team up with friends by sprinting,
              <br /> climbing and smashing your way to <br />
              earn your Victory Royale
            </span>
          </div>
          <div className="sec-child">
            <img src="assets\Mask group (2).png" alt="b-3" />
            <span>
              Discover even more ways to play <br />
              across thousands of creator-made <br />
              game genres
            </span>
          </div>
        </div>

        <div className="bottom-section2">

          <div className="b2-child">
            <span className="b2-head">Our Contribution</span>
            <span>
              Our core offering extends beyond mere profit generation; we
              emphasize the growth and active involvement of our user<br/> community.
              Collaborating with us represents an investment, rather than a mere
              expenditure. Our dedication to providing <br/> distinctive digital
              interactions guarantees unparalleled benefits for our clientele.
            </span>
          </div>

          <div className="b2-child2">
                <div className="b2-child2-elemet">
                    <h6>5M</h6>
                    <span>Daily User <br/> Engagements </span>
                </div>
                <div className="b2-child2-elemet">
                    <h6>$500K</h6>
                    <span>Revenue Surge for an <br/> Platform</span>
                </div>
                <div className="b2-child2-elemet">
                    <h6>10X</h6>
                    <span>ROAS on all our <br/> marketing campaigns</span>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
