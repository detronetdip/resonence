"use strict";
const S = "success";
const W = "warning";
const HOST="http://localhost/resonence/";
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

function getSubEvents(){
  var mainEvent=control.getInput("main-event");
  control.html('dmy',"wait...");
  $.ajax({
    url: HOST+"/backend/event/allevent.php",
    type: "post",
    data: "mainEvent=" +mainEvent ,
    success: function (htl) {
      var html = JSON.parse(htl);
      if (html.status != 1) {
        control.popup(html.msg, W);
        control.html("button", "Login");
      } else {
        var template="<option value='' id='dmy' disabled selected>Select Sub Event</option>\n";
        html.data.forEach(e=>{
          template+=`<option value="${e.id}" id="events" price="${e.price}">${e.sevname}</option>\n`;
        })
      }
    },
  });
}