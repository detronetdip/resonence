<?php
 function pre($arr){
 	echo '<pre>';
 	print_r($arr);
 }
 
 function prx($arr){
 	echo '<pre>';
 	print_r($arr);
 	die();
 }
 function get_safe_value($con,$str){
	if($str!=''){
		$str=trim($str);
		return mysqli_real_escape_string($con,$str);
	 }
}
function redirect($path){
	?>
<script>
window.location.href = '<?php echo $path; ?>';
</script>
<?php
}
function get_new_orderid(){
	$code="RXI".rand(1,99).chr(65+rand(1,25)).rand(1,99).time();
	return $code;
}
function authorise_user($path){
	if(!isset($_SESSION['USER_LOGIN_RX'])){
		redirect($path);
	}
}
function getName($con){
		$uid=$_SESSION['USER_ID'];
		$sql="SELECT uname FROM users WHERE id='$uid'";
		$res=mysqli_query($con,$sql);
		$row=mysqli_fetch_assoc($res);
		return $row['uname'];
}
function getTotalEvents($con){
	    $sql="SELECT count(*) cnt FROM sevents";
		$res=mysqli_query($con,$sql);
		$row=mysqli_fetch_assoc($res);
		return $row['cnt'];
}
function getAllEvents($con){
	$sql="SELECT id,evname FROM events";
	$res=mysqli_query($con,$sql);
	$product_arr=array();
	while($row=mysqli_fetch_assoc($res)){	
		$product_arr[]=$row;
	}
	return ($product_arr);
}
function getAllRegisteredEvents($con){
	$sql = "SELECT rgslog.id,tid,evname,sevname,reg_status FROM rgslog,events,sevents WHERE rgslog.eventid=events.id AND rgslog.seventid=sevents.id;";
	$res=mysqli_query($con,$sql);
	$product_arr=array();
	while($row=mysqli_fetch_assoc($res)){	
		$product_arr[]=$row;
	}
	return ($product_arr);
}
function countMyEvent($con){
	$uid=$_SESSION['USER_ID'];
	return mysqli_fetch_assoc(mysqli_query($con,"SELECT count(*) total FROM rgslog WHERE uid='$uid'"));
}
?>