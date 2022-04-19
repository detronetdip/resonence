<?php
  require('../../../utility/utility.php');
    $result=array();
    unset($_SESSION['ADMIN_LOGIN_RX']);
    $result['status']=1;
    echo json_encode($result);
    die();
?>