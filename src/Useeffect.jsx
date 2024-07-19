import axios from "axios";
import react,{useState,useEffect} from "react";
const API="http://jsonplaceholder.typicode.com/posts";


function Useeffect() {
    const [api,setapi]=useState("");
    useEffect(()=> {
        axios.get(`${API}`).then((response)=> {
            console.log(response.data,"output is here");
            setapi(response.data);

        });
    }, []);
    function create() {
        axios.post (API, {
            title:"vijay ghosh",
            body: "newly created"
        })
        .then (response =>{
            setapi(response.data);
        });
    }  
    function update() {
        axios.put (API, {
           title:"vijay",
            body: "updated"
        });
    };
    function del() {
        axios.delete (API, {
        alert: ("deleted")
        });
    }

  return (

    <div>
       <h1> axios example</h1>
       <h1>{api.title}</h1>
       <h1>{api.body}</h1>
       <button onClick={create}> create</button><br />
       <button onClick={update}> upadate</button><br />
       <button onClick={del}> delete</button><br />

        </div>
  );
}

export default Useeffect