import React from 'react'

function TextForm(props) {
  return (
    <>
      <div className="text-form-main-container">
                <div className="text-form-heading-container">
                    <h1>{props.heading}</h1>
                </div>
            <div className="container">
                <textarea name="" id="" cols="150" rows="15"></textarea>
                <button>Convert To UpperCase</button>
            </div>
        </div>
    </>
  )
}

export default TextForm
