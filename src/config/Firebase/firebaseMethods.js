import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "./firebaseConfig";

const auth = getAuth(app);
const db = getDatabase(app);

const signUpUser = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        let userId = userCredential.user;
        const reference = ref(db, `SignupUser/${userId.uid}`);
        obj.id = userId.uid;
        set(reference, obj)
          .then(() => resolve("User Created Successfully"))
          .catch((err) => reject(err.message));

        // console.log(userCredential);
      })
      .catch((err) => reject(err.message));
  });
};

const loginUser = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        let userId = userCredential.user;
        const reference = ref(db, `SignupUser/${userId.uid}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(data.val());
          } else {
            reject("no user found");
          }
        });
      })
      .catch((err) => reject(err));
  });
};
//   return new Promise((resolve, reject) => {
//     signInWithEmailAndPassword(auth, obj.email, obj.password)
//       .then((userCredential) => {
//         let userId = userCredential.user;
//         const reference = ref(db, `SignupUser/${userId.uid}`);
//         onValue(reference, (data)=>{
//             if(data.exists()){
//                 resolve(data);
//             }else{
//                 reject('No user found');
//             }
//         })
//     })
//       .catch((err) => reject(err))
// });

export { signUpUser, loginUser };
