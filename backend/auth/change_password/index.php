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
            echo "DONE";
?>











<?php
        }else{
            echo "INVALID LINK";
        }
    }else{
        echo "INVALID LINK";
    }
?>