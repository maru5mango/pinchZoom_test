import "./App.css";
import { useEffect } from "react";
import Swipe from "swipejs";
import SwipeDiv from "./component/swipe";
import { pinchZoom1 } from "./logic/pinchZoom1";
import { pinchZoom2 } from "./logic/pinchZoom2";
import { pinchZoom3 } from "./logic/pinchZoom3";

const imgArr = [
  {
    src: "https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/10/19/12/30/elephant-6723451_960_720.jpg",
  },
];

function App() {
  useEffect(() => {
    Array.from(document.getElementsByClassName("sliderDiv")).map(($el, idx) => {
      window[`Swipe${idx}`] = new Swipe($el, {
        startSlide: 0,
        speed: 400,
        auto: 0,
        draggable: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        ignore: ".scroller",
        callback: function (index, elem, dir) {},
        transitionEnd: function (index, elem) {},
      });
    });

    Array.from(document.getElementsByClassName("pinchZoom0")).map(($el) => {
      pinchZoom1($el);
    });

    Array.from(document.getElementsByClassName("pinchZoom1")).map(($el) => {
      pinchZoom2($el, "result");
    });

    Array.from(document.getElementsByClassName("pinchZoom2")).map(($el) => {
      pinchZoom3($el, document.getElementById("pinchZoom3_div"));
    });
  }, []);

  return (
    <div>
      <section id="pinchZoom1">
        <h1>pinchZoom1</h1>
        <div className="card">
          <SwipeDiv num={0} imgArr={imgArr}></SwipeDiv>
        </div>
        <div className="btnArea">
          <button onClick={() => window.Swipe0.prev()}>prev</button>
          <button onClick={() => window.Swipe0.next()}>next</button>
        </div>
      </section>
      <section id="pinchZoom2">
        <h1>pinchZoom2</h1>
        <div id="pinchZoom2-div">
          <div id="result" className="img-zoom-lens"></div>
          <div className="card">
            <SwipeDiv num={1} imgArr={imgArr}></SwipeDiv>
          </div>
        </div>
        <div className="btnArea">
          <button onClick={() => window.Swipe1.prev()}>prev</button>
          <button onClick={() => window.Swipe1.next()}>next</button>
        </div>
      </section>
      <section id="pinchZoom3">
        <h1>pinchZoom3</h1>
        <div className="card" id="pinchZoom3_div">
          <SwipeDiv num={2} imgArr={imgArr}></SwipeDiv>
        </div>
        <div className="btnArea">
          <button onClick={() => window.Swipe2.prev()}>prev</button>
          <button onClick={() => window.Swipe2.next()}>next</button>
        </div>
      </section>
    </div>
  );
}

export default App;
