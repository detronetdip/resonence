<?php
  include('smtp/PHPMailerAutoload.php');
  require('../../utility/utility.php');
  require('../../mail_template/template.php');
  $email=get_safe_value($con,$_POST['mainEvent']);
  $result=array();
  $result['got']=$email;
  $q="SELECT * FROM users WHERE uemail='$email'";
  $res=mysqli_query($con,$q);
  $n=mysqli_num_rows($res);
  $ni=mysqli_fetch_assoc($res);
  if($n==0){
    $result['status']=0;
    $result['msg']="No account is registered with this email id";
  }else{
    $code=get_code();
    $uid=$ni['id'];
    $ql="INSERT INTO fgtp (`u_id`, `fcode`) VALUES ('$uid','$code')";
    mysqli_query($con,$ql);
    $result['link']="https://cemkfest.in/backend/auth/change_password/index.php?i=".$code."&ip=".password_hash($code, PASSWORD_DEFAULT)."&ud=".$uid;
    $result['name']=$ni['uname'];
    $result['mail']=$email;
    smtp_mailer($email,'Forget Password',getFGTTemplate($ni['uname'],$result['link']));
  }
  function smtp_mailer($to,$subject, $msg){
    $mail = new PHPMailer(); 
    //$mail->SMTPDebug  = 3;
    $mail->IsSMTP(); 
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'tls'; 
    $mail->Host = "smtp.hostinger.com";
    $mail->Port = 587; 
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Username = "support@cemkfest.in";
    $mail->Password = "12345678QWERTYUI!@#$%^&*qwertyui";
    $mail->SetFrom("support@cemkfest.in");
    $mail->Subject = $subject;
    $mail->Body =$msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions=array('ssl'=>array(
      'verify_peer'=>false,
      'verify_peer_name'=>false,
      'allow_self_signed'=>false
    ));
    if(!$mail->Send()){
      echo $mail->ErrorInfo;
    }else{
      return 'Sent';
    }
  }
   echo json_encode($result);
?>