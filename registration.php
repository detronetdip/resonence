<?php
require('./utility/utility.php');
authorise_user("./profile/auth/v2/");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style2.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
      type="text/css"
    />
    <script src="./assets/js/sweetalert.js"></script>
    <script src="./assets/js/jquery.js"></script>
    <title>Event Registration</title>
  </head>
  <body>
    <div class="wrapper">
      <div class="inner">
        <div class="image-holder">
          <div class="image">
            <img src="./assets/images/Project 51_4.png" alt="image" />
          </div>
        </div>
        <form id="form" method="POST" action="./process.php">
          <h3>registration</h3>
          <div class="form-group">
            <input type="text" id="firstName" name="firstName"  placeholder="First Name" class="form-control" />
            <input type="text" id="lastName"  name="lastName" placeholder="Last Name" class="form-control" />
          </div>
          <div class="form-wrapper">
            <input
            id="teamName"
            name="teamName"
              type="text"
              placeholder="Team Name"
              class="form-control"
            />
          </div>
          <div class="form-wrapper">
            <input
            id="collegeName"
            name="collegeName"
              type="text"
              placeholder="College Name"
              class="form-control"
            />
          </div>

          <div class="form-wrapper">
            <input
            id="deptName"
            name="deptName"
              type="text"
              placeholder="Department Name"
              class="form-control"
            />
          </div>
          <div class="form-wrapper">
            <select name="mySelect" class="form-control" onchange="getSubEvents()" id="main-event">
              <option value="" disabled selected>Select Event</option>
              <?php
                  $allEvents=getAllEvents($con);
                  foreach($allEvents as $r){
              ?>
              <option value="<?php echo $r['id']; ?>" id="events"><?php echo $r['evname']; ?></option>
              <?php } ?>
            </select>
          </div>
          <div class="form-wrapper">
            <select name="mySelect2" class="form-control"  id="sub-event" onchange="getPrice()" >
              <option value="" disabled selected id="dmy">Select Sub Event</option>
            </select>
          </div>
          <div class="form-wrapper">
           <span style="color: #00ffff; font-size: 1.3rem;" id="ammount">
                    Entry Fee:  &#8377; 0
           </span>
          </div>
          <div class="buttdiv">
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="maincontainer">
      <section class="defaultPadding mt4 footer">
        <div class="footer-row2">
          <div class="container">
            <div class="row">
              <ul class="ul1">
                <li class="heading">
                  <h4>Countries</h4>
                </li>
                <ul class="ul-sub">
                  <li>Australia</li>
                  <li>New Zealand</li>
                  <li>Russia</li>
                  <li>Bangladesh</li>
                  <li>UK</li>
                  <li>Ukraine</li>
                  <li>Canada</li>
                  <li>Kazakhstan</li>
                  <li>Philippines</li>
                  <li>Nepal</li>
                </ul>
              </ul>
              <ul class="ul1">
                <li class="heading">
                  <h4>Usefull Links</h4>
                </li>
                <ul class="ul-sub">
                  <a href="about.php">
                    <li>About Us</li>
                  </a>
                  <a href="privacy.php"> <li>Privacy Policy</li></a>
                  <a href="t&c.php"><li>Terms & Conditions</li></a>
                </ul>
              </ul>
              <ul class="ul1">
                <li class="heading">
                  <h4>Top Cities</h4>
                </li>
                <ul class="ul-sub">
                  <li>Bangalore</li>
                  <li>Kolkata</li>
                  <li>Gujarat</li>
                </ul>
              </ul>
              <ul class="ul1">
                <ul class="ul-sub da">
                  <li class="dbnt">
                    <a href="">
                      <img src="assets/images/Project 51_4.png" alt="" />
                    </a>
                  </li>
                  <li class="heading">
                    <h4 class="nmb">Resonance-XI</h4>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-3">
          <span> Copyright 2022 Resonance . All rights reserved </span>
          <br />
          <span
            >Developed by
            <a href="mailto: ayondip2001@gmail.com"
              >Ayondip Jana & Sukhendu Bhukta</a
            ></span
          >
        </div>
      </section>
    </div>
    <script src="./assets/js/main1.js"></script>
  </body>
</html>
