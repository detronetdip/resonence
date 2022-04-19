<?php
  require('../../../utility/utility.php');
//   prx($_POST);

  $username=get_safe_value($con,$_POST['username']);
  $password=get_safe_value($con,$_POST['password']);
  $q="SELECT * FROM admin WHERE username='$username'";
    $rs=mysqli_query($con,$q);
    $nor=mysqli_num_rows($rs);
    $result=array();
    if ($password == "") {
        $result['status']=0;
        $result['msg']="Enter Password";
      } else if ($username == "") {
        $result['status']=0;
        $result['msg']="Enter Email";
      }else if($nor==0){
        $result['status']=0;
        $result['msg']="Invalid Credentials";
    }else{
        if($nor>0){
            $rs=$rs;
        }else{
            $rs=$rs2;
        }
        $row=mysqli_fetch_assoc($rs);
        $dps=$row['password'];
        $verify = password_verify($password, $dps);
        if ($verify) {
            $_SESSION['ADMIN_LOGIN_RX']="YES";
            $result['status']=1;
            $result['msg']="Login Successfull";
        } else {
            $result['status']=2;
            $result['msg']="Something Went Wrong";
        }
    }
    echo json_encode($result);
// echo "Connection received";
?>