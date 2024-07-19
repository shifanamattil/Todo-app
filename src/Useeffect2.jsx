import React,{useEffect,useState} from "react";

function Useeffect2() {
    const[data,setData]=useState("[]");
    const[loading,setLoading]=useState(true);
    useEffect(()=> {
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        });
    },[]);        
        
        if(loading){
            return <p> Loading...</p>
        }

  return (
    <div>
    <h2>Posts</h2>
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
  );
}
export default Useeffect2




   