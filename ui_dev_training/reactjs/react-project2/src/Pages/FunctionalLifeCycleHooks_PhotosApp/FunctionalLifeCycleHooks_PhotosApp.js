import React, { useState, useEffect } from "react";
import { fetchPhotos } from "./fetchPhotos";

let deBounce;
function FunctionalLifeCycleHooks_PhotosApp() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [hasError, setErrors] = useState(false);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { photos } = await fetchPhotos(search);
        setPhotos(photos);
        setLoading(false);
      } catch(error) {
        setErrors(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [search]);


  const updateSearchHandler = ({target: {value}}) => {
    clearTimeout(deBounce);
    deBounce = setTimeout(() => {
      setErrors(false);
      setPhotos([]);
      setSearch(value);
    }, 1000);
  };

  return(
      <div className="row">
        <div className="col-12">
          <h4>Functional Life Cycle Hooks: Photos</h4>

          <div className="row">
            <div className="col-12">
              <p>Search ...</p>
              <input type="text" placeholder="ex., wall" onChange={updateSearchHandler} />
            </div>
          </div>

          {!hasError && !isLoading && !search && (
            <div className="row">
                <div className="col-12">
                  <p className="text-primary">search by any name</p>
                </div>
            </div>
          )}

          {hasError && !isLoading && (
            <div className="row">
                <div className="col-12">
                  <p className="text-danger">oops! an error occured</p>
                </div>
            </div>
          )}

          {!isLoading && search && !hasError && (
            <div className="row">
              <div className="col-12">
                <p className="text-primary">search process is going on, please wait</p>
              </div>
            </div>
          )}

          {!hasError && !isLoading && search && photos && photos.length === 0 && (
            <div className="row">
                <div className="col-12">
                  <p className="text-warning">oops! no content for your query</p>
                </div>
            </div>
          )}

          {photos && photos.length > 0 && (
            <div className="row">
                <div className="col-12">
                  {photos.map((photo, index) => {
                    return(<img src={photo.src.medium} alt="" title="" />)
                  })}
                </div>
            </div>
          )}
        </div>
      </div>
  );
}

export default FunctionalLifeCycleHooks_PhotosApp;