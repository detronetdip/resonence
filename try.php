<?php
  session_start();
  $con= mysqli_connect('localhost','u364601224_rootxiresonanc','K4=bD=Nb[p');
mysqli_select_db($con,'u364601224_resonancexi');

  $q="SELECT * FROM `bb_d` WHERE name NOT IN ('DEBAKSHI BHATTACHARJEE','RAKESH RANA','MEHRIA NAWAZ','UMESH KUMAR SHAH','ARUP JANA','DEEP KUMAR ADAK','AMANDEEP REWANI','PRADIPTA GHOSHAL','SHIVAM KUMAR','SOVIK GHOSH','AMIT MANNA','MAYANK KUMAR','SANGLAP DUTTA','SOHAM PAUL','PRIYANGSU KOLEY','ADITYA DEEPAK','MUKUTMANI DAS');";
  $rs=mysql_query($con,$q);
  $d=array();
  while($rw=mysqli_fetch_assoc($rs)){
    echo $rw['email']."\n";
  }
echo "otk"

?>
