var countDownDate = new Date("May 23, 2022 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML =days;
  document.getElementById("hours").innerHTML =hours;
  document.getElementById("mins").innerHTML =minutes;
  document.getElementById("secs").innerHTML =seconds;
}, 1000);
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, 
});
alert(screen.width + "*" + screen.height)