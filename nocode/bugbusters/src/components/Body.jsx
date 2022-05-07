import { useContext, useState, useEffect } from "react";
import { ContextStore } from "../App";
import { set, ref, onValue } from "firebase/database";
import { firebaseDatabase } from "../util/config";
import axios from "axios";
const SUBMIT_API = "https://cemkfest.in/backend/api/submitted.php";
function Body() {
  const store = useContext(ContextStore);
  const [allData, setAllData] = useState({});
  const handelChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    setAllData((e) => {
      return { ...e, [nam]: val };
    });
    console.log(allData);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
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
  #include<stdio.h>
  int main(){
    display();
    return 0;
  } 
  void display(){ 
    printf("CEMK");
  } 
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
                  <p>4. Syntax errors are also known as the compilation errors ?</p>
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
                  <p>
                    5. What is the meaning of below line?
                  </p>
                  <pre>
                    <code>{`
void sum (int, int); 
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q5" id="" value="sum is function which takes int arguments" />
                      <span>sum is function which takes int arguments</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q5" id="" value="sum is a function which takes two int arguments and returns void" />
                      <span>sum is a function which takes two int arguments and returns void</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q5" id="" value="sum is a function which takes two int arguments and may or may not return values." />
                      <span>sum is a function which takes two int arguments and may or may not return values.</span>
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
 #include <stdio.h>
 int main() 
 { 
 int k; 
 { 
 int k; 
 for (k = 0; k < 10; k++); 
 } 
 }   
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="Through ArrayIndexOutOfBoundsException"
                      />
                      <span>Through ArrayIndexOutOfBoundsException</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="compilation error"
                      />
                      <span>compilation error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q6" id="" value="40, 20, 30" />
                      <span>run time error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="None of the above"
                      />
                      <span>None of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    7. Read the following code and write the correct code in the
                    answer field.
                  </p>
                  <pre>
                    <code>{`
     #include <stdio.h>
     void main() {  
        int a[1];
        for(int i=0;i<2;i++){
          printf("Give the element ");
          scanf("%d",&a[i]);
          int sum+=a[i];                       
        }
       printf("%d",sum);
       return 0;
    }
     
---------------------------
Input : Give the element 5
        Give the element 6

Expected output : 11
`}</code>
                  </pre>
                  <textarea
                    name="q7"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    8. Read the following code and write the correct code in the
                    answer field.
                  </p>
                  <pre>
                    <code>{`
     #include <stdio.h>
     int search(int array[], int n, int x) {
       // Going through array sequentially 
       for (i = 0; i < n; i++)                    
         if (array[i] = x)                          
           return i;
       return -1;
     }
     
     int main() {
       int array[3] = {2, 4, 0, 1, 9};             
       int x = 1;                                              
       int n = sizeof(array) / sizeof(array[0]);
       int result = search(array, n, x);
       if(result == -1) 
        printf("Element found at %dth position", result);      
       else
        printf("Element not found");             
     }
`}</code>
                  </pre>
                  <textarea
                    name="q8"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    9. Read the following code and write the correct code in the
                    answer field.
                  </p>
                  <pre>
                    <code>{`
    include<stdio.h>
    int main (void){
        int array[] = {9,6,15,1};
        int length = sizeof array / sizeof array[0];
        int max;
        min=max=array[0];
        for (int i = 1; i < length; i++){
            if(array[i]<max){
                max=array[i];
            }
            if(array[i]<min){
                min=array[i];
            }
        }
        printf("The biggest Number is:\\t%d\\n",max);
        printf("The smallest Number is:\\t%d\\n",min);
        return 0;
    }


----------------------------------
Output : The biggest Number is: 15
         The smallest Number is: 1
`}</code>
                  </pre>
                  <textarea
                    name="q9"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    10. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code>{`
    #include <stdio.h>
    int main(){
      int pc, c;
      c = 22;
      printf("Address of c: %p\\n", wec);
      printf("Value of c: %d\\n\\n", c);    // 22
      
      pc = &c;
      printf("Address of pointer pc: %d\\n", pc);
      printf("Content of pointer pc: %p\\n\\n", *pc);   // 22
      
      c = 11;
      printf("Address of pointer pc: %p\\n", pc);
      printf("Content of pointer pc: %p\\n\\n", *pc);   // 11
      
      *pc = 2;
      printf("Address of c: %p\\n", &c);
      printf("Value of c: %d\\n\\n", &c);   // 2
      return 0;
    }
`}</code>
                  </pre>
                  <textarea
                    name="q10"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    11. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code>{`
    #include <stdlib.h>
    struct Node {
      int data;
      struct Node* next;
    };
    
    void printList(struct Node* n){
        while (n == NULL) {
            printf(" %d ", n->data);
            n = n->next;
        }
    }

    int main()
    {
      struct Node* head = NULL;
      struct Node* second = 1;
      struct Node* third = NULL;
      head = (struct Node*)malloc(sizeof(struct Node));
      second = (struct Node*)malloc(sizeof(struct Node));
      third= (struct Node*)malloc(sizeof(struct Node));
      head->data = 1; 
      head->next = second;
      second->data = 2;
      second->next = NULL;
      third->data = 3;
      printList(second);
      return 0;
    }

-----------------------
Output: 1 2 3
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
                    <code>{`
    #include<stdio.h>
    long void  multiplyNumbers(int n);
    int main() {
        int n1;
        printf("Enter a positive integer: ");
        scanf("%d",&n);
        printf("Factorial of %d = %ld", n, multiplyNumber(n));
        return 0;
    }
    
    long int multiplyNumbers(int n) {
        if (n>=1)
            return n*multiplyNumbers(n-1);
        else
            return 1;
    }
`}</code>
                  </pre>
                  <textarea
                    name="q12"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <br />
                <br />
                <button className="submit">Submit</button>
                <br />
                <br />
                <br />
              </form>
            </>
          ) : (
            <form>
              <div className="questionwrapper">
                <p>
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
    </div>
  );
}

export default Body;
