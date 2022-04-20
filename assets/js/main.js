"use strict";
const S = "success";
const W = "warning";
const HOST = "https://cemkfest.in/";
// const HOST = "http://localhost/resonence/";
let control = {
  globalShow: function (e) {
    document.getElementById(e).style.display = "initial";
  },
  globalShowFlex: function (e) {
    document.getElementById(e).style.display = "flex";
  },
  globalShowGrid: function (e) {
    document.getElementById(e).style.display = "grid";
  },
  globalHide: function (e) {
    document.getElementById(e).style.display = "none";
  },
  getInput: function (e) {
    let value;
    value = document.getElementById(e).value;
    return value;
  },
  getintInput: function (e) {
    let value;
    value = parseInt(document.getElementById(e).valueAsNumber);
    return value;
  },
  putValue: function (e, k) {
    document.getElementById(e).value = k;
  },
  html: function (e, tml) {
    document.getElementById(e).innerHTML = tml;
  },
  reload: function () {
    window.location.href = window.location;
  },
  readonly: function (e) {
    document.getElementById(e).setAttribute("readonly", true);
  },
  disable: function (e) {
    document.getElementById(e).setAttribute("disabled", true);
  },
  enable: function (e) {
    document.getElementById(e).setAttribute("disabled", false);
  },
  popup: function (e, state = "") {
    if (state == "") {
      swal(e);
    } else {
      swal(e, "", state);
    }
  },
  get: (e) => {
    return document.getElementById(e);
  },
  redirect: (path) => {
    window.location.href = path;
  },
};

function getSubEvents() {
  var mainEvent = control.getInput("main-event");
  control.html('dmy', "wait...");
  $.ajax({
    url: HOST + "/backend/event/allevent.php",
    type: "post",
    data: "mainEvent=" + mainEvent,
    success: function (htl) {
      var html = JSON.parse(htl);
      if (html.status != 1) {
        control.popup(html.msg, W);
        control.html("button", "Login");
      } else {
        var template = "<option value='' id='dmy' disabled selected>Select Sub Event</option>\n";
        html.data.forEach(e => {
          template += `<option value="${e.id}" id="events" price="${e.price}">${e.sevname}</option>\n`;
        })
        control.html('sub-event', template);
      }
    },
  });
}
function getPrice() {
  var sub = control.get("sub-event");
  var p = (sub.options[sub.selectedIndex].getAttribute('price'));
  var templat = `Entry Fee:  &#8377; ${p}`;
  control.html('ammount', templat);
}
const element = document.querySelector('form');
element.addEventListener('submit', e => {
  e.preventDefault();
  var firstName = control.getInput('firstName')
  var lastName = control.getInput('lastName')
  var teamName = control.getInput('teamName')
  var collegeName = control.getInput('collegeName')
  var deptName = control.getInput('deptName')
  var mainEventName = control.getInput('main-event')
  var subEventName = control.getInput('sub-event')
  if (!firstName || !lastName || !teamName || !collegeName || !deptName || !mainEventName || !subEventName) {
    control.popup("All fields are mandatory","warning")
  }else{
    control.get('form').submit();
  }
});