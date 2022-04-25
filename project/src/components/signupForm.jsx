import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {isLoading,isSignup,isError} from "../redux/signup/actions";
import {  Navigate } from "react-router-dom";
import styled from "styled-components";
import PasswordTab from "./PasswordTab";
import {Link} from "react-router-dom";


function SignUpForm(){
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
    let [formData,setFormData] = useState({});
    const { isloading, signup, iserror } = useSelector((state)=>({
        isloading: state.signup.isloading,
        signup: state.signup.signup,
        iserror: state.signup.iserror
    }));
    const dispatch = useDispatch();
    const handlechange = (e)=>{
        const {name,value} = e.target;

        formData[name] = value;
        setFormData({...formData});
        console.log(formData)

    }
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("aaaaaa")
        dispatch(isLoading());
        console.log(isloading);
        fetch("https://mailchimpabc.herokuapp.com/create",{
            
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                
                
            }
        })
        .then(res => res.json())
        .then(data =>{
            
            if(data.status==="failed"){
                dispatch(isError(true));
                console.log("d",data);
            }else{
                 dispatch(isSignup(true));
                
                
            }
        })
        .catch(()=>{
            dispatch(isError(true));
        })

    }
    if(signup){
        return < Navigate to={"/"} />;
    }
    
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

    return (
        // <div className="signup-box">
        //     <div className="or">
        //         <div>
        //             <hr />
        //         </div>
        //         <div>
        //             <p>OR</p>
        //         </div>
        //         <div>
        //             <hr />
        //         </div>
        //     </div>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" name="email" placeholder="Email"onChange={handlechange} />
        //         <input type="password" name="password" placeholder="Password" onChange={handlechange}/>
                  
        //         <input type="submit" value={isloading?"loading...":"Sign Up"}  ></input>
        //     </form>
        //     {iserror?<p>email or phone already exist</p>:null}
            
        //     <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        // </div>
        
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
                    <div>
                        <p>Username</p>
                        <input type="text" name="username" value={detail.username} onChange={handleUser} onClick={()=>setUsername(true)} onBlur={()=>setUsername(false)}/>
                        <br />
                        {username ? <h5 className="h5">Choose a username that contains only letters and numbers, or use your email address. This is for login only.</h5>:
                        user?<span>Another user with this username already exists. Maybe it’s your evil twin. Spooky</span>:<></>}
                    </div>
                    <PasswordTab password={password} setPassword={setPassword} setButton={setButton} detail={detail} setDetail={setDetail}/>
                   <div className="checkbox">
                    <CheckBox type="checkbox" className="box"  />
                    <p>I don't want to receive updates from Mailchimp related to marketing best practices, product and feature updates, and promotions.</p>
                    </div>
                </div>
                <Button className="signupBtn" type="submit"><Link to="/"  >Sign Up</Link></Button>
                <p>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
                <p>©2001–2021 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Cookie Preferences, Privacy, and Terms.</p>
            </div>
            
        </div>
    )
}

export default SignUpForm;