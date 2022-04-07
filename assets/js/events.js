var allId = ["pkbt"];
var parkobot = document.getElementById("pkbt");
parkobot.style.height = 0;
function expand(e) {
  var id = e.getAttribute("refer");
  var isOpen = e.getAttribute("isOpen");
  console.log(isOpen);
  if (isOpen == "false") {
    document.getElementById(id).style.height = "auto";
    e.setAttribute("isOpen", true);
  } else {
    document.getElementById(id).style.height = "0";
    e.setAttribute("isOpen", false);
  }
}
