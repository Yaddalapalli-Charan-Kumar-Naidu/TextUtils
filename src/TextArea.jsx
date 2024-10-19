import { useState } from "react"
export default function TextArea(props) {
    const [text,setText]=useState("");
    // const [words,setWords]=useState(text.split(" ").length);
    // const[characters,setCharacters]=useState(text.length);
    const handleTextChange=(event)=>{
        let val=event.target.value;
        setText(val);
        // setWords(val.split(" ").length);
        // setCharacters(val.length);
    }
    const convertUppercase=()=>{
        if(text!==""){
            setText(text.toUpperCase());
            props.setAlert("text changed to Uppercase letters");
        }
        else{
            alert("enter some text");
        }
        
    }
    const convertLowercase=()=>{
        
        if(text!==""){
            setText(text.toLowerCase());
            props.setAlert("text changed to Lowercase letters");
        }
        else{
            alert("enter some text");
        }
        
    }
    const clearText=()=>{
        if(text!==""){
            setText("");
            props.setAlert("text cleared successfully");
        }
    }
    const removeExtraSpaces=()=>{
        let t=text.split(" ");
        console.log(t); 
        let newText=t.filter((words)=>words!=="");
        console.log(newText.join(" "));
        setText(newText.join(" "));
        props.setAlert("successfully removed extra spaces");
    };
  return (
    <div className="box" style={props.styles}>
    <div className="container">
        {/* <form> */}
        <div className="mb-3">
            <h1><label htmlFor="textbox" className="form-label">textarea</label></h1>
            <textarea className="form-control" id="textbox" rows="8" value={text} onChange={handleTextChange} style={{backgroundColor:props.styles.backgroundColor==="#222222"?"grey":"white",color:props.styles.backgroundColor==="#222222"?"white":"black"}}></textarea>
        </div>
        <button onClick={convertUppercase}>Uppercase</button>
        <button onClick={convertLowercase} className="mx-3">LowerCase</button>
        <button onClick={clearText} className="mx-3">clear text</button>
        <button onClick={removeExtraSpaces} className="mx-3">remove extra spaces</button>

        {/* </form> */}
    </div>
    <div className="container my-3">
        <h1>Text summary</h1>
        <p>Your Text has {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>

    </div>
    </div>
  )
}
