import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { TextField } from "@mui/material";
import sendIcon from './send_icon.png'
import './ChatBot.css';
import { useState, useEffect } from "react";

function ChatBot() {

    const [data , setData] = useState([]);
    const [promp , setPromp] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(promp);
        fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: promp
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.response);
            })
    }





    return (
        <>
            <DashboardLayout>
                <DashboardNavbar />
                <div className="main">
                    
                    <div className="main-container">
                        <div className="main-top">
                            <p>{data}</p>
                        </div>
                        <div className="main-bottom">
                            <div className="search-box">
                                <input type="text" placeholder="Enter a Prompt here.." value={promp} onChange={(e)=>setPromp(e.target.value)}/>
                                <div>
                                    {/* <img src={assets.gallery_icon} alt="" /> */}
                                    {/* <img src={assets.mic_icon} alt="" /> */}
                                    <img src={sendIcon}   onClick={submitHandler}/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default ChatBot;