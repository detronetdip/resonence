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
function get_code(){
	$code=chr(64+rand(1,25)).rand(11,99).chr(64+rand(1,25)).chr(64+rand(1,25)).rand(11,99).chr(64+rand(1,25));
	return $code;
}
function authorise_user($path){
	if(!isset($_SESSION['USER_LOGIN_RX'])){
		redirect($path);
	}
}
?>