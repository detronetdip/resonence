<?php
  require('../../utility/utility.php');
  $email=get_safe_value($con,$_POST['email']);
  $password=get_safe_value($con,$_POST['password']);
  $mobile=get_safe_value($con,$_POST['mobile']);
  $name=get_safe_value($con,$_POST['name']);
  $q="SELECT * FROM users WHERE uemail='$email'";
  $result=array();
  if ($name == "") {
    $result['status']=0;
    $result['msg']="Enter Name";
  } else if ($password == "") {
    $result['status']=0;
    $result['msg']="Enter Password";
  } else if ($email == "") {
    $result['status']=0;
    $result['msg']="Enter Email";
  } else if ($mobile == "") {
    $result['status']=0;
    $result['msg']="Enter Mobile";
  } else {
    $query="SELECT * FROM users WHERE uemail='$email'";
    $res=mysqli_query($con,$query);
    $n=mysqli_num_rows($res);
    if($n>0){
        $result['status']=0;
        $result['msg']="Email is not available";
    }else{
            $password=password_hash($password, PASSWORD_DEFAULT);
            $q="INSERT INTO users(uname,upassword,umobile,uemail) VALUES('$name','$password','$mobile','$email')";
            if(mysqli_query($con,$q)){
                $row=mysqli_fetch_assoc(mysqli_query($con,"SELECT * FROM users WHERE umobile='$mobile' AND uemail='$email'"));
                $_SESSION['USER_LOGIN_RX']="YES";
                $_SESSION['USER_ID']=$row['id'];
                $result['status']=1;
                $idd=$row['id'];
                $result['msg']="Account Created Successfully";
            }else{
                $result['status']=0;
                $result['msg']="Something Went Wrong";
            }
        }
}

    echo json_encode($result);
?>