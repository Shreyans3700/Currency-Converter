import { useEffect, useState } from "react";
import React from 'react'

function UseCurrenceInfo(currency) {
    let [data,setData] = useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((res)=> setData(res[currency]))
    },[currency])
    
  return data;
}

export default UseCurrenceInfo;