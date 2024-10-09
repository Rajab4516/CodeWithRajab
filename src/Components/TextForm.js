import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyText = () =>{
    navigator.clipboard.writeText(text);
    alert("Text Copied Successfully");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="text-form-heading-container">
        <h1>{props.heading}</h1>
      </div>
      <div className="text-form-main-container">
        <div className="textarea-container">
          <textarea
            name=""
            id=""
            cols="150"
            rows="15"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <div className="buttons-container">
        <div className="buttons">
          <button className="btn btn-dark btn-sm btn-hover" onClick={handleUpperCase}>Convert To UpperCase</button>
          <button className="btn btn-primary btn-sm btn-hover" onClick={handleLowerCase}>Convert To LowerCase</button>
          <button className="btn btn-danger btn-sm btn-hover" onClick={handleClearText}>Clear Text</button>
        </div>
      </div>
      <div className="container mt-3 mb-3">
        <table class="table table-info">
          <thead>
            <tr>
              <th scope="col">Words</th>
              <th scope="col">Characters</th>
              <th scope="col">Spaces</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{text.split(" ").length}</td>
              <td>{text.length}</td>
              <td>{text.split(" ").length - 1}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container bg-danger p-2 mb-5">
        <h5 className="bg-light text-dark p-2">Text Preview</h5>
        <p className="text-light m-2">{text}</p>
        <button className="btn btn-sm btn-dark text-light" onClick={handleCopyText}>Copy Text</button>
      </div>

      <div className="container bg-primary p-2 mb-5">
        <h5 className="bg-light text-dark p-2">Text Summary</h5>
        <p className="text-light m-2">{0.008 * text.split("").length} Minutes to Read</p>
      </div>
    </>
  );
}

export default TextForm;
