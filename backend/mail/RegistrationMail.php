<?php 
include('smtp/PHPMailerAutoload.php');
require('../../utility/utility.php');
require('../../mail_template/template.php');
$mailID=get_safe_value($con,$_POST['mail']);
$name=get_safe_value($con,$_POST['name']);

echo smtp_mailer($mailID,'Registration Conformation',getRegistrationTemplate($name));
function smtp_mailer($to,$subject, $msg){
	$mail = new PHPMailer(); 
	$mail->SMTPDebug  = 3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "bhukta.sukhendu789@gmail.com";
	$mail->Password = "SB652001";
	$mail->SetFrom("bhukta.sukhendu789@gmail.com");
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


?>