import React, { useState, useEffect, forwardRef } from "react";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Remove from "@material-ui/icons/Remove";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import axios from "axios";
import Alert from "@mui/lab";
import { jsx, css, Global, ClassNames } from '@emotion/react';
// import Alert from "@material-ui/lab/Alert";

const api = axios.create({
    baseURL: "https://reqres.in/api"
});

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref = {ref} />), 
  Check: forwardRef((props, ref) => <Check {...props} ref = {ref} />), 
  Clear: forwardRef((props, ref) => <Clear {...props} ref = {ref} />), 
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref = {ref} />), 
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref = {ref} />), 
  Edit: forwardRef((props, ref) => <Edit {...props} ref = {ref} />), 
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref = {ref} />), 
  Filter: forwardRef((props, ref) => <FilterList {...props} ref = {ref} />), 
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref = {ref} />), 
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref = {ref} />), 
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref = {ref} />), 
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref = {ref} />), 
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref = {ref} />), 
  Search: forwardRef((props, ref) => <Search {...props} ref = {ref} />), 
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref = {ref} />), 
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref = {ref} />), 
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref = {ref} />)
};

function validateEmail(email) {
  const regex = /^([\w.]+)@([\w]+\.)+([\w]{2,5})$/;
  return regex.test(String(email).toLowerCase());
}

function MaterialUI_CrudOperations() {
  var columns = [
    { title: "id", field: "id", hidden: true }, 
    { title: "Avatar", render: rowData => <Avatar maxInitials={1} size={30} round={true} name={rowData === undefined ? "" : rowData.first_name} /> }, 
    { title: "First Name", field: "first_name" }, 
    { title: "Last Name", field: "last_name" }, 
    { title: "Email Address", field: "email" }
  ];

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then(res => {
        setData(res.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  const handleRowAdd = (newData, resolve) => {
    let errorList = [];
    if(newData.first_name === undefined) {
      errorList.push("please enter first name");
    }

    if(newData.last_name === undefined) {
      errorList.push("please enter last name");
    }

    if(newData.email === undefined || validateEmail(oldData.email) === false) {
      errorList.push("enter a valid name");
    }

    if(errorList.length < 1) {
      api.post("/users", newData)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve();
        setErrorMessages([]);
        setIsError();
      })
      .catch(error => {
        setErrorMessages(["unable to add new data"]);
        setIsError(true);
        resolve();
      })
    } else {
      setErrorMessages(errorList);
      setIsError(true);
      resolve();
    }
  }
  
  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = [];
    if(newData.first_name === undefined) {
      errorList.push("please enter first name");
    }

    if(newData.last_name === undefined) {
      errorList.push("please enter last name");
    }

    if(newData.email === undefined || validateEmail(oldData.email) === false) {
      errorList.push("enter a valid name");
    }

    if(errorList.length < 1) {
      api.patch("/users/" + newData.id, newData)
        .then(res => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve();
          setIsError(false);
          setErrorMessages([]);
        })
        .catch(error => {
          setErrorMessages(["updating failed"]);
          setIsError(true);
          resolve();
        })
    } else {
      setErrorMessages(errorList);
      setIsError(true);
      resolve();
    }
  }

  const handleRowDelete = (oldData, resolve) => {
    api.delete("/users/" + oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve();
      })
      .catch(error => {
        setErrorMessages(["unable to delete"]);
        setIsError(true);
        resolve();
      })
  }

  return(
      <div className="row">
        <div className="col-12">
          <h4>Material UI - Crud Operations</h4>

          <Grid container spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div>
                {isError && 
                  <div>
                    {errorMessages.map((msg, i) => {
                      return(<div key={i}>{msg}</div>)
                    })}
                  </div>
                }
              </div>
              <MaterialTable
                title = "user data from api" 
                columns = {columns} 
                data = {data} 
                icons = {tableIcons} 

                editable = {{
                  onRowAdd: (newData) => 
                    new Promise((resolve) => {
                      handleRowAdd(newData, resolve)
                    }),
                  onRowUpdate: (newData, oldData) => 
                    new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve)
                    }), 
                  onRowDelete: (oldData) => 
                    new Promise((resolve) => {
                      handleRowDelete(oldData, resolve)
                    })
                }}
              >

              </MaterialTable>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </div>
      </div>
  )
}

export default MaterialUI_CrudOperations;