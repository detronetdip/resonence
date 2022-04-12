<?php
    require('utility/top.php'); 
?>
        <div class="cartrow" id="catrow">
          <div class="gh">
            <div class="heading">
              <h3>All events</h3>
            </div>
            <div class="maincontainer">
              <table class="wishlist">
                <thead>
                  <th>#</th>
                  <th>Event Name</th>
                  <th>Category</th>
                  <th>Entry Fee</th>
                  <th>View</th>
                </thead>
                <tbody>
                <?php 
                $sql="SELECT sevname,price,evname FROM sevents a,events b WHERE a.mevent=b.id";
                $res=mysqli_query($con,$sql);
		            $product_arr=array();
                while($row=mysqli_fetch_assoc($res)){	
                    $product_arr[]=$row;
                }
                $i=1;
                // prx($row);
                foreach($product_arr as $r){
                  ?>
                  <tr>
                    <td>
                      <?php echo $i; $i++; ?>
                    </td>
                    <td>
                    <?php echo $r['sevname']; ?>
                    </td>
                    <td>
                    <?php echo $r['evname']; ?>
                    </td>
                    <td>
                    &#8377; <?php echo $r['price']; ?>
                    </td>
                    <td>
                      <div class="acn">
                        <?php
                        
                        
                        
                        ?>
                        <a href="../" class="view">
                          <i class="uil uil-eye"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <?php 
                
                }
                
                ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
<?php
    require('utility/bottom.php'); 
?>