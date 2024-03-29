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
        if(!isset($req['email'])){
            $result['code']=400;
            $result['msg']="Email Required";
        }else if(!isset($req['password'])){
            $result['code']=400;
            $result['msg']="Password Required";
        }else{
            $eml=$req['email'];
            $pas=$req['password'];
            $q="SELECT * FROM bb_d WHERE email='$eml'";
            $rs=mysqli_query($con,$q);
            $nor=mysqli_num_rows($rs);
            if($nor==0){
                $result['code']=0;
                $result['msg']="Invalid Credentials";
            }else{
                $row=mysqli_fetch_assoc($rs);
                if($row['has_sub']==1){
                    $result['code']=403;
                    $result['msg']="You have already submitted this test";
                }else{
                    $dps=$row['password'];
                    $verify = password_verify($pas, $dps);
                    if ($verify) {
                        $result['code']=200;
                        $result['msg']="Successfull";
                        $result['name']=$row['name'];
                        $result['mail']=$row['email'];
                        $result['roll']=$row['roll'];
                    } else {
                        $result['code']=0;
                        $result['msg']="Invalid Credentials";
                    }
                }
            }
        }
    }else{
        $result['code']=404;
        $result['msg']="Not Found";
    }
    echo json_encode($result);
    session_destroy();
?>