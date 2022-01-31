export function pinchZoom3($img) {
  const cx = 1.5;
  const cy = 1.5;

  $img.addEventListener("touchstart", function () {});

  $img.addEventListener("touchmove", moveLens);

  $img.addEventListener("touchend", function () {});

  function moveLens(e) {
    var x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    const pos = getCursorPos(e);

    x = pos.x - 50 / 2;
    y = pos.y - 50 / 2;

    if (x > $img.width - 50) {
      x = $img.width - 50;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > $img.height - 50) {
      y = $img.height - 50;
    }
    if (y < 0) {
      y = 0;
    }

    // result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    // result.style.top = `calc(${pos.y}px - 75px)`;
    // result.style.left = `calc(${pos.x}px - 75px)`;
  }

  function getCursorPos(e) {
    const { pageX, pageY } = e || window.event;
    const { left, top } = $img.getBoundingClientRect();
    const x = pageX - left - window.pageXOffset;
    const y = pageY - top - window.pageYOffset;
    return { x, y };
  }
}
