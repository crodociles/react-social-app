import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

const test = {
  id: 408595,
  text: "Some text",
  createAt: 3453355
};

database.ref().push(test);
