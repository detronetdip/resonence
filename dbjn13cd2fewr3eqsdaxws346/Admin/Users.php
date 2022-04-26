<?php
    require('utility/top.php');
?>
        <div class="cartrow" id="catrow">
          <div class="gh">
            <div class="heading">
              <h3>All Users</h3>
            </div>
            <div class="maincontainer">
              <table class="wishlist">
                <thead>
                  <th>#</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </thead>
                <tbody>
                <?php
                $sql="SELECT * FROM users";
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
                    <?php echo $r['uname']; ?>
                    </td>
                    <td>
                    <?php echo $r['umobile']; ?>
                    </td>
                    <td>
                    <?php echo $r['uemail']; ?>
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