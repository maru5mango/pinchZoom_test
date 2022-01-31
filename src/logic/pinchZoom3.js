export function pinchZoom3($img, $parent) {
  const tempImg = document.createElement("img");
  tempImg.src = $img.src;
  tempImg.classList.add("new-img-zoom");

  const cx = 1.5;
  const cy = 1.5;

  $img.addEventListener("touchstart", function (e) {
    // if (e.touches.length <= 1) return;
    window.Swipe2.disable();
    $parent.append(tempImg);
    $img.style.opacity = 0;
    tempImg.style.width = `${$img.width * cx}px`;
    tempImg.style.height = `${$img.height * cy}px`;
  });

  $img.addEventListener("touchmove", moveLens, { passive: false });

  $img.addEventListener("touchend", function () {
    $img.style.opacity = 1;
    window.Swipe2.enable();
    tempImg.remove();
  });

  function moveLens(e) {
    e.preventDefault();

    var pos, x, y;

    pos = getCursorPos(e);

    y = Math.min(pos.y - tempImg.height / 2, tempImg.height - $img.height);
    x = Math.min(pos.x - tempImg.width / 2, tempImg.width - $img.width);

    tempImg.style.top = `${y}px`;
    tempImg.style.left = `${x}px`;
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
