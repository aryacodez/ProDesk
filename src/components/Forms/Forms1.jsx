import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'

const Forms1 = () => {

    const [id, setId] = useState("");
    const [mname, setMname] = useState("");
    const [desg, setDesg] = useState("");
    const [projname, setProjname] = useState("");
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isPending, setisPending] = useState(false);

    const form = useRef();

    // let sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_z2awi1a', 'template_xl90pww', form.current, 'q9xVXQ0TxitheX1LQ')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    
    // };

    let handleSubmit = (e) => {
        e.preventDefault();
        const pms = { id, mname, desg, projname, num, email };
        setisPending(true);
        fetch('http://localhost:4000/colleague', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pms)
        }).then(()=>{
            setId("");
            setMname("");
            setDesg("");
            setProjname("");
            setNum("");
            setEmail("");
            setMsg("Member Added and Email Sent successfully");
            console.log("Member Added and Email Sent successfully")
            setisPending(false);
        }).then(() => {
            emailjs.sendForm('service_z2awi1a', 'template_xl90pww', form.current, 'q9xVXQ0TxitheX1LQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        })

    }
    
    return (
        <div className='main'>
            <form ref={form} onSubmit={handleSubmit} className='proforms'>
                <h1>Add New Member</h1>
                <label>Member ID</label><br></br>
                <input
                    required
                    type='text'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                /><br></br>
                <label>Member Name</label><br></br>
                <input
                    required
                    type='text'
                    value={mname}
                    name="member_name"
                    onChange={(e)=>setMname(e.target.value)}
                /><br></br>
                <label>Designation</label><br></br>
                <input
                    required
                    type='text'
                    value={desg}
                    onChange={(e)=>setDesg(e.target.value)}
                /><br></br>
                <label>Project Name</label><br></br>
                <input
                    required
                    type='text'
                    value={projname}
                    name="member_project"
                    onChange={(e)=>setProjname(e.target.value)}
                /><br></br>
                <label>Mobile Number</label><br></br>
                <input
                    required
                    type='text'
                    value={num}
                    onChange={(e)=>setNum(e.target.value)}
                /><br></br>
                <label>Email ID</label><br></br>
                <input
                    required
                    type='email'
                    value={email}
                    name="member_email"
                    onChange={(e)=>setEmail(e.target.value)}
                /><br></br>
                <div className='buttonshadow'>
                    {!isPending && <button type='submit'>Add Member</button>}
                    {isPending && <button disabled>Add Member...</button>}
                </div>

                <div className='msgg'>{msg ? <p>{msg}</p> : null}</div>
            </form>
        
        </div>
    )
}

export default Forms1