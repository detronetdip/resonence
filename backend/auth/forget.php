<?php
  require('../../utility/utility.php');
  $email=get_safe_value($con,$_POST['mainEvent']);
  $result=array();
  $result['got']=$email;
  $q="SELECT * FROM users WHERE uemail='$email'";
  $res=mysqli_query($con,$q);
  $n=mysqli_num_rows($res);
  if($n=0){
    $result['status']=0;
    $result['msg']="No account is registered with this email id";
  }else{
    $code=get_code();
    $_SESSION['FGT_CU_STORE']=$code;
    $result['link']="https://cemkfest.in/profile/auth/change_password/index.php?i=".$code."&ip=".password_hash($code, PASSWORD_DEFAULT);
  }
    echo json_encode($result);
?>