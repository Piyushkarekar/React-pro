import React, { useState } from 'react'

export const App = () => {
  const [num, setNum] = useState(0)

  const changeNumber = (value) => {
    setNum(num + value)
  }

  const reset = () => setNum(0)

  return (
    <div className="container">
      <style>{`
      body{
        margin:0;
        padding:0;
      }
        .container{
          height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          background: linear-gradient(135deg, #141e30, #243b55);
          font-family: Arial, sans-serif;
        }

        .counter-box{
          background:white;
          padding:40px;
          border-radius:20px;
          box-shadow:0 10px 25px rgba(0,0,0,0.2);
          text-align:center;
          width:320px;
        }

        .number{
          font-size:60px;
          font-weight:bold;
          margin-bottom:20px;
          color:#333;
        }

        .btn-container{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          justify-content:center;
        }

        button{
          padding:10px 16px;
          border:none;
          border-radius:10px;
          cursor:pointer;
          font-size:14px;
          font-weight:600;
          background:#667eea;
          color:white;
          transition:0.2s;
        }

        button:hover{
          transform:scale(1.05);
          background:#5a67d8;
        }

        .reset{
          background:#ff4757;
        }

        .reset:hover{
          background:#e84118;
        }
      `}</style>

      <div className="counter-box">
        <h1 className="number">{num}</h1>

        <div className="btn-container">
          <button onClick={() => changeNumber(1)}>Increase</button>
          <button onClick={() => changeNumber(-1)}>Decrease</button>
          <button className="reset" onClick={reset}>Reset</button>
          <button onClick={() => changeNumber(5)}>+5</button>
          <button onClick={() => changeNumber(-5)}>-5</button>
          <button onClick={() => changeNumber(10)}>+10</button>
          <button onClick={() => changeNumber(-10)}>-10</button>
        </div>
      </div>
    </div>
  )
}