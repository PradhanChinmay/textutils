import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   backgroundColor: "#282828",
  //   color: "#FFFFFF",
  // });

  let myStyle = {
    color : (props.mode === 'light') ? 'black' : 'white',
    background : (props.mode === 'light') ? 'white' : '#282828'
  }

  return (
    <div className="container">
      <h2 className="mb-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyse your text very quickly and very efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <strong>Free to use.</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free characters counter tool that provides free and instant characters count and statistics for a given text.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The textutils app works in any browser such as chrome, firefox, opera, brave etc.,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
