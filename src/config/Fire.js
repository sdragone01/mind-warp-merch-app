import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';


const config = {
    apiKey: "AIzaSyCq_Q58YtEzJ7ZoCrt6wAMEhzvoSubRQcA",
    authDomain: "mind-warp-merch-v1.firebaseapp.com",
    projectId: "mind-warp-merch-v1",
    storageBucket: "mind-warp-merch-v1.appspot.com",
    messagingSenderId: "141573362535",
    appId: "1:141573362535:web:f229f26cff8fea45eb95c2",
    measurementId: "G-WREVQX3LS0"
};

const fire = firebase.initializeApp(config);
const auth = firebase.auth();
const database = getDatabase(fire);

export { database, auth };
export default fire;