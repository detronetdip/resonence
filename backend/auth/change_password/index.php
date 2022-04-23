<?php
  require('../../../utility/utility.php');
    $uid=$_GET['ud'];
    $udetail=mysqli_fetch_assoc(mysqli_query($con,"SELECT * FROM fgtp WHERE u_id='$uid'"));
    $precode=$udetail['fcode'];
    $i=$_GET['i'];
    $ip=$_GET['ip'];
    $result=array();
    if($i==$precode){
        mysqli_query($con,"DELETE FROM fgtp WHERE u_id='$uid'");
        $verify = password_verify($i, $ip);
        if($verify){
?>
<!DOCTYPE html>
<html lang="en" class="h-100" dir="ltr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Change password</title>
    <link href="../lgcss/style.css" rel="stylesheet" />
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
  </head>
  <body class="vh-100">
    <div
      class="authincation h-100"
      style="
        background: linear-gradient(
          0.94deg,
          #030a1b 51.2%,
          #311250 73.95%,
          #010710 95.7%
        );
      "
    >
      <div
        class="container h-100"
        style="
          background: linear-gradient(
            0.94deg,
            #030a1b 51.2%,
            #311250 73.95%,
            #010710 95.7%
          );
          
        "
      >
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-md-6" style="
          background: linear-gradient(
            0.94deg,
            #030a1b 51.2%,
            #311250 73.95%,
            #010710 95.7%
          );
          box-shadow: -.2rem -.2rem .3rem rgba(255,255,255,.1),
          .2rem .2rem .5rem rgba(0,0,0,.8);
          border-radius: 1rem;">
            <div class="authincation-content">
              <div class="row no-gutters">
                <div class="col-xl-12">
                  <div class="auth-form">
                    <div class="text-center mb-3">
                      <img
                        style="height: 5rem"
                        src="Project 51_4.png"
                        alt=""
                      />
                    </div>
                    <h4 class="text-center mb-4">Enter New Password</h4>
                    <form  id="fgtrm">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          id="fgtemail"
                          style="
                            background-color: transparent;
                            caret-color: #00dafc;
                            color: #00dafc;
                            letter-spacing: 2px;
                            border: 1px solid #d912dd;
                          "
                        />
                      </div>
                      <div class="text-center mt-4">
                        <button
                        id="button"
                        type="submit"
                        class="btn btn-primary btn-block btn-main"
                        style="
                          background: linear-gradient(
                            113.54deg,
                            #d912dd 34.86%,
                            rgba(91, 26, 134, 0.75) 74.74%
                          );
                          outline: none;
                          border: 0;
                        "
                        onclick="changePassword()"
                      >
                        Submit
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="../../../assets/js/jquery.js"></script>
    <script src="../../../assets/js/sweetalert.js"></script>
    <script src="../../../assets/js/main.js"></script>
  </body>
</html>
<?php
        }else{
            echo "INVALID LINK";
        }
    }else{
        echo "INVALID LINK";
    }
?>