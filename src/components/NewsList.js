import { useState } from "react";
import axios from "axios";

const NewsList=()=>{

    const[news,setNews]=useState([]);
    const LoadData=()=>{
        axios.get("http://localhost:8000/api/news/list")
        .then((rsp)=>{
            // debugger;
            setNews(rsp.data);
        },(er)=>{
            //debugger;
        })
    }
    return(
        <div>
            <button onClick={LoadData}>Show News List</button>
            <table border={3}>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
                
                    {
                      news.map((n)=>(
                            <tr>
                                <td>{n.title}</td>
                                <td>{n.description}</td>
                                <td>{n.type}</td>
                                <td>{n.date}</td>
                            </tr>
                      ))  
                    }
                   
             
            </table>
        </div>
        
    )
}
export default NewsList;