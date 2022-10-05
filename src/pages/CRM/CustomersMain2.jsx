import DeleteIcon from '@mui/icons-material/Delete';

import { DataGrid } from "@mui/x-data-grid";
import fire from "../../config/Fire";
import { getDatabase, ref, set, onValue, push, child, get, query, remove } from "firebase/database";
import React from "react";
import { Button } from "@mui/material";

const db = getDatabase();


export default class CustomersMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerArray: [],
      selectionModel: [],
      editable: false,

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

  onSelect = (selectionModel) => {
    this.setState({ selectionModel });
  };

  mountEdit = () => {
    this.setState({ editable: true });
  };




  render() {
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "name",
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
      }, {


        width: 100,
        renderCell: params => {
          if (this.state.editable) {

            return (
              <Button
                variant="contained"
                color="primary"
                onClick={(params) => {
                  const dbRef = ref(db, "Customers/");
                  set(child(dbRef, params.id), {
                    name: params.value,
                    email: params.row.email,
                    phone: params.row.phone,
                    address: params.row.address,
                  });
                }}
              >
                Save
              </Button>
            );
          } else {
            return null

          }
        }
      }
    ];






    return (
      <div style={{ height: 400, width: "90%" }}>

        <DataGrid

          onCellEditStart={() => {
            this.mountEdit(true);
          }}
          onCellEditCommit={(params) => {
            const dbRef = ref(db, "Customers");
            set(child(dbRef, params.id), {
              name: params.value,
              email: params.row.email,
              phone: params.row.phone,
              address: params.row.address,
            });
          }}


          rows={this.state.customerArray}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(checkboxSelection) => {
            this.setState({ checkboxSelection });
          }}
        />
        <button onClick={() => {
          const dbRef = ref(db, "Customers");
          for (let i = 0; i < this.state.checkboxSelection.length; i++) {
            remove(child(dbRef, this.state.checkboxSelection[i]));
          }

        }}>Delete</button>


      </div>
    );
  }
}