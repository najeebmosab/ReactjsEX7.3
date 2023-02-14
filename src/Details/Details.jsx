





import { useState } from "react";



export function Details(props) {
  console.log(props)
  // const [flag,setflag]=useState(props.flags);
  

  function flagHandler(){
    // console.log(flag);
    // setflag(!flag)
    // console.log(flag);
    props.onFlag(!props.flags);
    // props.data(props.data);
    // console.log("details",flag)

  }

  return <div>
    <p>{props.data.firstName}</p>
    <p>{props.data.lastName}</p>
    <p>{props.data.Age}</p>
    <p>{props.data.FreeText}</p>
    <div>
      <button onClick={flagHandler} >back</button>
      <button onClick={() => alert("saved")}>save</button>
    </div>
  </div>


}