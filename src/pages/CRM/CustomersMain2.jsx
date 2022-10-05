import { getDatabase, ref, set, onValue, push, child, get, query } from "firebase/database";






export default function CustomersMain2() {

  const dbRef = ref(getDatabase());
  get(child(dbRef, 'Customers')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });







  return (
    <div className="customers-main">



      <h1>CustomersMain2</h1>

    </div>
  );
}
