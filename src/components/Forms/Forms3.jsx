import React, { useState } from 'react'


const Forms1 = () => {

    const [id, setId] = useState("");
    const [cname, setCname] = useState("");
    const [comp, setComp] = useState("");
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isPending, setisPending] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();
        const pms = { id, cname, comp, num, email };
        setisPending(true);
        fetch('http://localhost:4000/client', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pms)
        }).then(()=>{
            setId("");
            setCname("");
            setComp("");
            setNum("");
            setEmail("");
            setMsg("Client Added Successfully");
            console.log("Client Added Successfully ")
            setisPending(false);
        }).then(()=>{
            setTimeout(()=>{
                setMsg("");
            },1200)
        })
    }

    

    return (
        <div className='main'>
            <form  onSubmit={handleSubmit} className='proforms'>
                <h1>Add New Member</h1>
                <label>Client ID</label><br></br>
                <input
                    required
                    type='text'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                /><br></br>
                <label>Client Name</label><br></br>
                <input
                    required
                    type='text'
                    value={cname}
                    name="client_name"
                    onChange={(e)=>setCname(e.target.value)}
                /><br></br>
                <label>Company Name</label><br></br>
                <input
                    required
                    type='text'
                    value={comp}
                    onChange={(e)=>setComp(e.target.value)}
                /><br></br>
                <label>Mobile Number</label><br></br>
                <input
                    required
                    type='text'
                    value={num}
                    maxLength='10'
                    onChange={(e)=>setNum(e.target.value)}
                /><br></br>
                <label>Email ID</label><br></br>
                <input
                    required
                    type='email'
                    value={email}
                    name="to_email"
                    onChange={(e)=>setEmail(e.target.value)}
                /><br></br>
                <div className='buttonshadow'>
                    {!isPending && <button type='submit'>Add Client</button>}
                    {isPending && <button disabled>Add Client...</button>}
                </div>

                <div className='msgg'>{msg ? <p>{msg}</p> : null}</div>
            </form>
        
        </div>
    )
}

export default Forms1
