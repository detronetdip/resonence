import { useContext, useState, useEffect } from "react";
import { ContextStore } from "../App";
import { set, ref, onValue } from "firebase/database";
import { firebaseDatabase } from "../util/config";
function Body() {
  const store = useContext(ContextStore);
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
    console.table(allData);
    set(
      ref(firebaseDatabase, "answers/" + store.mainStore.userName),
      allData
    ).then((e) => {
      store.setMainStore((e) => {
        var s = {
          timeOut: true,
        };
        return { ...e, ...s };
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
                  <p>
                    1. Read the following code and write the correct code in the
                    asnwer field.
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
`}</code>
                  </pre>
                  <textarea
                    name="q1"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>
                    2. Read the following code and write the correct code in the
                    asnwer field.
                  </p>
                  <pre>
                    <code>{`
    #include <stdio.h>
    int search(int array[], int n, int x) {
        for (int i = 0; i < n; i++)
        if (array[i] == x)
          return i;
        return -1;
    }
    int main() {
      int array[] = {2, 4, 0, 1, 9};
      int x = 1;
      int n = sizeof(array) / sizeof(array[0]);
      int result = search(array, n, x);
      if (result==-1){
        printf("Element found at index: %f", result);
      }else{
        printf("The element is not present in the array");
      }
    
    
`}</code>
                  </pre>
                  <textarea
                    name="q2"
                    id=""
                    placeholder="Enter the correct code here"
                    onChange={handelChange}
                  ></textarea>
                </div>
                <div className="questionwrapper">
                  <p>3. Choose the correct output of the following code.</p>
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
                  <div className="q3w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q3" id="" value="100000101" />
                      <span>100000101</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q3" id="" value="10000000101" />
                      <span>10000000101</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q3" id="" value="Warning" />
                      <span>Warning</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q3" id="" value="1410065509" />
                      <span>1410065509</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>4. What are the ways to declare pointer variables ?</p>
                  <br />
                  <div className="q4w" onChange={handelChange}>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="Int* Point;" />
                      <span>Int* Point;</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q4" id="" value="int *Point;" />
                      <span>int *Point;</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q4"
                        id=""
                        value="int  Point *;"
                      />
                      <span>int Point *;</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q4"
                        id=""
                        value="All of the above"
                      />
                      <span>All of the above</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>5. What is the output of below program?</p>
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
                  <div className="q5w" onChange={handelChange}>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Hello is printed 5 times"
                      />
                      <span>Hello is printed 5 times</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Compilation Error"
                      />
                      <span>Compilation Error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Runtime Error"
                      />
                      <span>Runtime Error</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q5"
                        id=""
                        value="Hello is printed 4 times"
                      />
                      <span>Hello is printed 4 times</span>
                    </div>
                  </div>
                </div>
                <div className="questionwrapper">
                  <p>6. Will the code generate error ?</p>
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
                      <input type="radio" name="q6" id="" value="Yes" />
                      <span>Yes</span>
                    </div>
                    <div className="oplav">
                      <input type="radio" name="q6" id="" value="No" />
                      <span>No</span>
                    </div>
                    <div className="oplav">
                      <input
                        type="radio"
                        name="q6"
                        id=""
                        value="Warning will be generated but no error"
                      />
                      <span>Warning will be generated but no error</span>
                    </div>
                  </div>
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
                <h4>
                  Your question will apear soon.
                </h4>
              </p>
            </div>
          </form>
          )}
        </>
      ) : (
        <form>
          <div className="questionwrapper">
            <p>
              <h1>Timeout</h1>
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
