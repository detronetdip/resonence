<?php
    require('utility/top.php'); 
    $product_arr=getAllRegisteredEvents($con);
?>
        <div class="path">
          <div class="container">
            <a href="index.php">Home</a>
            /
            <a href="registered_events.php">Registered Events</a>
          </div>
        </div>
        <div class="cartrow" id="catrow">
          <div class="gh">
            <div class="heading">
              <h3>registered events</h3>
            </div>
            <div class="maincontainer">
              <table class="wishlist">
                <thead>
                  <th>#</th>
                  <th>Team Id</th>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Status</th>
                </thead>
                <tbody>
                <?php
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
                    <?php echo $r['evname']; ?>
                    </td>
                    <td>
                    <?php if($r['reg_status']==1){?>
                      <span class="badge green"> Registered </span>
                      <?php }else{ ?>
                        <span class="badge orange"> Not Registered </span>


                      <?php } ?>
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
