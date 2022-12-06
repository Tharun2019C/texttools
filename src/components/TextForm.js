import React, { useState } from "react";

export default function TextForm() {
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleAfterClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div>
        <h1 className="mx-10 my-5 font-bold font-mono">
          Enter Your Text Here:
        </h1>
        <textarea
          class="textarea textarea-accent sm:container mx-10 my-2 "
          value={text}
          rows="5"
          onChange={handleOnChange}
        ></textarea>
        <div />
        <div className="container">
          <button
            className="btn btn-ghost normal-case text-xl mx-10 my-2 "
            onClick={handleOnClick}
          >
            Change to Upper CASE
          </button>
          <button
            className="btn btn-ghost normal-case text-xl mx-10 my-2 "
            onClick={handleLoClick}
          >
            Change to Lower CASE
          </button>
          <button
            className="btn btn-ghost normal-case text-xl mx-10 my-2 "
            onClick={handleAfterClick}
          >
            Clear Text
          </button>
          <div className="stats shadow mx-10">
            <div className="stat">
              <div className="stat-title">Your Text Summary</div>
              <div className="stat-value">{text.length}</div>
              <div className="stat-desc">
                characters and {text.split(" ").length} words
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      <textarea className="textarea sm:container textarea-bordered mx-10 my-2" placeholder="Preview" rows={5} value={text} ></textarea>
      </div>

      <h1  className="my-10">
       .
      </h1>
    
    </>
  );
}
