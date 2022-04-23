<?php
  require('../../utility/utility.php');
  $newpass=get_safe_value($con,$_POST['mainEvent']);
  $uid=get_safe_value($con,$_POST['id']);
  $password=password_hash($newpass, PASSWORD_DEFAULT);
  mysqli_query($con,"UPDATE users SET upassword='$password'");
  $result=array();
  $result['status']=1;
  $result['msg']="Password changed";
  echo json_encode($result);
?>