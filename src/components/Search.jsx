import React from "react";
import { useState } from "react";
import { createClient } from 'pexels';
import useSearchData from "../customHooks/useSearchData";

const Search = () => {
    const [query, setQuery] = useState("");
    const [searchData, setSearchData] = useSearchData(query)
    
    const client = createClient('gx6tAiWhFkzbNpiMSMRcOLR95zM2kVXP6PswvvUEqzlNaQurBqRsWfSp');
    const handleSearch =async()=>{
        try{
            let data = await client.photos.search({ query, per_page: 10 });
            data = data.photos
            console.log('data: ', data);
        }catch(e){
            console.log("error", e)
        }
    }
    console.log('searchData: ', searchData);
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
