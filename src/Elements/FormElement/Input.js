

import "./Input.css"
import { useReducer,useEffect } from "react";
import { validate } from "../../utls/validators";

const Input = props =>{

  function inputReducer(state,action) {
    switch(action.type){
      case 'CHANGE':
        return{
        ...state,
          value: action.val,
          isValid:validate(action.val,action.validate),
        };
      case "TOUCH":
        return{
        ...state,
          isTouched:true
        }  
      default:
        return state;

    }

  }
  const [initialvalue,dispatch] = useReducer(inputReducer,{value:"",isValid:false,isTouched:false});

  const {id,onInput} = props;//taking oninput
  const {value,isValid} = initialvalue;
  useEffect(()=>{
    onInput(id,value,isValid); //just calling dispatch of privous file by passing dispatch into props
    // console.log(id,isValid);
  },[id,value,onInput,isValid])

  function onChange(event){
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validate: props.validate
    });
  }

  function onBlur(event){
    dispatch(
      {
        type :"TOUCH"
      }
    )
  }

  const element = props.element === "input" ? (
    <input  className="input" id={props.id} type={props.type}  onChange={onChange} required autocomplete="off" onBlur={onBlur}/>
  ) : (
    <textarea id={props.id} rows={props.rows || 3} onChange={onChange} onBlur={onBlur}/>
  )

  return(
    <div className={`form-control ${!initialvalue.isValid && initialvalue.isTouched &&"form-control--invalid"}`}>
      {element}
      <label className="label"for={props.id}>{props.label}</label>
      {!initialvalue.isValid && initialvalue.isTouched &&<p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
// placeholder={props.placeholder}