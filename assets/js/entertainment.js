var allId = ["canva", "photo", "meme", "selfi", "film"];
function expand(e) {
  allId.forEach((r) => {
    if (e.nextSibling.nextSibling.id == r) {
      var isOpen = e.getAttribute("isOpen");
      if (isOpen == "false") {
        e.nextSibling.nextSibling.style.height = "auto";
        e.setAttribute("isOpen", true);
      } else {
        e.nextSibling.nextSibling.style.height = 0;
        e.setAttribute("isOpen", false);
      }
    } else {
      document.getElementById(r).style.height = 0;
      document
        .getElementById(r)
        .previousSibling.previousSibling.setAttribute("isOpen", false);
    }
  });
}
allId.forEach((e) => {
  document.getElementById(e).style.height = 0;
});
