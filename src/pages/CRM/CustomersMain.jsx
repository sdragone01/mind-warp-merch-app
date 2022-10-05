import "./CRM.css";
import CustomerForm from "../../components/Forms/CustomerForm";
import CustomerForm2 from "../../components/Forms/CustomerForm2";
import AddressAutoFill from "../../components/AddressAutoFill";
import fire from "../../config/Fire";
import { getDatabase, ref, set, onValue, push, child, get, query } from "firebase/database";
import { useState } from "react";
import React from "react";


export default function CustomersMain() {

  const db = getDatabase();
  const [customerArray, setCustomerArray] = useState([]);


  const customerData = query(ref(db, 'Customers'))
  onValue(customerData, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      customerArray.push(childData)

    });
  });






  return (
    <div className="customers-main">
      <h1>CustomersMain</h1>
      {/* <CustomerForm2 /> */}
      {customerArray.map((customer) => {
        return (
          <div className="customer-card">
            <h1>{customer.name}</h1>
            <p>{customer.email}</p>
            <p>{customer.phone}</p>
            <p>{customer.address}</p>
          </div>
        )
      }
      )}


    </div>
  );
}
