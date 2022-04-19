<?php
    require('utility/top.php');
    $id=$_GET['id'];
    $sql="SELECT fname,tname,cname,dname,tid,mihpayid,txnid,payu_status,sevname,uname FROM rgslog,sevents,users WHERE rgslog.uid=users.id AND rgslog.seventid=sevents.id AND rgslog.id=$id";
    $rt=mysqli_fetch_assoc(mysqli_query($con,$sql));
    // prx($rt);
?>
   <div class="cartrow" id="catrow">
          <div class="gh">
            <div class="pdpt-bg">
              <div class="pdpt-title flex justify-between">
                <h6>Team Id: <?php echo $rt['tid'];  ?></h6>
              </div>
              <div class="order-body10">
                <ul class="order-dtsll">
                  <li>
                    <div class="order-dt47">
                      <h4><?php echo $rt['tname'];  ?></h4>
                      <p><?php echo $rt['fname'];  ?></p>
                    </div>
                  </li>
                </ul>
                <div class="total-dt">
                  <div class="total-checkout-group">
                    <div class="cart-total-dil">
                      <h4>College Name</h4>
                      <span><?php echo $rt['cname'];  ?></span>
                    </div>
                    <div class="cart-total-dil pt-3">
                      <h4>Depertment</h4>
                      <span><?php echo $rt['dname'];  ?></span>
                    </div>
                    <div class="cart-total-dil pt-3">
                      <h4>Payment</h4>
                      <span><?php echo $rt['payu_status'];  ?></span>
                    </div>
                  </div>
                </div>
                <div class="track-order flex justify-between">
                <?php if($rt['payu_status']=='success'){?>
                      <span class="badge green"> Registered </span>
                      <?php }else{ ?>
                        <span class="badge orange"> Not Registered </span>
                      <?php } ?>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
    <script src="assets/js/script.js"></script>
  </body>
</html>