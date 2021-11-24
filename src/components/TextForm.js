import React,{useState} from 'react'

// variable text has default value 'Enter text here' and whenever we update it we do it by using useState() function



export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log('Uppecase was clicked' + text); //we can accese the 'text' here in the function
        let newText = text.toUpperCase();
        // setText('You have clicked on handleUpClick ') //state is changing as seen in the box when we click on 'Convert to Uppercase' button
        setText(newText)
        props.showAlert("Converted to Upper Case ","Success");
    }

    const handleLoClick = ()=>{
        console.log('LowerCase was clicked' + text); //we can accese the 'text' here in the function
        let newText = text.toLowerCase();
        // setText('You have clicked on handleUpClick ') //state is changing as seen in the box when we click on 'Convert to Uppercase' button
        setText(newText)
        props.showAlert("Converted to Lower Case ","Success");
    }

    const handleClearClick = ()=>{
        console.log('Clear was clicked' + text); //we can accese the 'text' here in the function
        let newText = '';
        // setText('You have clicked on handleUpClick ') //state is changing as seen in the box when we click on 'Convert to Uppercase' button
        setText(newText)
        props.showAlert("Cleared ","Success")
    }

    // handling event here
    const handleOnChange = (event)=>{
        console.log('On Change');
        setText(event.target.value);
    }
    // const[text,setText] = useState('Enter text here'); //text is a state variable and we can update 'text' with the help of setText anywhere
    const[text,setText] = useState('');
    //'useState' helps to create a state variable
    //'Enter text here ' is shown inside the box because we have set the value=text in the textarea below
    // text = "new text";   //wrong way to correct the state
    // setText("new text");   //correct way to correct the state
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#1d0c49'}} > {/* make the heading white when dark mode is on */}
            <h1 >{props.heading}</h1>
        <div className="mb-3">
            {/* 1.'onChange' that we have given from our side  because its giving warning on console screen*/}
            {/* 2. but if we write in the box the nothing comes but "handleOnChange" is running */}
            {/* 3.now after adding setText in 'handleOnChange' when the user enter text in text area then it is text+text entered by user */}
            {/* 4.if we will not do 'handleOnChange then we will not be able to type in the text area ' */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#1d0c49'}} id="myBox" rows="8"></textarea>
        </div>
        {/* 'handleUpClick' is the name of the function that we have have given and 'onClick' tells that what function has to perform when the button is clicked */}
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Text Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#1d0c49'}}>
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
