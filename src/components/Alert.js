import React from "react";

export default function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    //  it is used prevent shifting of alert so set height
    <div style={{height:'50px'}}>                                    
    {props.alert && 
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
       
      </div>}
      </div>
    
  );
}

//if props.alert is present then the afetr && will be executed otherwise not
