import { useContext, useState } from "react";
import { ContextStore } from "../App";
import { set, ref } from "firebase/database";
import { firebaseDatabase } from "../util/config";
import { ImSpinner6 } from "react-icons/im";
import imageCoding from "../images/44.png";
import axios from "axios";
const SUBMIT_API = "https://cemkfest.in/backend/api/submitted.php";
function Body() {
  const store = useContext(ContextStore);
  const [spin, setSpin] = useState(false);
  const [allData, setAllData] = useState({});
  const handelChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    setAllData((e) => {
      return { ...e, [nam]: val };
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setSpin(!spin);
    allData.TimeLeft = store.timer;
    set(
      ref(
        firebaseDatabase,
        "answers/" + store.mainStore.userName + " " + store.mainStore.roll
      ),
      allData
    ).then((e) => {
      axios
        .post(SUBMIT_API, {
          mail: store.mainStore.mail,
        })
        .then((df) => {
          store.setMainStore((e) => {
            var s = {
              timeOut: true,
            };
            return { ...e, ...s };
          });
        })
        .then((e) => {
          setTimeout(() => {
            store.setMainStore((e) => {
              var s = {
                isLogin: false,
              };
              return { ...e, ...s };
            });
          }, 3000);
        });
    });
  };

  return (
    <div className="bodycontainer">
      {!store.mainStore.timeOut ? (
        <>
          {store.mainStore.isStartingTest ? (
            <>
              <form method="POST" onSubmit={handelSubmit}>
                <div className="questionwrapper">
                  <p>1. Will the below code generate error ?</p>
                  <pre>
                    <code>{`
1   #include<stdio.h>
2   int main(){
3     display();
4     return 0;
5   } 
6   void display(){ 
7     printf("CEMK");
8   } 
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q1"
                        id=""
                        value="Yes (implicit declaration of function ‘display’)"
                      />
                      <span>
                        Yes (implicit declaration of function ‘display’){" "}
                      </span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q1" id="" value="No" />
                      <span>No</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q1"
                        id=""
                        value="Depends on the compiler"
                      />
                      <span>Depends on the compiler</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q1"
                        id=""
                        value="Yes(explicit declaration of function ‘display’)"
                      />
                      <span>
                        Yes(explicit declaration of function ‘display’)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>2. Will the below code generate error ?</p>
                  <pre>
                    <code>{`
1   #include<stdio.h> 
2   void main(){
3     int i;
4     int arr[4]={2,3,4,8,6};
5     for(i=0 ; i<4,i++) {
6        printf("%d\\t",arr[i]);
7     }
8   }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="Yes (Error in line 4)"
                      />
                      <span>Yes (Error in line 4)</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q2" id="" value="No" />
                      <span>No</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="Warning will be generated but no error"
                      />
                      <span>Warning will be generated but no error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="Yes(Error in line 4 and line 5)"
                      />
                      <span>Yes(Error in line 4 and line 5)</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>3. Find the line which may generate the error .</p>
                  <pre>
                    <code>{`
1    #include<stdio.h> 
2    void main(){ 
3       int a,b,c=9;  
4       a=2; 
5       b=3;  
6       c=1;  
7       a+b=c; 
8       printf(c); 
9       return 0;  
10   } 

`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Line 2 and Line 1"
                      />
                      <span>Line 2 and Line 1</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Line 8 and Line 2"
                      />
                      <span>Line 8 and Line 2</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Line 8 and Line 6"
                      />
                      <span>Line 8 and Line 6</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Line 6 and Line 2"
                      />
                      <span>Line 6 and Line 2</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    4. Syntax errors are also known as the compilation errors ?
                  </p>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="True" />
                      <span>True</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="False" />
                      <span>False</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>5. What is the meaning of below line?</p>
                  <pre>
                    <code>{`
1   void sum (int, int); 
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="sum is function which takes int arguments"
                      />
                      <span>sum is function which takes int arguments</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="sum is a function which takes two int arguments and returns void"
                      />
                      <span>
                        sum is a function which takes two int arguments and
                        returns void
                      </span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="sum is a function which takes two int arguments and may or may not return values."
                      />
                      <span>
                        sum is a function which takes two int arguments and may
                        or may not return values.
                      </span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Can't comment"
                      />
                      <span>Can't comment</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>6. Will the following C code compile without any error?</p>
                  <pre>
                    <code>{`
1    #include <stdio.h>
2    int main(){ 
3     int k; 
4     { 
5       int k; 
6       for (k = 0; k < 10; k++); 
7     } 
8    }   
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="Depends on the compiler"
                      />
                      <span>Depends on the compiler</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="Depends on the C standard implemented by compilers"
                      />
                      <span>
                        Depends on the C standard implemented by compilers
                      </span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q6" id="" value="No" />
                      <span>No</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q6" id="" value="Yes" />
                      <span>Yes</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    7. If the elements '1', '2', '3' and '4' are added in a
                    stack, so what would be the order for the removal?
                  </p>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q7" id="" value="1,2,3,4" />
                      <span>1,2,3,4</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q7" id="" value="2,1,3,4" />
                      <span>2,1,3,4</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q7" id="" value="4,3,2,1" />
                      <span>4,3,2,1</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q7"
                        id=""
                        value="None of the above"
                      />
                      <span>None of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>8. Cosider the sorting operation:-</p>
                  <pre>
                    <code>{`
1     for (int i = 0; i < length; i++) {  
2       for (int j = i+1; j < length; j--) {  
3         if(arr[i] > arr[j]) {  
4           temp = arr[i];  
5           arr[i] = arr[j];  
6           arr[j] = temp; 
7         }  
8       }  
9     }       
`}</code>
                  </pre>

                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="Through ArrayIndexOutOfBoundsException"
                      />
                      <span>Through ArrayIndexOutOfBoundsException</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="compilation error"
                      />
                      <span>compilation error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="run time error"
                      />
                      <span>run time error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value=" None of the above"
                      />
                      <span> None of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>9. What will be the output of the below code ?</p>
                  <pre>
                    <code>{`
1     #include<stdio.h> 
2     int main() 
3     { 
4       int a=10, b=10,c; 
5       c= a++ + ++b; 
6       printf("%d %d %d",a,b,c); 
7       return 0; 
8     }    
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="10 11 21" />
                      <span>10 11 21</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="11 10 21" />
                      <span>11 10 21</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="11 11 22" />
                      <span>11 11 22</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="11 11 21" />
                      <span>11 11 21</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>10. What will be the output of the C program?</p>
                  <pre>
                    <code>{`
1    #include<stdio.h> 
2    #include<stdlib.h> 
3    int main() 
4    {
5       int *p; 
6       p = (int *)malloc(20); 
7       printf("%d\\n", sizeof(p)); 
8       free(p); 
9       return 0; 
10   } 
  
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="40" />
                      <span>40</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="20" />
                      <span>20</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="8" />
                      <span>8</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="80" />
                      <span>80</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    11. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code className="ns">{`
     #include<stdio.h> 
     void value(); 
     int main (){ 
        sum=value(); 
        print("%f",sum);  
     } 
     void value(void){ 
        int year=1,period=5,sum=0,amount=5000;   //This line should not be changed 
        float rate=0.12;                         //This line should not be changed 
        float sums=0;                            //This line should not be changed 
        sum=(amount*(rate*period))+amount;       //This line should not be changed
        sums=sum+(amount*5);  
        return(sum); 
     } 

-------------------------------------------------
EXPECTED OUTPUT: 8000
   
`}</code>
                  </pre>
                  <textarea
                    name="q11"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    12. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code className="ns">{`
    #include<stdio.h> 
    void main() 
    { 
      int a=1, b=1, n=9,c=0; 
      printf("Fibonacci Series upto 9 elements:"); 
      for(int i=0 ; i<n ; i++) 
      { 
        if(i <= 1) 
        { 
          c=i; 
        } 
        else 
        { 
          c=a + b; 
          a=b; 
          b=a; 
        } 
        printf("%d",c); 
      } 
      return 0; 
    } 

----------------------------------------------------------------------
EXPECTED OUTPUT: Fibonacci Series upto 9 elements: 0 1 1 2 3 5 8 13 21
`}</code>
                  </pre>
                  <textarea
                    name="q12"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    13. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code className="ns">{`
     #include <stdlib.h> 
     struct Node {
        int data; 
        struct Node* next; 
     }; 
     void printList(struct Node* n) 
     { 
        while (n == NULL) { 
            printf(" %d ", n->data); 
           n = n->next; 
        } 
     } 
     int main() 
     { 
        struct Node* head = NULL; 
        struct Node* second = NULL; 
        struct Node* third = NULL; 
     
        // allocate 5 nodes in the heap 
        head = (struct Node*)malloc(sizeof(struct Node)); 
        second = (struct Node*)malloc(sizeof(struct Node)); 
        third = (struct Node*)malloc(sizeof(struct Node));  
        fourth =(struct Node*)malloc(sizeof(struct Node)); 
    
        head->data = 1;  
        head->next = third; 
        second->data = 2; 
        second->next = third;
        third->data = 3;  
        third->next = NULL; 
        fourth->data=5; 
        fourth->next=fifth; 
        fifth->data=4; 
        printList(third); 
        return 0; 
      } 

-------------------------------------
Expected Output : 1 2 3 4 5

`}</code>
                  </pre>
                  <textarea
                    name="q13"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <br />
                <br />
                {spin ? (
                  <button className="submit">
                    <ImSpinner6 size={20} className="spin" />
                  </button>
                ) : (
                  <button className="submit">Submit</button>
                )}
                <br />
                <br />
                <br />
              </form>
            </>
          ) : (
            <form>
              <div className="questionwrapper">
                <img src={imageCoding} className="cpr" alt="" />
                <br /><br /><br />
                <br /><br /><br />
                <p className="pp">
                  <h1>Wait...</h1>
                  <h4>Your question will apear soon.</h4>
                </p>
              </div>
            </form>
          )}
        </>
      ) : (
        <form>
          <div className="questionwrapper">
            <p>
              <h1>Contest End</h1>
              <h4>
                Thanks for attending this contest, your response has been
                recorded successfully.
              </h4>
            </p>
          </div>
        </form>
      )}
      <p className="credit">
        Developed By <span>Ayondip Jana</span>
      </p>
    </div>
  );
}

export default Body;
