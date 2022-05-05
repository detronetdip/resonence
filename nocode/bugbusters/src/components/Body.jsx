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
                  <p>1. What will be the output of the code?</p>
                  <pre>
                    <code>{`
  #include<stdio.h>
  int main(){
    int i;
    i=10000000101;
    printf("%d",i);
  }   
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q1" id="" value="100000101" />
                      <span>100000101</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q1" id="" value="10000000101" />
                      <span>10000000101</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q1" id="" value="Warning" />
                      <span>Warning</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q1" id="" value="141006589" />
                      <span>141006589</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>2. What are the ways to declare pointer variables ?</p>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q2" id="" value="Int* Point;" />
                      <span>Int* Point;</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q2" id="" value="int *Point;" />
                      <span>int *Point;</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="int  Point *;"
                      />
                      <span>int Point *;</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="All of the above"
                      />
                      <span>All of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>3. What is the output of below program ?</p>
                  <pre>
                    <code>{`
  int main(){
   int i;
   for(i = 0,i<5,i++){
     printf("Hello");
   }
   return 0;
  }
   
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Hello is printed 5 times"
                      />
                      <span>Hello is printed 5 times</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Compilation Error"
                      />
                      <span>Compilation Error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Runtime Error"
                      />
                      <span>Runtime Error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Hello is printed 4 times"
                      />
                      <span>Hello is printed 4 times</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>4. Will the code generate error ?</p>
                  <pre>
                    <code>{`
  #include<stdio.h>                                                                                                                                                 
  void main(){
   int i;
   int arr[4]={2,3,4,8,6};
   for(i=0 ; i<4,i++) {
      printf("%d\\t",arr[i]);
   }
  }  
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="Yes" />
                      <span>Yes</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="No" />
                      <span>No</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    5. What would be the output after performing the following
                    operations in a Deque?
                  </p>
                  <pre>
                    <code>{`
  Insertfront(10);  
  Insertfront(20);  
  Insertrear(30);  
  Insertrear(40);  
  Deletefront();  
  Deleterear();
  Insertfront(50);  
  Deleterear();  
  Display();
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q5" id="" value="10, 20, 30" />
                      <span>10, 20, 30</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q5" id="" value="50, 10, 30" />
                      <span>50, 10, 30</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q5" id="" value="40, 20, 30" />
                      <span>40, 20, 30</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="None of the above"
                      />
                      <span>None of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>6. consider the sorting operation: </p>
                  <pre>
                    <code>{`
  for (int i = 0; i < length-1; i++) {     
    for (int j = i+1; j < length; j++) {     
       if(arr[i] > arr[j]) {    
           temp = arr[i];    
           arr[i] = arr[j];    
           arr[j] = temp;    
       }     
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
                    10. Read the following code and write the correct code in the
                    answer field.
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
                    11. Read the following code and write the correct code in the
                    answer field.
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
                    12. Read the following code and write the correct code in the
                    answer field.
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
