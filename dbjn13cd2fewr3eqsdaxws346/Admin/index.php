<?php
    require('utility/top.php');
?>
        <div class="cartrow" id="catrow">
          <div class="gh">
            <div class="heading">
              <h3>All Registrations</h3>
            </div>
            <div class="maincontainer">
              <table class="wishlist">
                <thead>
                  <th>#</th>
                  <th>Team Id</th>
                  <th>Event</th>
                  <th>Team Name</th>
                  <th>Status</th>
                  <th>View</th>
                </thead>
                <tbody>
                <?php
                $sql="SELECT rgslog.id,tid,tname,payu_status,sevname FROM rgslog,sevents WHERE rgslog.seventid=sevents.id";
                $res=mysqli_query($con,$sql);
                $product_arr=array();
                while($row=mysqli_fetch_assoc($res)){	
                  $product_arr[]=$row;
                }
                //prx($product_arr);
                $i=1;
                 foreach($product_arr as $r){

                 ?>
                  <tr>
                    <td>
                      <?php echo $i;$i++; ?>
                    </td>
                    <td>
                    <?php echo $r['tid']; ?>
                    </td>
                    <td>
                    <?php echo $r['sevname']; ?>
                    </td>
                    <td>
                    <?php echo $r['tname']; ?>
                    </td>
                    <td>
                    <?php if($r['payu_status']=='success'){?>
                      <span class="badge green"> Registered </span>
                      <?php }else{ ?>
                        <span class="badge orange"> Not Registered </span>
                      <?php } ?>
                    </td>
                    <td>
                      <div class="acn">
                        <a href="view.php?id=<?php echo $r['id']; ?>" class="view">
                              <i class="uil uil-eye"></i>
                            </a>
                      </div>
                    </td>
                  </tr>
                  <?php } ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="assets/js/script.js"></script>
  </body>
</html>