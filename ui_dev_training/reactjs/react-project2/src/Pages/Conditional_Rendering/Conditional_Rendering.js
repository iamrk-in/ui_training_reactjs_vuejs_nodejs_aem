import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";

function Conditional_Rendering() {
  // inline conditional rendering
  let [isLoggedIn, setIsLoggedIn] = useState(true);

  let login = () => {
    setIsLoggedIn(true);
  }
  
  let logout = () => {
    setIsLoggedIn(false);
  }

  return(
    <React.Fragment>
      {isLoggedIn ? <User fullName="John" clickLogout={logout} /> : <Guest clickLogin={login} />}
    </React.Fragment>
  );
  
  // working with if.. else - checking login and logout with fullName
  // let [isLoggedIn, setIsLoggedIn] = useState(true);

  // let login = () => {
  //   setIsLoggedIn(true);
  // }
  
  // let logout = () => {
  //   setIsLoggedIn(false);
  // }
  
  // if(isLoggedIn) {
  //   return(<div className="row">
  //     <div className="col-12">
  //       <User fullName="John" clickLogout={logout} />
  //     </div>
  //   </div>);
  // } else {
  //   return(<div className="row">
  //   <div className="col-12">
  //     <Guest clickLogin={login} />
  //   </div>
  // </div>);
  // }

  // initial discussion - if & else
  // if(isLoggedIn) {
  //   return(<div className="row">
  //     <div className="col-12">
  //       <User />
  //     </div>
  //   </div>);
  // } else {
  //   return(<div className="row">
  //   <div className="col-12">
  //     <Guest />
  //   </div>
  // </div>);
  // }
}


export default Conditional_Rendering;