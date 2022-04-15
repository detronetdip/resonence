<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registered Events</title>
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
            <img src="../assets/images/Project 51_4.png" alt="logo" />
          </a>
          <div class="close-left-nav" onclick="close_res_nav()">
            <i class="uil uil-times"></i>
          </div>
        </div>
        <div class="list-nav">
          <ul class="nav-list">
            <li class="outer-list">
              <a href="index.html">
                <i class="uil uil-estate"></i>
                <span>Dashbaord</span>
              </a>
            </li>
            <li class="outer-list">
              <a href="registered_events.html">
                <i class="uil uil-parcel"></i>
                <span>Registered Events</span>
              </a>
            </li>
            <li class="outer-list">
              <a href="all_events.html">
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
              <img src="assets/images/pic1.jpg" alt="" />
            </a>
            <div class="name">
              <span>jhon</span>
              <small>seller</small>
            </div>
            <div class="hover-bot">
              <ul>
                <li>
                  <a href="">
                    <i class="uil uil-user"></i>
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="uil uil-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="path">
          <div class="container">
            <a href="index.html">Home</a>
            /
            <a href="registered_events.html">Registered Events</a>
          </div>
        </div>
        <div class="cartrow" id="catrow">
          <div class="gh">
            <div class="heading">
              <h3>registered events</h3>
            </div>
            <div class="maincontainer">
              <table class="wishlist">
                <thead>
                  <th>#</th>
                  <th>Team Id</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>OD784578E7125</td>
                    <td>12/12/12</td>
                    <td>12:00:00</td>
                    <td>
                      <span class="badge green"> Registered </span>
                    </td>
                    <td>
                      <div class="acn">
                        <a href="reg-detail.html" class="view">
                          <i class="uil uil-eye"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="assets/js/script.js"></script>
  </body>
</html>
