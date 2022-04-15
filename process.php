<?php
require('./utility/utility.php');
authorise_user("./profile/auth/v2/");
if(isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['teamName']) && isset($_POST['collegeName']) && isset($_POST['deptName']) && isset($_POST['mySelect']) && isset($_POST['mySelect2'])){

    $firstName= $_POST['firstName'];
    $lastName= $_POST['lastName'];
    $teamName= $_POST['teamName'];
    $collegeName= $_POST['collegeName'];
    $deptName= $_POST['deptName'];
    $mySelect= $_POST['mySelect'];
    $mySelect2= $_POST['mySelect2'];
    $uid= $_SESSION['USER_ID'];
    $fullName=$firstName." ".$lastName;
    $team_id=get_new_orderid();
    $txnid= substr(hash('sha256', mt_rand() . microtime()), 0, 20);
    $sql="INSERT INTO rgslog (`uid`, `fname`, `tname`, `cname`, `dname`, `eventid`, `seventid`, `tid`, `txnid`, `payu_status`) VALUES ('$uid','$fullName','$teamName','$collegeName','$deptName','$mySelect','$mySelect2','$team_id','$txnid',0)";
    $rs=mysqli_query($con,$sql);
?>
    <form action="payment.php" method="POST" id="codform">
        <input name="teamId_user" value="<?php echo $team_id; ?>">
    </form>
    <script>
        document.getElementById("codform").submit();
    </script>

<?php
}else{
    echo "fuck u";
}

?>