import { getDatabase, ref, set, onValue, push, child, get, query, orderByChild } from "firebase/database";



import { useState, useEffect, useMemo } from "react";

import { DataGrid } from "@mui/x-data-grid";
export default function CustomersMain2() {

  const db = getDatabase();
  const [customerArray, setCustomerArray] = useState([]);

  const customerData = query(ref(db, "Customers"), orderByChild("fullName"));
  onValue(customerData, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      customerArray.push(childData);
    });
  });

  console.log(customerArray);

  const customers = useMemo(() => {
    return customerArray.map((customer, index) => {
      return {
        id: index,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
      };
    });
  }, [customerArray]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      editable: true,
    },
  ];

  const rows = customers;


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
