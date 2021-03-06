export function pinchZoom2($img, resultID) {
  const result = document.getElementById(resultID);

  const cx = 1.5;
  const cy = 1.5;

  result.style.backgroundSize = `${$img.width * cx}px ${$img.height * cy}px`;
  result.style.display = "none";

  $img.addEventListener("touchstart", function (e) {
    if (e.touches.length <= 1) return;
    $img.style.filter = `brightness(0.6)`;
    result.style.backgroundImage = `url(${$img.src})`;
    result.style.display = "";
    window.Swipe1.disable();
  });

  $img.addEventListener("touchmove", moveLens, { passive: false });

  $img.addEventListener("touchend", function () {
    window.Swipe1.enable();
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

    result.style.backgroundPosition = `-${x * cx - 75}px -${y * cy - 75}px`;
    result.style.top = `${pos.y - 75}px`;
    result.style.left = `${pos.x - 75}px`;
  }

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;

    a = $img.getBoundingClientRect();
    const cursor = getPoint([...e.touches]);
    x = cursor.x - a.left;
    y = cursor.y - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x, y };
  }

  function getPoint(arr) {
    return {
      x: arr.reduce((prev, cur) => prev + cur.pageX, 0) / arr.length,
      y: arr.reduce((prev, cur) => prev + cur.pageY, 0) / arr.length,
    };
  }
}
