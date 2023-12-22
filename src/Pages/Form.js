
import Input from "../Elements/FormElement/Input"
import { VALIDATOR_REQUIRE,VALIDATOR_EMAIL,VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH,VALIDATOR_SRM_EMAIL,VALIDATOR_REG_NO, VALIDATOR_MOBILE } from "../utls/validators"
import "./Form.css"
import { useForm } from "../hooks/form-hook.js"
import Button  from "../Elements/FormElement/Button.js"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateUser } from "../reducers/userSlice.js"
import Loading from "../Elements/FormElement/Loading.js"




const Form = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false);
    const [formState,inputHandler]=useForm( {
        email: {
          value:'',
          isValid: false
        },
        name: {
          value:'',
          isValid: false
        },
        mail_id: {
          value:'',
          isValid: false
        },
        reg_no:{
          value:null,
          isValid:false
        },
        section:{
          value:null,
          isValid:false
        },
        fa_name:{
          value:null,
          isValid:false
        },
        fa_num:{
          value:null,
          isValid:false
        },
        course:{
          value:null,
          isValid:false
        },
        dep_name:{
          value:null,
          isValid:false
        },
        mobile:{
          value:null,
          isValid:false
        }
      },false)


 const submitHandler = async(event) => {
    event.preventDefault();
    setLoading(true);

    var Token = Math.floor(1000 + Math.random() * 9000);
   
        try{
        const data = {
            "Email":formState.inputs.email.value,
            "Name":formState.inputs.name.value,
            "SRM_Mail_Id":formState.inputs.mail_id.value,
            "Registration_Number":formState.inputs.reg_no.value,
            "Class_Section":formState.inputs.section.value,
            "FA_Name":formState.inputs.fa_name.value,
            "FA_Mobile_No":formState.inputs.fa_num.value,
            "Course/Branch":formState.inputs.course.value,
            "Department_Name":formState.inputs.dep_name.value,
            "Phone_No":formState.inputs.fa_num.value,
            "Token":Token
           }

           const getRes = await axios.get(`https://sheet.best/api/sheets/f82fa8d0-9294-46e5-800f-9d5037701a04/SRM_Mail_Id/${formState.inputs.mail_id.value}`)

           if (getRes.data.length === 0) {
             const res= await axios.post("https://sheet.best/api/sheets/f82fa8d0-9294-46e5-800f-9d5037701a04",data)
             if(res.status === 200){
              const payload={
                name:formState.inputs.name.value,
                mail_id:formState.inputs.mail_id.value,
                reg_no:formState.inputs.reg_no.value,
                Token:Token
              }
              dispatch(updateUser(payload))
              setLoading(false);
             
              navigate("/success")
             }  
           }else{
           
            setLoading(false);
            navigate("/success")

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
              <h2>Register Hear</h2>
               <Input id="email"element="input" type="text" label="Email" errorText="Please enter the valied Email" validate={[VALIDATOR_EMAIL()]} onInput={inputHandler}  />
               <Input id="name"element="input" type="text" label="Name" errorText="Please enter the Full Name " validate={[VALIDATOR_MINLENGTH(4),VALIDATOR_MAXLENGTH(25)]} onInput={inputHandler}  />
               <Input id="mail_id"element="input" type="text" label="SRM Mail Id" errorText="Please Enter College mail " validate={[VALIDATOR_REQUIRE(),VALIDATOR_SRM_EMAIL()]} onInput={inputHandler}  />
               <Input id="reg_no"element="input" type="text" label="Registration Number" errorText="Please enter the valied Registration Number" validate={[VALIDATOR_REQUIRE(),VALIDATOR_REG_NO(),VALIDATOR_MINLENGTH(14),VALIDATOR_MAXLENGTH(17)]} onInput={inputHandler}  />
               <Input id="section"element="input" type="text" label="Class/Section" errorText="Fill the Section" validate={[VALIDATOR_REQUIRE(),]} onInput={inputHandler}  />
               <Input id="fa_name"element="input" type="text" label="FA Name" errorText="Please enter the Full name" validate={[VALIDATOR_REQUIRE(),]} onInput={inputHandler}  />
               <Input id="fa_num"element="input" type="text" label="FA Mobile No" errorText="Please enter the valied Mobile No" validate={[VALIDATOR_REQUIRE(),VALIDATOR_MOBILE()]} onInput={inputHandler}  />
               <Input id="course"element="input" type="text" label="Course/Branch" errorText="Fill the course " validate={[VALIDATOR_REQUIRE()]} onInput={inputHandler}  />
               <Input id="dep_name"element="input" type="text" label="Department Name" errorText=" Fill Department Name " validate={[VALIDATOR_REQUIRE()]} onInput={inputHandler}  />
               <Input id="mobile"element="input" type="text" label="Phone No" errorText="Please enter the valied Mobile No" validate={[VALIDATOR_REQUIRE(),VALIDATOR_MOBILE()]} onInput={inputHandler}  />
               <Button type="submit" disabled={!formState.isValid}>Submit</Button>
            
        </form>
        </>)
        }
    

}

export default Form;
