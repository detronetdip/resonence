<?php
  require('../../utility/utility.php');
  $email=get_safe_value($con,$_POST['mainEvent']);
  $result=array();
  $result['got']=$email;
    echo json_encode($result);
?>