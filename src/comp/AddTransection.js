import React, {useState} from 'react'

const AddTransection = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label >Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransection
