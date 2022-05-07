import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyCDRqM5wIR7lw3cy7LWUr11Nz24oSb1WYw",
  authDomain: "bugbusters-26abc.firebaseapp.com",
  projectId: "bugbusters-26abc",
  databaseURL: "https://bugbusters-26abc-default-rtdb.firebaseio.com/",
  storageBucket: "bugbusters-26abc.appspot.com",
  messagingSenderId: "225937570672",
  appId: "1:225937570672:web:cd88498338fa95f9bc2db5",
};

const app = initializeApp(firebaseConfig);
const firebaseDatabase = getDatabase(app);
export { firebaseDatabase };
