import {useState} from "react";
import  "./sign.css";

export default function PasswordTab({password, setPassword, setButton, detail,setDetail}){
    const [low, setLow] = useState(true);
    const [upper, setUpper] = useState(true);
    const [num, setNum] = useState(true);
    const [spe, setSep] = useState(true);
    const [len, setLen] = useState(true);

    const handlePasswordChange = (e)=>{
        const data = e.target.value;
        const lowerCase = /[a-z]/g;
        const upperCase = /[A-Z]/g;
        const numbers = /[0-9]/g;
        const special = /[@#$%^&+=]/g;

        if(data.match(lowerCase)) {
            setLow(false)
        } else {
            setLow(true)
        }
        if(data.match(upperCase)) {
            setUpper(false)
        } else {
            setUpper(true)
        }
        if(data.match(numbers)) {
            setNum(false)
        } else {
            setNum(true)
        }
        if(data.match(special)) {
            setSep(false)
        } else {
            setSep(true)
        }
        if(data.length >=7){
            setLen(false)
        }else{
            setLen(true)
        }
        if(!low&&!upper&&!num&&!spe&&!len){
            e.target.style.outlineColor = '#007C89';
            setPassword(false)
            setButton(true);
        } else {
            e.target.style.outlineColor = '#F25F25';
            setPassword(true);
            setButton(false);
        }
        setDetail({...detail, [e.target.name]:e.target.value})
    }

    return (
        <>
            <div>
                <p>Password</p>
                <input type="password" name="password" value={detail.password} onChange={handlePasswordChange}/>
                <br />
                
            </div>
            
        </>
    )
}