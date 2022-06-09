import React, { useState, useEffect } from 'react'

const CounterUseEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Chats (${count})`
  })


  return (
    <>
      <section className='py-5'>
        <div className="container">
          <h1 className='text-center'>Use Effect Hook (Change Title)</h1>
          <h2 className='text-center mb-5' style={{ fontSize: "72px" }}>{count}</h2>
          <div className="text-center">
            <button onClick={() => { setCount(count > 0 ? count - 1 : count) }} type="button" className="btn btn-lg btn-outline-danger shadow-none mx-1" disabled={count <= 0}>DECR</button>
            <button onClick={() => { setCount(count < 10 ? count + 1 : count) }} type="button" className="btn btn-lg btn-outline-success shadow-none mx-1" disabled={count >= 10}>INCR</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CounterUseEffect