export function pinchZoom2($img, resultID) {
  const result = document.getElementById(resultID);

  const cx = 1.5;
  const cy = 1.5;

  result.style.backgroundSize = `${$img.width * cx}px ${$img.height * cy}px`;
  result.style.display = "none";

  $img.addEventListener("touchstart", function () {
    $img.style.filter = `brightness(0.6)`;
    result.style.backgroundImage = `url(${$img.src})`;
    result.style.display = "";
  });

  $img.addEventListener("touchmove", moveLens, { passive: false });

  $img.addEventListener("touchend", function () {
    $img.style.filter = "";
    result.style.display = "none";
  });

  function moveLens(e) {
    e.preventDefault();

    var pos, x, y;
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
    const { left, top } = $img.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    return { x, y };
  }
}
