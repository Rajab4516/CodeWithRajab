import React, {useState} from 'react';

function TextForm(props) {
  const [text, setText] = useState('Sample Text');

  const handleUpperCase = () =>{
    let newText = text.toLocaleUpperCase();
    setText(newText);
  }

  const handleLowerCase = ()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
      <div className="text-form-heading-container">
        <h1>{props.heading}</h1>
      </div>
      <div className="text-form-main-container">
            <div className="container">
                <textarea name="" id="" cols="150" rows="15" value={text} onChange={handleOnChange}></textarea>
            </div>
      </div>
      <div className="buttons-container">
        <div className="buttons">
          <button onClick={handleUpperCase}>Convert To UpperCase</button>
          <button onClick={handleLowerCase}>Convert To LowerCase</button>
        </div>
      </div>
    </>
  )
}

export default TextForm
