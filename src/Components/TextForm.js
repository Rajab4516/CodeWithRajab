import React from 'react'

function TextForm(props) {
  return (
    <>
      <div className="text-form-heading-container">
        <h1>{props.heading}</h1>
      </div>
      <div className="text-form-main-container">
            <div className="container">
                <textarea name="" id="" cols="150" rows="15"></textarea>
            </div>
      </div>
      <div className="buttons-container">
        <div className="buttons">
          <button>Convert To UpperCase</button>
          <button>Convert To LowerCase</button>
        </div>
      </div>
    </>
  )
}

export default TextForm
