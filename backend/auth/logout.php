<?php
  require('../../utility/utility.php');
    $result=array();
    unset($_SESSION['USER_LOGIN_RX']);
    unset($_SESSION['USER_ID']);
    $result['status']=1;
    echo json_encode($result);
    die();
?>