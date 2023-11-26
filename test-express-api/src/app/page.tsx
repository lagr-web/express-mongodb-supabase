//src/app/page.tsx

"use client";

import Image from 'next/image'
import { FormEvent, useRef, useState, } from 'react';

export default function Home() {

  const [name, setName] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [strength, setStrength] = useState<number | string>(0);
  const [lives, setLives] = useState<number | string>(0);
  const [text, setText] = useState<string>('');
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const submitData = { name, img, strength, lives, text };

    try {
      const res = await fetch("http://localhost:3001/mymongoinsert", {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        console.log("okk")
        //setOk("Dine data er opdateret");
        //props.mFunc(true);
      } else {
        console.log("not ok")
      }
      //res.ok ? console.log("ok") : console.log("not ok")
    } catch (error) {
      console.log(error)
    }

  }


  return (

    <>

      <div className="container mx-auto p-5 my-10 w-96 shadow-md" >

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>name</label>
            <input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="mb-4">
            <label>img</label>
            <input
              type="text"
              name="img"
              onChange={(e) => setImg(e.target.value)}
              value={img}
            />
          </div>

          <div className="mb-4">
            <label>Strength</label>
            <input
              type="number"
              name="strength"
              onChange={(e) => setStrength(e.target.value)}
              value={strength}
            />
          </div>

          <div className="mb-4">
            <label>Lives</label>
            <input
              type="number"
              name="lives"
              onChange={(e) => setLives(e.target.value)}
              value={lives}
            />
          </div>

          <div className="mb-6">
            <label>Comment</label>
            <input
              type="text"
              name="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>

          <div className="flex justify-end">
            <button type="submit"
              className="
    bg-blue-500 hover:bg-blue-700 
    text-white 
    font-bold 
    ml-2
    py-2 
    px-4 
    rounded" >Send</button>
          </div>
        </form>

      </div >
    </>

  )

}
