import React,{ useEffect,useCallback, useState } from "react";

function UseCurrencyInfo(currency) {

    let [data,setdata]=useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res=> res.json())
        .then( (res)=> setdata(res[currency]))
    },[currency])

    return data
}

export default UseCurrencyInfo
