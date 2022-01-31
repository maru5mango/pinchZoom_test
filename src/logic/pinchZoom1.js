// Global vars to cache event state
var evCache = [];
var prevDiff = -1;

function pointerdown_handler(ev) {
  evCache.push(ev);
}

function pointermove_handler(ev) {
  ev.target.style.border = "dashed";

  // Find this event in the cache and update its record with this event
  for (var i = 0; i < evCache.length; i++) {
    if (ev.pointerId === evCache[i].pointerId) {
      evCache[i] = ev;
      break;
    }
  }

  // If two pointers are down, check for pinch gestures
  if (evCache.length === 2) {
    // Calculate the distance between the two pointers
    var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

    if (prevDiff > 0) {
      if (curDiff > prevDiff) {
        ev.target.style.background = "pink";
      }
      if (curDiff < prevDiff) {
        ev.target.style.background = "lightblue";
      }
    }

    // Cache the distance for the next move event
    prevDiff = curDiff;
  }
}

function pointerup_handler(ev) {
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // If the number of pointers down is less than two then reset diff tracker
  if (evCache.length < 2) prevDiff = -1;
}

function remove_event(ev) {
  // Remove this event from the target's cache
  for (var i = 0; i < evCache.length; i++) {
    if (evCache[i].pointerId === ev.pointerId) {
      evCache.splice(i, 1);
      break;
    }
  }
}

export function init() {
  // Install event handlers for the pointer target
  var el = document.getElementsByClassName("pinchZoom0")[0];
  el.onpointerdown = pointerdown_handler;
  el.onpointermove = pointermove_handler;

  // Use same handler for pointer{up,cancel,out,leave} events since
  // the semantics for these events - in this app - are the same.
  el.onpointerup = pointerup_handler;
  el.onpointercancel = pointerup_handler;
  el.onpointerout = pointerup_handler;
  el.onpointerleave = pointerup_handler;
}
