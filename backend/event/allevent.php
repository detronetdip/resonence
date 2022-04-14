<?php
  require('../../utility/utility.php');
  $mainEvent=get_safe_value($con,$_POST['mainEvent']);
  $q="SELECT id,sevname,price FROM sevents WHERE mevent='$mainEvent'";
  $rs=mysqli_query($con,$q);
	$product_arr=array();
    $result=array();
    if ($mainEvent == "") {
        $result['status']=0;
        $result['msg']="Enter event id";
      } else{
        $result['status']=1;
        $r=array();
        while($row=mysqli_fetch_assoc($rs)){	
            $r[]=$row;
        }
        $result['data']=$r;
    }
echo json_encode($result);
?>