<?php
  require('utility/utility.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ResonanceXI</title>
    <link rel="stylesheet" href="assets/css/events.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
      type="text/css"
    />
    <script type="text/javascript" src="./assets/js/vanilla-tilt.js"></script>
  </head>

  <body>
    <div class="maincontainer">
      <div class="container">
        <div class="login">
          <?php if(!isset($_SESSION['USER_LOGIN_RX'])){ 
             echo "not logged in";
            ?>
            <a href="./profile/auth/v2/index.html">
              <button>Login</button>
            </a>
          <?php }else{ echo " logged in"; ?>
            <a href="./profile/auth/v2/logout.php">
              <button>Logout</button>
            </a>
         <?php } ?>
        </div>