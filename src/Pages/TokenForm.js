
import Input from "../Elements/FormElement/Input"
import { VALIDATOR_REQUIRE,VALIDATOR_SRM_EMAIL } from "../utls/validators"
import "./tokenForm.css"
import { useForm } from "../hooks/form-hook.js"
import Button  from "../Elements/FormElement/Button.js"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateUser } from "../reducers/userSlice.js"
import Loading from "../Elements/FormElement/Loading.js"


const TokenForm = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false);
    const [formState,inputHandler]=useForm( {
        
        mail_id: {
          value:'',
          isValid: false
        }
        
      },false)


 const submitHandler = async(event) => {
    event.preventDefault();
    
    setLoading(true);
        try{
        
           const getRes = await axios.get(`https://sheet.best/api/sheets/f82fa8d0-9294-46e5-800f-9d5037701a04/SRM_Mail_Id/${formState.inputs.mail_id.value}`)

           if (getRes.data.length !== 0) {
            console.log(getRes);
            const payload={
                name:getRes.data[0].Name,
                mail_id:getRes.data[0].SRM_Mail_Id,
                reg_no:getRes.data[0].Registration_Number,
                Token:getRes.data[0].Token
              }
              console.log(payload);
              dispatch(updateUser(payload))

          
              setLoading(false);
             
              navigate("/success")
            
           }else{
           
            setLoading(false);
            navigate("/")

           }
          
           
           
          
          
        }catch(err){
            console.log(err);

        }

      }

   

        if(isLoading){
            return <Loading/>
        }else{
            return(

              <>
              
          
              <form className="place-form" onSubmit={submitHandler}>
              <h2>verify Here</h2>
               <Input id="mail_id"element="input" type="text" label="SRM Mail Id" errorText="Please Enter College mail " validate={[VALIDATOR_REQUIRE(),VALIDATOR_SRM_EMAIL()]} onInput={inputHandler}  />
               <Button type="submit" disabled={!formState.isValid}>Submit</Button>    
        </form>
        </>)
        }
    

}

export default TokenForm;
