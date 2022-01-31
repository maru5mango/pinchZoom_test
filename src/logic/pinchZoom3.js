export function pinchZoom3($img) {
  const tempImg = $img.cloneNode();

  $img.addEventListener("touchstart", function (e) {
    if (e.touches.length <= 1) return;
    window.Swipe2.disable();
  });
}
