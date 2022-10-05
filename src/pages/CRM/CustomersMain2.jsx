
import { DataGrid } from "@mui/x-data-grid";
import fire from "../../config/Fire";
import { getDatabase, ref, set, onValue, push, child, get, query } from "firebase/database";
import React from "react";
const db = getDatabase();

export default class CustomersMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerArray: [],
    };
  }




  componentDidMount() {
    const dbRef = ref(db, "Customers");

    onValue(dbRef, (snapshot) => {
      let records = []
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let childData = childSnapshot.val();
        childData.id = keyName;


        records.push(childData);
      });
      this.setState({ customerArray: records });
    });
  }


  render() {
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

    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={this.state.customerArray}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    );
  }
}