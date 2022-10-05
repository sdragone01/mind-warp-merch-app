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
import { useState } from "react";
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

      customerArray.push(childData);
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
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {
      id: 1,
      fullName: customer.name,
      email: customer.email,
      phone: customer.phone,
    },
  ];

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
