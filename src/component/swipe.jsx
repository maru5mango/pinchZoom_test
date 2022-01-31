import "../App.css";

const SwipeDiv = ({ imgArr, num }) => {
  return (
    <div className="sliderDiv swipe">
      <div className="swipe-wrap">
        {imgArr.map(({ src }, idx) => {
          return (
            <img
              key={`pinchZoom${num}_${idx}`}
              src={src}
              className={`pinchZoom${num}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SwipeDiv;
