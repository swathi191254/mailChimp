import axios from "axios";
import "./sign.css";
import {useState} from "react";
import styled from "styled-components";
import PasswordTab from "./PasswordTab";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {isLoading,isLogin,isError} from "../redux/login/actions";
import {  Navigate } from "react-router-dom";


export default function Login(){
    var pattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/;
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false)
    const [user, setUser] = useState(false);
    const [button, setButton] = useState(false);
    const [detail, setDetail] = useState({
        email:"",
        username:"",
        password:""
    });
    
    // let [formData,setFormData] = useState({});
    // const { isloading, signup, iserror } = useSelector((state)=>({
    //     isloading: state.signup.isloading,
    //     signup: state.signup.signup,
    //     iserror: state.signup.iserror
    // }));
    // const dispatch = useDispatch();
    // const handlechange = (e)=>{
    //     const {name,value} = e.target;

    //     formData[name] = value;
    //     setFormData({...formData});
    //     console.log(formData)

    // }
    

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log("aaaaaa")
    //     dispatch(isLoading());
    //     console.log(isloading);
    //     fetch("https://instagram-backend-dipu1-app.herokuapp.com/signup",{
            
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
                
                
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
            
    //         if(data.status==="failed"){
    //             dispatch(isError(true));
    //             console.log("d",data);
    //         }else{
    //              dispatch(isLogin(true));
                
                
    //         }
    //     })
    //     .catch(()=>{
    //         dispatch(isError(true));
    //     })

    // }
    
    const Button = styled.button`
        height:4.5rem;
        width: 13.7rem;
        background-color:${button?"#007C89":"white"};
        border: 1px solid ${button?"#007C89":"#BDBBB9"};
        color: ${button?"#FFFFFF":"#BDBBB9"};
        font-size: 1.6rem;
        letter-spacing: -3%;
        font-weight: 500;
        cursor: pointer;
    `;

    const CheckBox = styled.input`
        height: 2.2rem;
        width: 2.3rem;
        border: 1px solid #BDBBB9;
        border-radius: 0.2rem;
        margin: 0rem 1rem 0rem 4.3rem;
    `;

    const handleEmail= (e)=>{
        if(e.target.value.match(pattern)|| e.target.value===""){
            setEmail(false);
            e.target.style.outlineColor = '#007C89 !important';
        } else {
            setEmail(true);
            e.target.style.outlineColor = '#F25F25 !important';
        }
        setDetail({...detail, [e.target.name]:e.target.value})
    }

    const handleUser = (e)=>{
        setDetail({...detail, [e.target.name]:e.target.value})
    }

    const submitData = (e)=>{
        e.preventDefault();
        try{
            axios.post("http://localhost:3001/create", detail);
        } catch(err){
            console.log(err);
        }
        localStorage.setItem("user",JSON.stringify(detail))
    }

    return (
        <div className='signup'>
            <img src="https://login.mailchimp.com/release/1.1.1b60850200fc127a64982b77f29f3065f9867d8f2/images/brand_assets/logos/mc-freddie-dark.svg" alt="" />
            <div className="signupComponent">
                <h3 className="h3">Welcome to Mailchimp</h3>
                <div className="formS">
                    <div>
                        <p>Email</p>
                        <input type="email" name="email" value={detail.email} onChange={handleEmail} />
                        <br />
                        {email?<span>Please enter a valid email</span>:<></>}
                    </div>
                    <PasswordTab password={password} setPassword={setPassword} setButton={setButton} detail={detail} setDetail={setDetail}/>
                </div>
                <Button className="LoginBtn" onClick={submitData} type="submit"><Link to="/"  >Login</Link></Button>
            </div>
            
        </div>
    )
}