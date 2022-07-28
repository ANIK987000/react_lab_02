import axios from "axios";
import { useState } from "react";

const CreateNews=()=>{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[type,setType]=useState("");
    const[date,setDate]=useState("");
    const[msg,setMsg]=useState("");
    const[err,setErr]=useState("");

  
    const handleForm=(event)=>
    {
        event.preventDefault();
        var data={title:title,description:description,type:type,date:date}
        axios.post("http://localhost:8000/api/news/create",data)
        .then((rsp)=>{
            setMsg(rsp.data.msg);
            setErr(rsp.data);
            //debugger;
        },(er)=>{
            if(er.response.status==422)
            {
                setErr(err.response.data);
            }
            else
            {
                setMsg("Server Error Occured");
            }
            //debugger;
        })
    }


    return(
        <form onSubmit={handleForm}>
            <label>Title:</label><br></br>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input><br></br>
            <span>{err.title? err.title[0]:''}</span><br></br>

            <label>Description:</label><br></br>
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}></input><br></br>
            <span>{err.description? err.description[0]:''}</span><br></br>

            <label>Type:</label><br></br>
            <input type="text" value={type} onChange={(e)=>{setType(e.target.value)}}></input><br></br>
            <span>{err.type? err.type[0]:''}</span><br></br>

            <label>Date:</label><br></br>
            <input type="text" value={date} onChange={(e)=>{setDate(e.target.value)}}></input><br></br>
            <span>{err.date? err.date[0]:''}</span><br></br>

            <input type="Submit"></input><br></br>
            {msg}
        </form>

    )
}
export default CreateNews;