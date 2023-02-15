const element = document.querySelector(".container");
const resizer = document.querySelector(".resize");
const rootStyles = getComputedStyle(document.documentElement);
const secondaryColor = rootStyles.getPropertyValue("--secondary-color");

let isResizing = false;

resizer.addEventListener("mousedown", function (e) {
  resizer.style.width = "30px";
  resizer.style.height = "30px";
  resizer.style.right = "-15px";
  resizer.style.bottom = "-15px";
  element.style.border = "2px solid " + secondaryColor;
  isResizing = true;

  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
});

function resize(e) {
  if (!isResizing) return;

  element.style.width = (e.pageX - element.offsetLeft) + "px";
  element.style.height = (e.pageY - element.offsetTop) + "px";
}

function stopResize(e) {
  isResizing = false;
  resizer.style.width = "20px";
  resizer.style.height = "20px";
  resizer.style.right = "-10px";
  resizer.style.bottom = "-10px";
  element.style.border = "0px solid " + secondaryColor;

  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", stopResize);
}

