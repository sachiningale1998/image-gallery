import React from 'react'
import { createClient } from 'pexels';
import { useState } from 'react';
import { useEffect } from 'react';

const useSearchData = (query) => {
    const [finalData, setFinalData] = useState([])
    const client = createClient('gx6tAiWhFkzbNpiMSMRcOLR95zM2kVXP6PswvvUEqzlNaQurBqRsWfSp');
    const handleSearch =async()=>{
        try{
            let data = await client.photos.search({ query, per_page: 10 });
            console.log('dataincustom: ', data.photos);
            setFinalData(data.photos)
        }catch(e){
            console.log("error", e)
        }
    }
    useEffect(()=>{
        handleSearch()
    }, [])
  return finalData
}

export default useSearchData