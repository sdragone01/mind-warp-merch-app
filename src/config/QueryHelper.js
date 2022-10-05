import fire from "./Fire";
import { getDatabase, ref, push, query, get, orderByChild } from 'firebase/database';

const db = getDatabase();
const dbCustomerRef = ref(db, 'Customers/');

const getDb = get(query(dbCustomerRef)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
}
);

const customerCompany = query(dbCustomerRef, orderByChild('company'));

export { getDb, customerCompany };
