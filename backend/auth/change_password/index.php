<?php
  require('../../../utility/utility.php');
    $precode=$_SESSION['FGT_CU_STORE'];
    $i=$_GET['i'];
    $ip=$_GET['ip'];
    $result=array();
    if($i==$precode){
        unset($_SESSION['FGT_CU_STORE']);
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