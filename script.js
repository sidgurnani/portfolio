const card = document.getElementById("profileCard");
const btn  = document.getElementById("tapToggle");

let open = false;

function setOpen(next) {
  open = next;
  const overlay = card.querySelector(".overlay");
  overlay.style.opacity = open ? "1" : "0";
  overlay.style.transform = open ? "translateY(0)" : "translateY(14px)";
  btn.textContent = open ? "Hide credentials" : "View credentials";
}

btn?.addEventListener("click", (e) => {
  e.preventDefault();
  setOpen(!open);
});

// Close if user taps outside overlay area on touch devices
card?.addEventListener("click", (e) => {
  const isTouch = window.matchMedia("(hover:none) and (pointer:coarse)").matches;
  if (!isTouch) return;
  if (e.target === btn) return;
  // If open and tap occurs on the photo area, close
  if (open && e.target.classList.contains("photo")) setOpen(false);
});
