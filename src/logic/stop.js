export function stopTouchEvent() {
  const eventName = ["touchmove", "gesturechange"];
  eventName.map((name) =>
    window.addEventListener(name, function (e) {
      e.preventDefault();
    })
  );
}
