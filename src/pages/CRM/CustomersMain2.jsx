import "./CRM.css";
import CustomerForm from "../../components/Forms/CustomerForm";
import CustomerForm2 from "../../components/Forms/CustomerForm2";
import AddressAutoFill from "../../components/AddressAutoFill";
import fire from "../../config/Fire";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  child,
  get,
  query,
} from "firebase/database";
import { useState, useEffect, useMemo } from "react";
import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomersMain() {
  const db = getDatabase();
  const [customerArray, setCustomerArray] = useState([]);

  const customerData = query(ref(db, "Customers"));
  onValue(customerData, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childData);
    });
  });

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Full Name",
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

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  // const rows = customerArray.map((customer) => [
  //   {
  //     id: 1,
  //     fullName: customer.name,
  //     email: customer.email,
  //     phone: customer.phone,
  //     address: customer.address,
  //   },
  // ]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
