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
        "answers/final" + store.mainStore.userName + " " + store.mainStore.roll
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
                  <p>1. What kind of error the code possess?</p>
                  <pre>
                    <code>{`
  #include<stdio.h>
  int Main()
  {
    int a=98;
    printf("The value of a is:%d",a);
    return 0;
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
                        value="Semantic error"
                      />
                      <span>
                        Semantic error{" "}
                      </span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q1" id="" value="The code is perfect" />
                      <span>The code is perfect</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q1"
                        id=""
                        value="Linker error"
                      />
                      <span>Linker error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q1"
                        id=""
                        value="Run-time error"
                      />
                      <span>
                        Run-time error
                      </span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>2.What will be the output if after compilation “./a.out AB“ is passed as command line Argument ?</p>
                  <pre>
                    <code>{`
    #include<stdio.h>
    int main(int argc,char* argv[])
    {
        int counter;
        printf("Program Name Is: %s",argv[0]);
        if(argc==1)
        printf("\nNo Extra Command Line Argument Passed Other Than Program Name");
        if(argc>=2)
        {
          printf("\nNumber Of Arguments Passed: %d",argc);
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
                        name="q2"
                        id=""
                        value="Error"
                      />
                      <span>Error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q2" id="" value="Program Name Is: ./a.out No Extra Command Line Argument Passed Other Than Program Name" />
                      <span>Program Name Is: ./a.out No Extra Command Line Argument Passed Other Than Program Name</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="Program Name Is: ./a.out Number Of Arguments Passed : 3"
                      />
                      <span>Program Name Is: ./a.out Number Of Arguments Passed : 3</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q2"
                        id=""
                        value="Program Name Is: ./a.out Number Of Arguments Passed : 2"
                      />
                      <span>Program Name Is: ./a.out Number Of Arguments Passed : 2</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>3. The concept of two functions with same name but different parameters in c is know as?</p>
        
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Function renaming"
                      />
                      <span>Function renaming</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Function Overloading"
                      />
                      <span>Function Overloading</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="Function Overriding"
                      />
                      <span>Function Overriding</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q3"
                        id=""
                        value="None of the above"
                      />
                      <span>None of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    4. Which of the following declaration is not supported by C?
                  </p>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="char *str;" />
                      <span>char *str;</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="String str;" />
                      <span>String str;</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="float str = 3e2;" />
                      <span>float str = 3e2;</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="Both String str; & float str = 3e2;" />
                      <span>Both String str; & float str = 3e2;</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>5. What will be the output of the following C code?</p>
                  <pre>
                    <code>{`
    #include <stdio.h>
    void main()
    {
      int k = 4;
      int *const p = &k;
      int r = 3;
      p = &r;
      printf("%d", p);
    }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Address of k"
                      />
                      <span>Address of k</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Address of k + address of r"
                      />
                      <span>
                        Address of k + address of r
                      </span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Address of r"
                      />
                      <span>
                       Address of r
                      </span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Compile time error"
                      />
                      <span>Compile time error</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>6. What will be the output of the following C code?</p>
                  <pre>
                    <code>{`
  #include <stdio.h>
  int main()
  {
    float f1 = 0.1;
    if (f1 == 0.1)
    printf("equal\\n");
    else
    printf("not equal\\n");
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
                        value="output depends on the compiler"
                      />
                      <span>output depends on the compiler</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="equal"
                      />
                      <span>
                        equal
                      </span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q6" id="" value="error" />
                      <span>error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q6" id="" value="not equal" />
                      <span>not equal</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>
                    7. What will be the output of the following C code?
                  </p>
                  <pre>
                    <code>{`
  #include <stdio.h>
  void main()
  {
    int a = 5, b = -7, c = 0, d;
    d = ++a && ++b || ++c;
    printf("\\n%d%d%d%d", a, b, c, d);
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q7" id="" value="6 -5 0 1" />
                      <span>6 -5 0 1</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q7" id="" value="6 -6 0 0" />
                      <span>6 -6 0 0</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q7" id="" value="6 -6 0 1" />
                      <span>6 -6 0 1</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q7"
                        id=""
                        value="-6 -6 0 1"
                      />
                      <span>-6 -6 0 1</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>8. Consider the following stack implemented.</p>
                  <pre>
                    <code>{`
    #define SIZE 11
    struct STACK
    {
      int arr[SIZE];
      int top=-1;
    }   
`}</code>
                  </pre>

                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="8"
                      />
                      <span>8</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="9"
                      />
                      <span>9</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="11"
                      />
                      <span>11</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q8"
                        id=""
                        value="10"
                      />
                      <span>10</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>9. What would be the output after performing the following operations in a Deque?</p>
                  <pre>
                    <code>{`
    Insertfront(10);
    Insertfront(20);
    Insertrear(30);
    Insertrear(40);
    Deletefront();
    Insertfront(50);
    Deleterear();
    Display();   
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="10 20 30" />
                      <span>10 20 30</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="50 10 30" />
                      <span>50 10 30</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="40 20 30" />
                      <span>40 20 30</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q9" id="" value="None of the above" />
                      <span>None of the above</span>
                    </div>
                  </div>
                </div>

                <div className="questionwrapper">
                  <p>10. Find the output of the below program</p>
                  <pre>
                    <code>{`
  #include<stdio.h>
  int main()
  {
    int a=10, b=10,c;
    c= a+++++b;
    printf("%d %d %d",a,c,b);
    return 0;
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="21 10 10" />
                      <span>21 10 10</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="Compile-time error" />
                      <span>Compile-time error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="21 10 11" />
                      <span>21 10 11</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q10" id="" value="21 11 11" />
                      <span>21 11 11</span>
                    </div>
                  </div>
                </div>
<div className="questionwrapper">
                  <p>11. What will be the output of the C program?</p>
                  <pre>
                    <code>{`
  #include<stdio.h>
  int main()
  {
    char *ptr = "c-aptitude%s";
    printf(ptr);
    return 0;
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q11" id="" value="Compilation error" />
                      <span>Compilation error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q11" id="" value="c-aptitude%s" />
                      <span>c-aptitude%s</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q11" id="" value="c-aptitudegarbagevalue" />
                      <span>c-aptitudegarbagevalue</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q11" id="" value="c-aptitude" />
                      <span>c-aptitude</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>12. What will be the output of the C program?</p>
                  <pre>
                    <code>{`
  #include<stdio.h>
  int function(int, int);
  int main()
  {
    int a = 25, b = 24 + 1, c;
    printf("%d", function(a, b));
    return 0;
  }
  int function(int x, int y)
  {
    return (x - (x == y));
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q12" id="" value="Compilation error" />
                      <span>Compilation error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q12" id="" value="25" />
                      <span>25</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q12" id="" value="1" />
                      <span>1</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q12" id="" value="24" />
                      <span>24</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>13. What will be the output of the C program?</p>
                  <pre>
                    <code>{`
  #include<stdio.h>
  int main()
  {
    int i;
    int arr[40]={2,3,4,8,6};
    int n=40;
    for(i=0 ; i<n;i++) {
      printf("%d\\t",arr[i]);
    }
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q13" id="" value="Yes" />
                      <span>Yes</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q13" id="" value="No" />
                      <span>No</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>14. What is the output of the above code?</p>
                  <pre>
                    <code>{`
  #include <stdio.h>
  void change (int ,int );
  int main()
  {
    int a=10,b=20;
    change(a,b);
    printf("Value of a is: %d",a);
    printf("\\n");
    printf("Value of b is: %d",b);
    return 0;
  }
  void change(int x,int y)
  {
    x=13;
    y=17;
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q14" id="" value="Error" />
                      <span>Error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q14" id="" value="Value of a is: 10, Value of b is: 20" />
                      <span>Value of a is: 10, Value of b is: 20</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q14" id="" value="Value of a is: 13, Value of b is: 17" />
                      <span>Value of a is: 13, Value of b is: 17</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q14" id="" value="Value of a is: 10, Value of b is: 17" />
                      <span>Value of a is: 10, Value of b is: 17</span>
                    </div>
                  </div>
                </div>

                <div className="questionwrapper">
                  <p>15. What is the output of the above code?</p>
                  <pre>
                    <code>{`
  #include <stdio.h>
  int change (int *,int );
  int main()
  {
    int a=10,b=20;
    change(&a,b); //calling a function by passing the values of variables.
    printf("Value of a is: %d",a);
    printf("\\n");
    printf("Value of b is: %d",b);
    return 0;
  }
  int change(int *x,int y)
  {
    *x=13;
    y=17;
    return (*x+y);
  }
`}</code>
                  </pre>
                  <br />
                  <div className="q6w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q15" id="" value="Value of a is: 10, Value of b is: 20" />
                      <span>Value of a is: 10, Value of b is: 20</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q15" id="" value="Error" />
                      <span>Error</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q15" id="" value="Value of a is: 13, Value of b is: 17" />
                      <span>Value of a is: 13, Value of b is: 17</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q15" id="" value="Value of a is: 13, Value of b is: 20" />
                      <span>Value of a is: 13, Value of b is: 20</span>
                    </div>
                  </div>
                </div>

                <div className="questionwrapper">
                  <p>
                    16. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code className="ns">{`
  #include<stdio.h>
  int main ()
  {
    int a = 10; //this line should not be changed
    int p,*r,*pp,***f;
    p = a;
    int b=1000; //this line should not be changed
    r=&b;
    *pp=r;
    f=&p;
    printf("%d\\n",*p); //this line should not be changed
    printf("%d",***f); //this line should not be changed
  }
-------------------------------------------------
EXPECTED OUTPUT: 10
                 1000
   
`}</code>
                  </pre>
                  <textarea
                    name="q16"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    17. Read the following code and write the correct code in
                    the answer field.
                  </p>
                  <pre>
                    <code className="ns">{`
    #include<stdio.h>
    #include<stdlib.h>
    struct Node
    {
      int data;
      struct Node* next;
    };
    void push(struct Node** head_ref, int new_data)
    {
      struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
      new_node->data = new_node;
      new_node->next = (*head_ref);
      (*head_ref) = new_node;
    }
    void print(struct Node* c){
      printf("%d ",c->data);
    }
    /* Counts no. of nodes in linked list */
    int getCount(struct Node* head)
    {
      int count = 0;
      struct Node* current = head;
      printf("The elements from the stack are ");
      while (current != NULL)
      {
        count++;
        print(current);
      }
      return count;
    }

    /* Driver program to test count function*/
    int main()
    {
      /* Start with the empty list */
      struct Node* head = NULL;
      /* Use push() to construct below list
      1->2->1->3->1 */
      push(&head, 1);
      push(&head, 2);
      push(&head, 1);
      push(&head, 3);
      push(&head, 1);
      printf("\\nCount of nodes is %d", getCount(head));
      return 0;
    }
----------------------------------------------------------------------
EXPECTED OUTPUT: 
The elements from the stack are 1 3 1 2 1
Count of nodes is 5
`}</code>
                  </pre>
                  <textarea
                    name="q17"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    18. Only Update the lines with error.
                  </p>
                  <pre>
                    <code className="ns">{`
      #include <stdio.h>
      int fact(int *m){ //error
        int i,f=1;
        for(i=1;i<=m;i++){
          f=f*i;
        }
        return f;
      }
      int fun(int *p,int n){
        for(int i=0;i<n;i++){
          if(i%2==0){
          p[i]+=i;
        }
        else
          *p[i]++; //error
        }
        return 0;
      }
      int fun1(int *p, n){ //error
        for(int i=0;i<n;i++){
          if(i%2==0){
          *p[i]-=i; //error
        }
        else
          --p[i];
        }
        return 0;
      }
      int fun2(int *p,int n){
        for( i=0;i<n;i++){ //error
          if(i%2==0){
            p[i]*=i;
          }
          else
            p[i]++;
        }
        return 0;
      }
      void fun3(int p,int n){ //error
        for(int i=0;i<n;i++){
          if(i%2==0){
          &p[i]+=fact(p[i]); //error
        }
        else
          p[i]++;
        }
        return 0;
      }
      
      int main() {
        int a[]={1,2,3,4,5,6};
        int n=sizeof(a)/sizeof(a[3]);
        int (*arr[]) (int *, int)={fun1,fun2,fun,fun3};
        int sum=0;
        for(int j=0;j<n;j++){ //error
          (*arr[j])(&a[0],n);
        }
        for( i=0;i<n;i++){ //error
          sum+=a[i];
        }
        printf("%d",sum);
      }
-------------------------------------
Expected Output : 40375

`}</code>
                  </pre>
                  <textarea
                    name="q18"
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
