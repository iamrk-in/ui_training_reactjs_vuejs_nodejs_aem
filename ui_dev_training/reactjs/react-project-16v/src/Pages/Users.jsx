import React, { Component } from "react";
import UserDetail from "./UserDetail";

class Users extends Component {
    // properties of class Object, ex., state
    state = {
        users: [
            { userId: 534, userName: "john", userType: "Hr", userStatus: true }, 
            { userId: 334, userName: "bubblu", userType: "CEO", userStatus: true }, 
            { userId: 535, userName: "paul", userType: "Sr., Dev.,", userStatus: false }, 
            { userId: 536, userName: "smith", userType: "Tester", userStatus: true }
        ], 
        showUsers: true
    };

    // methods of class Object, ex., Users
    toggleEffect = () => {
        let doesShow = this.state.showUsers;
        // updating the property value - builtin method setState()
        // setState() is used to update the values to the given property(s), additionally as it is updated, immediatly it will re-render the program
        this.setState({
            showUsers: !doesShow
        });
    };


    // updating or changing the record data
    updateRecord = (userId, userName, userType, userStatus) => {
        this.setState({
            users: [
                { userId: 534, userName: "john", userType: "Hr", userStatus: true }, 
                { userId: userId, userName: userName, userType: userType, userStatus: userStatus }, 
                { userId: 535, userName: "paul", userType: "Sr., Dev.,", userStatus: false }, 
                { userId: 536, userName: "smith", userType: "Tester", userStatus: true }
            ]
        })
    };

    // deleting the record
    deleteRecord = (index) => {
        const users = this.state.users;
        users.splice(index, 1);
        this.setState({
            users: users
        });
    }

    // changeName
    changeName = (event) => {
        this.setState({
            users: [
                { userId: 534, userName: "john", userType: "Hr", userStatus: true }, 
                { userId: 334, userName: event.target.value, userType: "CEO", userStatus: true }, 
                { userId: 535, userName: "paul", userType: "Sr., Dev.,", userStatus: false }, 
                { userId: 536, userName: "smith", userType: "Tester", userStatus: true }
            ]
        })
    };

    render() {
        let showUsers = null;
        if(this.state.showUsers === true) {
            showUsers = (<div className="row">{this.state.users.map((user, index) => {return(<UserDetail 
                userId = {user.userId} 
                userName = {user.userName} 
                userType = {user.userType} 
                userStatus = {user.userStatus} 
                updateRecord = {() => this.updateRecord(654, "bros", "Jr Lect,", true)} 
                deleteRecord = {() => this.deleteRecord(index)} 
                changeName = {this.changeName}
             />)})}
        </div>);
        } else {
            showUsers = (<p style={{color: "#f00"}}>no users found</p>);
        }

        return(
            <div className="row">
                <div className="col-12">
                    <h4>List of Users</h4>

                    <hr />

                    <button type="button" className="btn btn-sm btn-primary" onClick={this.toggleEffect}> toggle Effect </button>

                    <button type="button" className="btn btn-sm btn-primary" onClick={this.updateRecord.bind(this, 454, "james", "Jr Dev.,", false)}> update Record </button>

                    <hr />
                    
                    {showUsers}  
                </div>
            </div>
        );
    }
}

export default Users;