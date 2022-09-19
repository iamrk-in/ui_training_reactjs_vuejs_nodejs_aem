import React, { useState } from "react";
import Data from "./Data";
import Tabs from "./Tabs";
import Items from "./Items";

function Gallery() {
  const [data, setData] = useState(Data);
  const categoryData = Data.map((value) => {
	  return value.category
  });
  const tabsData = ["all", ...new Set(categoryData)];
  const filterCategory = (category) => {
    if(category == "all") {
      setData(Data);
      return;
    }
    const filterData = Data.filter((value) => {
      return value.category == category
    })
    setData(filterData)
  }
    return(
      <div className="row">
        <div className="col-12">
          <h4>Gallery</h4>
	
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <Tabs filterCategory = {filterCategory} tabsData = {tabsData} />
              <Items data={data} />
            </div>
            <div className="col-sm-1"></div>
          </div>
          
        </div>
      </div>
    );
}

export default Gallery;