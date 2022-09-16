


import React, {useState} from 'react';

export default function TextForm() {
  const handle = () => {
    setText("Clciked");
  }
    const [text, setText] = useState("hi, Click Here");   
  return (
    <div>
    <h1 >{text}</h1>
    <button onClick={handle}>Click</button>
</div>
  )
}