<?php
  require('../../utility/utility.php');
  authorise_user("./auth/v2/");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Account</title>
    <link rel="stylesheet" href="assets/css/style.css" />
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/sweetalert.js"></script>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
  </head>
  <body>
    <section class="main">
      <div class="left-part" id="lft">
        <div class="logo">
          <a href="javascript:void(0)">
          <img src="<?php echo HOST."/assets/images/Project 51_4.png"; ?>" alt="" />
          </a>
          <div class="close-left-nav" onclick="close_res_nav()">
            <i class="uil uil-times"></i>
          </div>
        </div>
        <div class="list-nav">
          <ul class="nav-list">
            <li class="outer-list">
              <a href="index.php">
                <i class="uil uil-estate"></i>
                <span>Dashbaord</span>
              </a>
            </li>
            <li class="outer-list">
              <a href="registered_events.php">
                <i class="uil uil-parcel"></i>
                <span>Registered Events</span>
              </a>
            </li>
            <li class="outer-list">
              <a href="all_events.php">
                <i class="uil uil-voicemail-rectangle"></i>
                <span>All Events</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>Developed by Ayondip Jana</p>
        </div>
      </div>
      <div class="right-part">
        <div class="head">
          <div class="ham-name">
            <div class="mnu vy" onclick="hide()" id="mn">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="mnu ty" onclick="op_n()" id="mn">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="nm">Dashbord</div>
          </div>
          <div class="profile">
            <a href="javascript:void(0)">
              <img src="<?php echo HOST."/assets/images/Project 51_4.png"; ?>" alt="" />
            </a>
            <div class="name">
              <span><?php echo getName($con);?></span>
              <small>Team</small>
            </div>
            <div class="hover-bot">
              <ul>
                <li>
                  <a href="javascript:void(0)" onclick="logout()">
                    <i class="uil uil-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>