import React, { useState } from "react";
import AccordionData from "./AccordionData";
import AccordionList from "./AccordionList";

function Accordion() {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if(toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  }
    return(
      <div className="row">
        <div className="col-12">
          <h4>Accordion</h4>

          <div className="row">
            <div className="col-sm-4">
              <AccordionList accordionData = {AccordionData} handleToggle = {handleToggle} toggle={toggle} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Accordion;