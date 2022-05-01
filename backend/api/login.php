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
        if(!isset($req['name'])){
            $result['code']=400;
            $result['msg']="Name Required";
        }else if(!isset($req['email'])){
            $result['code']=400;
            $result['msg']="Email Required";
        }else{
            // $name=mysqli_real_escape_string($con,$req['name']);
            // $email=mysqli_real_escape_string($con,$req['email']);
            // $password=mysqli_real_escape_string($con,$req['password']);
            // $mobile=mysqli_real_escape_string($con,$req['mobile']);
            // $query="SELECT * FROM users WHERE email='$email'";
            // $nor=mysqli_num_rows(mysqli_query($con,$query));
            // if($nor>0){
            //     $result['code']=350;
            //     $result['msg']="User Alredy Present";
            // }else{
            //     $q="INSERT INTO users (name,email,mobile,password) VALUES('$name','$email','$mobile','$password')";
            //     if(mysqli_query($con,$q)){
            //         $result['code']=200;
            //         $result['msg']="Registration successfull";
            //     }else{
            //         $result['code']=500;
            //         $result['msg']="Something went wrong";
            //     }
            // }
        }
    }else{
        $result['code']=404;
        $result['msg']="Not Found";
    }
    echo json_encode($result);
    session_destroy();
?>