import React from "react";
import { useState } from "react";
import { createClient } from 'pexels';
import { useDispatch } from "react-redux";

const Search = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch()
    
    const client = createClient('gx6tAiWhFkzbNpiMSMRcOLR95zM2kVXP6PswvvUEqzlNaQurBqRsWfSp');
    const handleSearch =async()=>{
        try{
          let data = await client.photos.search({ query, per_page: 18 });
            data = data.photos
            if(data){
              dispatch({
                type: "SET_SEARCH_DATA",
                payload: data
              })
            }
          }catch(e){
            console.log("error", e)
          }
        }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for images..."
        aria-label="Search for images"
        aria-describedby="button-addon2"
        onChange={(e)=> setQuery(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        style={{color:'white'}}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
