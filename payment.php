<?php 
 require('./utility/utility.php');
 authorise_user("./profile/auth/v2/");
 $row="";
 if(isset($_POST['teamId_user'])){
    $order_id= $_POST['teamId_user'];
    $query="SELECT uname,umobile,uemail,price,txnid FROM users,sevents,rgslog WHERE rgslog.uid=users.id AND rgslog.seventid=sevents.id AND rgslog.tid='$order_id'";
    $row=mysqli_fetch_assoc(mysqli_query($con,$query));
 }
 $MERCHANT_KEY = "4RxOLBOS"; 
 $SALT = "osrz8DQdWT";
//  $name =$row['uname'];
//  $txnid = $row['txnid'];
//  $mobile =$row['umobile'];
//  $email =$row['uemail'];
 echo  $row['price']; 
 $lead="Registration fee";
//  echo $txnid;
// echo $name;
// echo $mobile;
// echo $email;
// echo $amount;
// die();
 $PAYU_BASE_URL = "https://sandboxsecure.payu.in";		// For Sandbox Mode
 // $PAYU_BASE_URL = "https://secure.payu.in";			// For Production Mode
 
 $action = '';
 
 $posted = array();
 if(!empty($_POST)) {
     //print_r($_POST);
   foreach($_POST as $key => $value) {    
     $posted[$key] = $value; 
   }
 }
 
 $formError = 0;
 $txnid='';
 if(empty($posted['txnid'])) {
   // Generate random transaction id
   $txnid = $row['txnid'];
 } else {
   $txnid = $posted['txnid'];
 }
 $hash = '';
 // Hash Sequence
 $hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
 if(empty($posted['hash']) && sizeof($posted) > 0) {
   if(
           empty($posted['key'])
           || empty($posted['txnid'])
           || empty($posted['amount'])
           || empty($posted['firstname'])
           || empty($posted['email'])
           || empty($posted['phone'])
           || empty($posted['productinfo'])
           || empty($posted['surl'])
           || empty($posted['furl'])
           || empty($posted['service_provider'])
   ) {
     $formError = 1;
   } else {
     $hashVarsSeq = explode('|', $hashSequence);
     $hash_string = '';	
     foreach($hashVarsSeq as $hash_var) {
       $hash_string .= isset($posted[$hash_var]) ? $posted[$hash_var] : '';
       $hash_string .= '|';
     }
 
     $hash_string .= $SALT;
 
 
     $hash = strtolower(hash('sha512', $hash_string));
     $action = $PAYU_BASE_URL . '/_payment';
   }
 } elseif(!empty($posted['hash'])) {
   $hash = $posted['hash'];
   $action = $PAYU_BASE_URL . '/_payment';
 }
 ?>
 <html>
 
 <head>
     <script>
     var hash = '<?php echo $hash ?>';
 
     function submitPayuForm() {
         if (hash == '') {
             return;
         }
         var payuForm = document.forms.payuForm;
         payuForm.submit();
     }
     </script>
 </head>
 
 <body onload="submitPayuForm()">
 
     <form id="payForm" action="<?php echo $action; ?>" method="post" name="payuForm">
         <input type="hidden" name="key" value="<?php echo $MERCHANT_KEY ?>" />
         <input type="hidden" name="hash" value="<?php echo $hash ?>" />
         <input type="hidden" name="txnid" value="<?php echo $row['txnid'] ?>" />
         <input type="hidden" name="amount" value="<?php echo $row['price'] ?>" />
         <input type="hidden" name="email" value="<?php echo $row['uemail'] ?>" />
         <input type="hidden" name="productinfo" value="<?php echo $lead ?>" />
         <input type="hidden" name="teamId_user" value="<?php echo $_POST['teamId_user']; ?>" />
         <input type="hidden" name="surl" value="<?php echo HOST; ?>/payment_complete.php" />
         <input type="hidden" name="furl" value="<?php echo HOST; ?>/payment_fail.php" />
         <input type="hidden" name="service_provider" value="payu_paisa" size="64" />
         <input type="hidden" name="firstname" value="<?php echo $row['uname']; ?>" />
         <input type="hidden" name="phone" value="<?php echo $row['umobile'] ?>" />
     </form>
 </body>
 <script type="text/javascript">
 window.onload = function() {
     document.getElementById("payForm").submit();
 }
 </script>
 
 </html>
