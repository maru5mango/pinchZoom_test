import "./App.css";
import { useEffect } from "react";
import Swipe from "swipejs";
import SwipeDiv from "./component/swipe";

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
        <div className="card">
          <SwipeDiv num={1} imgArr={imgArr}></SwipeDiv>
        </div>
        <div className="btnArea">
          <button onClick={() => window.Swipe1.prev()}>prev</button>
          <button onClick={() => window.Swipe1.next()}>next</button>
        </div>
      </section>
      <section id="pinchZoom3">
        <h1>pinchZoom3</h1>
        <div className="card">
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
