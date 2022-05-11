<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    session_start();
    $con= mysqli_connect('localhost','u364601224_rootxiresonanc','K4=bD=Nb[p');
    mysqli_select_db($con,'u364601224_resonancexi');
    $result=array();
    $sql="SELECT name,email FROM `bb_d` WHERE name IN ('DEBAKSHI BHATTACHARJEE','RAKESH RANA','MEHRIA NAWAZ','UMESH KUMAR SHAH','ARUP JANA','DEEP KUMAR ADAK','AMANDEEP REWANI','PRADIPTA GHOSHAL','SHIVAM KUMAR','SOVIK GHOSH','AMIT MANNA','MAYANK KUMAR','SANGLAP DUTTA','SOHAM PAUL','PRIYANGSU KOLEY','ADITYA DEEPAK','MUKUTMANI DAS')";
	$res=mysqli_query($con,$sql);
	$product_arr=array();
	while($row=mysqli_fetch_assoc($res)){	
		$product_arr[]=$row;
	}
	echo json_encode($product_arr);
?>