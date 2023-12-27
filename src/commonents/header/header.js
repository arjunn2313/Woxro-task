import React from "react";
import "./header.css";
import { IoIosClose } from "react-icons/io";

export default function Header() {
  return (
    <>
      <span className="closeBtn">
      <IoIosClose style={{color:'#fff'}} className="closeIcon" />
      </span>

      <div className="header">
        <span className="h-element1">
          {" "}
          Epic Games : An American video game and software developer <br/> And
          publisher based in Cary, North Carolina.
        </span>

        <img
          className="h-element2"
          src="assets\fortnite-pictures-b5kfcchwazwiz3cs 1.png"
          alt="header image"
        />

         
          <span className="h-element3">
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or<br/> discover over a million creator made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has <br/> an individual age rating so you can find the one
            that's right for you and your friends. Find it all in Fortnite ...
            Drop In.
          </span>
        
        
          <button className="header-btn">Visit Website</button>
        
      </div>
    </>
  );
}
