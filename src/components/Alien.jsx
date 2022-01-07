import React, { Component } from "react";

export default class Alien extends Component {
  constructor(props){
    super(props);
    this.state = { 
        style:{
            height:"600px",
        }
    };
  }  
  render() {
    return (
      <div className="container-fluid" style={this.state.style}>
        <svg
          className="spaceship"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 109.3 116.8"
        >
          <g className="leg leg__4 leg--moving" id="leg-4">
            <path
              className="leg"
              d="M83.7 99.6l-8.8-13c-.8-1.1-.4-2.7.7-3.4 1.2-.7 2.7-.3 3.3.9L86.4 98c.4.7.1 1.7-.6 2.1-.7.4-1.6.2-2.1-.5z"
            ></path>
            <path
              className="leg leg__4__tip leg--moving-tip"
              d="M82.3 107.1l1.8-8.6c.1-.7.8-1.1 1.5-.9.7.2 1.1.9.8 1.5l-2.7 8.4-2 4.7.6-5.1z"
            ></path>
          </g>
          <g className="leg leg__1 leg--moving" id="leg-1">
            <path
              className="leg"
              d="M23.5 99.6l8.8-13c.8-1.1.4-2.7-.7-3.4-1.2-.7-2.7-.3-3.3.9L20.8 98c-.4.7-.1 1.7.6 2.1.7.4 1.6.2 2.1-.5z"
            ></path>
            <path
              className="leg leg__1__tip leg--moving-tip"
              d="M24.9 107.1l-1.8-8.6c-.1-.7-.8-1.1-1.5-.9-.7.2-1.1.9-.8 1.5l2.7 8.4 2 4.7-.6-5.1z"
            ></path>
          </g>
          <g id="alien">
            <path
              className="st1"
              id="body"
              d="M63.6 52.4c.3-1.4.1-3.1-.1-4.4-.3-1.8-1.4-1.2-1.9-.7s.2 2 0 3.1c-.1.7-1 1.6-1.5 2.1-7.7 1.2-12.8 10.8-12.8 10.8 5.1.2 14.1 0 20.3 0-.2-5.5.6-10.1-4-10.9z"
            ></path>
            <g className="head" id="head">
              <path
                className="st1"
                d="M55.9 46.3l-3.1-1.7c-3.3-1.9-2.4-6.9 1.4-7.5l5.6-.9c4.1-.7 8.4.1 12.1 2.2l5.1 2.9c3.3 1.9 2.4 6.9-1.4 7.5l-3.6.6c-5.5.7-11.2-.3-16.1-3.1z"
              ></path>
              <circle className="st2" cx="54.9" cy="41.2" r="3.1"></circle>
              <circle className="st2" cx="75.1" cy="44.8" r="3.1"></circle>
              <circle className="st3" cx="56.3" cy="40.2" r=".9"></circle>
              <circle className="st3" cx="53.4" cy="42.1" r=".9"></circle>
              <circle className="st3" cx="76.6" cy="43.9" r=".9"></circle>
              <circle className="st3" cx="73.7" cy="45.7" r=".9"></circle>
            </g>
          </g>
          <g id="spaceship">
            <path
              className="st4"
              d="M37.8 92.6c-7-1.6-14.1-7.6-14.9-11h67S57.7 97 37.8 92.6z"
            ></path>
            <path
              className="st5"
              d="M95.8 82.7l-17 1.2c-16.1 1.2-32.2 1.2-48.2 0l-16.8-1.2c-5.5 0-9.9-4.2-9.9-9.4s4.5-9.4 9.9-9.4h9l4.6.4c18.3 1.7 36.7 1.9 55 .6l13.5-1c5.5 0 9.9 4.2 9.9 9.4s-4.5 9.4-10 9.4z"
            ></path>
            <path
              className="st6"
              d="M77.4 14.1C108 9.3 88.3 56.2 89.2 63.9h-67s21.4-44.5 55.2-49.8z"
            ></path>
            <path
              className="st7"
              d="M102.8 79.8l-9.8.6c-25.6 1.6-51.2 1.6-76.8 0l-9.8-.6c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5l9.8.6C41.8 69 67.4 69 93 67.4l9.8-.6c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM82.8 12.5s-.9 1.3-3 .3c-1.7-10.1-1.4-8.9-1.4-8.9L70.1 0l10 2.5 2.7 10z"
            ></path>
            <path
              className="st4"
              d="M21.9 61.2c-1.8 1.8-2.8 2.9-2.8 2.9l12.7 1c15.8 1.3 31.6 1.3 47.4 0L92.4 64c0-.3-.1-.6-.1-.9-.3-1.8-1.8-3-3.6-3l-5.9.5c-18 1.6-36.1 1.6-54-.1l-4.2-.4c-1.1.1-2 .5-2.7 1.1zM82.8 11.4c.9.4 1.7 2.1 1.8 3-1 .6-2.5.8-3.4.8-3.6 0-4.8-.8-4.8-.8s4-4.3 6.4-3z"
            ></path>
            <g className="lantern_1" id="lantern_1">
              <circle className="st4" cx="7.3" cy="73.5" r="3.6"></circle>
              <circle className="st8" cx="7.3" cy="73.5" r="2.9"></circle>
              <circle className="st9" cx="8" cy="72.9" r="1.8"></circle>
            </g>
            <g className="lantern_2" id="lantern_2">
              <circle className="st4" cx="23.1" cy="74.5" r="3.6"></circle>
              <circle className="st8" cx="23.1" cy="74.5" r="2.9"></circle>
              <circle className="st9" cx="23.8" cy="73.9" r="1.8"></circle>
            </g>
            <g className="lantern_3" id="lantern_3">
              <circle className="st4" cx="38.9" cy="75.5" r="3.6"></circle>
              <circle className="st8" cx="38.9" cy="75.5" r="2.9"></circle>
              <circle className="st9" cx="39.6" cy="74.9" r="1.8"></circle>
            </g>
            <g className="lantern_4" id="lantern_4">
              <circle className="st4" cx="54.7" cy="75.5" r="3.6"></circle>
              <circle className="st8" cx="54.7" cy="75.5" r="2.9"></circle>
              <circle className="st9" cx="55.4" cy="74.9" r="1.8"></circle>
            </g>
            <g className="lantern_5" id="lantern_5">
              <circle className="st4" cx="70.6" cy="75.5" r="3.6"></circle>
              <circle className="st8" cx="70.6" cy="75.5" r="2.9"></circle>
              <circle className="st9" cx="71.2" cy="74.9" r="1.8"></circle>
            </g>
            <g className="lantern_6" id="lantern_6">
              <circle className="st4" cx="86.4" cy="74.5" r="3.6"></circle>
              <circle className="st8" cx="86.4" cy="74.5" r="2.9"></circle>
              <circle className="st9" cx="87" cy="73.9" r="1.8"></circle>
            </g>
            <g className="lantern_7" id="lantern_7">
              <circle className="st4" cx="102.2" cy="73.5" r="3.6"></circle>
              <circle className="st8" cx="102.2" cy="73.5" r="2.9"></circle>
              <circle className="st9" cx="102.9" cy="72.9" r="1.8"></circle>
            </g>
            <path
              className="st6"
              d="M87.4 23.2c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2zM89.1 26.1c.8-.3 1.6.2 1.6 1.1 0 7.5-.6 14.3-3.3 22.2.9-9.8 1.7-14.9 1-22-.1-.6.2-1.1.7-1.3z"
            ></path>
          </g>
          <g className="leg leg__3 leg--moving" id="leg-3">
            <path
              className="leg"
              d="M70.8 104.2l-8.8-13c-.8-1.1-.4-2.7.7-3.4 1.2-.7 2.7-.3 3.3.9l7.5 13.8c.4.7.1 1.7-.6 2.1-.7.5-1.6.3-2.1-.4z"
            ></path>
            <path
              className="leg leg__3__tip leg--moving-tip"
              d="M69.4 111.7l1.8-8.6c.1-.7.8-1.1 1.5-.9.7.2 1.1.9.8 1.5l-2.7 8.4-2 4.7.6-5.1z"
            ></path>
          </g>
          <g className="leg leg__2 leg--moving" id="leg-2">
            <path
              className="leg"
              d="M32.2 104.2l8.8-13c.8-1.1.4-2.7-.7-3.4-1.2-.7-2.7-.3-3.3.9l-7.5 13.8c-.4.7-.1 1.7.6 2.1.7.5 1.6.3 2.1-.4z"
            ></path>
            <path
              className="leg leg__2__tip leg--moving-tip"
              d="M33.6 111.7l-1.8-8.6c-.1-.7-.8-1.1-1.5-.9-.7.2-1.1.9-.8 1.5l2.7 8.4 2 4.7-.6-5.1z"
            ></path>
          </g>
        </svg>
      </div>
    );
  }
}
