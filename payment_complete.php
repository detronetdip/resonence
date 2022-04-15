<?php 
    require('./utility/utility.php');
    $payment_mode=$_POST['mode'];
    $pay_id=$_POST['mihpayid'];
    $status=$_POST["status"];
    $firstname=$_POST["firstname"];
    $amount=$_POST["amount"];
    $txnid=$_POST["txnid"];
    $posted_hash=$_POST["hash"];
    $key=$_POST["key"];
    $productinfo=$_POST["productinfo"];
    $email=$_POST["email"];
    $MERCHANT_KEY = "4RxOLBOS"; 
    $SALT = "osrz8DQdWT";
    $udf5='';
    $keyString 	= $MERCHANT_KEY .'|'.$txnid.'|'.$amount.'|'.$productinfo.'|'.$firstname.'|'.$email.'|||||'.$udf5.'|||||';
    $keyArray 	= explode("|",$keyString);
    $reverseKeyArray = array_reverse($keyArray);
    $reverseKeyString =	implode("|",$reverseKeyArray);
    $saltString     = $SALT.'|'.$status.'|'.$reverseKeyString;
    $sentHashString = strtolower(hash('sha512', $saltString));

    if($sentHashString != $posted_hash){
        $statusse="Something went wrong";
        echo $statusse;
        $placed=0;
        mysqli_query($con,"UPDATE rgslog SET payment_status='$placed',reg_status='$placed',payu_status='$status', mihpayid='$pay_id' WHERE txnid='$txnid'");
?>
    <script>
        alert('Failed');
        window.location.href = 'index.html';
    </script>
<?php
    }else{
        $placed=1;
        $_SESSION['USER_LOGIN_RX']="YES";
        $q=mysqli_fetch_assoc(mysqli_query($con,"SELECT * FROM rgslog WHERE txnid='$txnid'"));
        $_SESSION['USER_ID']=$q['uid'];
        $uid=$q['uid'];
        mysqli_query($con,"UPDATE rgslog SET payment_status='$placed',reg_status='$placed',payu_status='$status', mihpayid='$pay_id' WHERE txnid='$txnid'");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <script src="./assets/js/sweetalert.js"></script>
    <script>
        function s(){
            swal("Registration done","","success").then(e=>{
            window.location.href="./profile";
        });
        }
        window.onload=s;
    </script>
    </body>
    </html>
<?php	
    }
?>