import React, {useState} from 'react'

const Chat = () => {

    const [chat, setChat] = useState([]);
    const chatInput = (e) => {
        if(!e.target.value.trim()) return;
        if(e.code === 'Enter'){
        console.log(e.target.value);
        setChat([...chat, e.target.value]);
        e.target.value=" ";
        console.log(chat);
        }
    }
  return (
    <div>
     <div className='container'>
        <p className='text-success text-center my-3 display-6 fw-bold'>Chat Section</p>
        <div className='card'>
            <div className='card-body bg-light mb-5' style={{height: '70vh', overflow:'auto'}} >
            <ul className='list-group'>
                {chat.map( (n) => {
                    return <li className='list-group-item border shadow bg-success text-white border-2 rounded-pill py-1 pb-0 m-1'>
                        <p className='fst-italic'> {n} </p>
                    </li>
                })}
            </ul>
            </div>
            <div className='card-footer fixed-bottom bg-light'>
            <div className='d-flex'>
                <input className='form-control shadow-lg flex-grow-1 border border-success' placeholder='Enter your text here'  onKeyDown={chatInput}></input>
                <button onClick={chatInput} className='btn btn-success btn-sm rounded mx-4 px-3' >Enter</button>
            </div>
            </div>
        </div>
     </div> 
    </div>
  )
}

export default Chat
