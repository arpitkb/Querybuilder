import React, { useEffect, useState } from "react";
import { ops } from "../data";

export const QueryContext = React.createContext({
  Queries:[[{ Field : '', Condition : '', Criteria : ''}]],
  addQuery : (i)=>{},
  addGroupQuery : ()=>{},
  deleteQuery:(i,j)=>{},
  deleteGroupQuery : (i)=>{},
  updateQuery : (i,j,property,value)=>{},
  updateQueryString : ()=>{},
  toggleConjuction : (i)=>{},
  qn:1,
  queryString:'',
});



export default (props) => {
  const [Queries,setQueries]= useState([
        {
            conjuction : true,
            queries : [
                {
                    Field : '',
                    Condition : '',
                    Criteria : ''
                }
            ]
        }
    ])

  const [qn,setQn] = useState(1);
  const [queryString,setQueryString] = useState('')


  const deleteQuery = (i,j)=>{
        let nqr = [...Queries]
        nqr[i].queries.splice(j,1);
        setQueries(nqr)
  }


  const addQuery = (i) => {
        let nqr = [...Queries]
        nqr[i].queries.push({Field : '', Condition : '', Criteria : ''})
        setQueries(nqr)
  }

  const addGroupQuery = () =>{
        let nqr = [...Queries]
        nqr.push({conjuction : true , queries : [{ Field : '', Condition : '', Criteria : ''}]})
        setQueries(nqr)
  }

  const deleteGroupQuery = (i) => {
        if(i==0) return
        let nqr = [...Queries]
        nqr.splice(i,1);
        setQueries(nqr)
  }

  const getSingleQueryString = (q) =>{
        let str = ''
        let qs = []
        for(let item of q.queries){
            let temp = ``;
            if(item.Field!='') temp+=`"(field.${item.Field})`
            if(item.Condition!='') temp+=`${ops[item.Condition]}`
            if(item.Criteria!='') temp+=`\\"${item.Criteria}"\\"`
            if(temp!='') qs.push(temp);
        }
        if(q.conjuction) str = qs.join(' && ')
        else str=qs.join(' || ')

        return str;
  }

  const updateQueryString = ()=>{
        let q = Queries[0];
        if(Queries.length===1) setQueryString(getSingleQueryString(Queries[0]));
        else{
            let str = `{ `;
            for(let i = 0;i<Queries.length;i++){
                str += `q${i+1} : ${getSingleQueryString(Queries[i])}`
            }
            str+=` }`
            setQueryString(str);
        }
        
  }


  const updateQuery = (i,j,property,value) =>{
        let nq = [...Queries]
        nq[i].queries[j][property]=value;
        setQueries(nq);
  }

  const toggleConjuction = (i)=>{
        let nqr = [...Queries]
        nqr[i].conjuction=!nqr[i].conjuction
        setQueries(nqr)
        
  }


  const ctxValue = {
    Queries:Queries,
    addQuery:addQuery,
    addGroupQuery : addGroupQuery,
    deleteQuery:deleteQuery,
    deleteGroupQuery : deleteGroupQuery,
    updateQuery : updateQuery,
    updateQueryString : updateQueryString,
    toggleConjuction : toggleConjuction,
    qn:qn,
    queryString:queryString
  };


  return (
    <QueryContext.Provider value={ctxValue}>
      {props.children}
    </QueryContext.Provider>
  );
};
