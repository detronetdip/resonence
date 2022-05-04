<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    session_start();
    $con= mysqli_connect('localhost','u364601224_rootxiresonanc','K4=bD=Nb[p');
    mysqli_select_db($con,'u364601224_resonancexi');
    $result=array();
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $req=(json_decode(file_get_contents('php://input'), true));
        $name=$req['name'];
        $roll=$req['roll'];
        $mail=$req['mail'];
        $pass=$req['pass'];
        $q="INSERT INTO `bb_d`(`email`, `name`, `roll`, `password`, `has_sub`) VALUES ('$mail','$name','$roll','$pass','0')";
        $rs=mysqli_query($con,$q);
        $result['code']=200;
        $result['msg']="Added successfully";
    }else{
        $result['code']=404;
        $result['msg']="Not Found";
    }
    echo json_encode($result);
    session_destroy();
?>