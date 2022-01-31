export function pinchZoom2($img, resultID) {
  const result = document.getElementById(resultID);

  const cx = result.offsetWidth / 100;
  const cy = result.offsetHeight / 100;

  result.style.backgroundSize = `${$img.width * cx}px ${$img.height * cy}px`;

  $img.addEventListener("touchstart", function () {
    $img.style.filter = `brightness(0.6)`;
    result.style.backgroundImage = `url(${$img.src})`;
    result.style.display = "";
  });

  $img.addEventListener("touchmove", moveLens);

  $img.addEventListener("touchend", function () {
    $img.style.filter = "";
    result.style.display = "none";
  });

  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);

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

    result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    result.style.top = `calc(${pos.y}px - 75px)`;
    result.style.left = `calc(${pos.x}px - 75px)`;
  }

  function getCursorPos(e) {
    const { pageX, pageY } = e || window.event;
    const { left, top } = $img.getBoundingClientRect();
    const x = pageX - left - window.pageXOffset;
    const y = pageY - top - window.pageYOffset;
    return { x, y };
  }
}
