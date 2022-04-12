"use strict";
const S = "success";
const W = "warning";
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
    value = parseInt(document.getElementById(e).value);
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
};

function login() {
  var username = control.getInput("email");
  var password = control.getInput("password");
  if (username == "") {
    control.popup("Enter Username", W);
  } else if (password == "") {
    control.popup("Enter Password", W);
  } else {
    control.html("button", "wait...");
    $.ajax({
      url: "../../../backend/auth/validate.php",
      type: "post",
      data: "username=" + username + "&password=" + password,
      success: function (htl) {
        var html = JSON.parse(htl);
        if (html.status != 1) {
          control.popup(html.msg, W);
          control.html("button", "Login");
        } else {
          control.redirect("../../index.php");
        }
      },
    });
  }
}
function register() {
  var email = control.getInput("email");
  var mobile = control.getInput("mobile");
  var password = control.getInput("password");
  var name = control.getInput("name");
  if (name == "") {
    control.popup("Enter Name", W);
  } else if (email == "") {
    control.popup("Enter Email", W);
  } else if (password == "") {
    control.popup("Enter Password", W);
  } else if (mobile == "") {
    control.popup("Enter Mobile", W);
  } else {
    control.html("button", "wait...");
    $.ajax({
      url: "../../../backend/auth/register.php",
      type: "post",
      data:
        "email=" +
        email +
        "&password=" +
        password +
        "&mobile=" +
        mobile +
        "&name=" +
        name,
      success: function (htl) {
        var html = JSON.parse(htl);
        if (html.status != 1) {
          control.popup(html.msg, W);
          control.html("button", "Register");
        } else {
          control.redirect("../");
        }
      },
    });
  }
}