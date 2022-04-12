<?php
session_start();
$con= mysqli_connect('localhost','root','');
// if($con){
//     echo "connected";
// }
mysqli_select_db($con,'resonance');
// define('D',"/backend_projects/grocerry");
?>