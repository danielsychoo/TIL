const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(128, 128, 128)";
// const BASE_COLOR = "#808080";
// const OTHER_COLOR = "#FFA500";

function handleClick() {
  if (title.style.color === "#808080") {
    title.style.color = "#FFA500";
  } else {
    title.style.color = "#808080";
  }
}
function init() {
  title.style.color = "#808080";
  title.addEventListener("click", handleClick);
}
init();
