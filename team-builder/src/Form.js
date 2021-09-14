import React , { useState } from 'react';




  



export default function MemberForm(props){

    const {value, update, submit, memebers} = props;

    const [error, setError] = useState("")

    const onChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        
        update(e);
    }


    const onSubmit = e =>{
        e.preventDefault();
        submit(e);
    }


    if(!onChange.name){
        setError("Please enter a name!")
    }else if(!onChange.email){
        setError("Please enter an email!")
    }else if(!onChange.role){
        setError("Please set a role!")
    }else{
        setError("")
    }
  
    





    return (
        <form  className='form container' onSubmit={onSubmit}>
            <div>
                <h1>Memeber's List</h1>
                {memebers.map((mem, index) => (
                <div key={index}>
                    {mem.name}'s email is {mem.email}. They are a {mem.role}.
                </div>
                ))}

                
                    <input
                    type="text"
                    value={value.name}
                    name="name"
                    placeholder="Enter your name!"
                    onChange={onChange}
                    />
                    <input
                    type="email"
                    value={value.email}
                    name="email"
                    placeholder="Enter your email!"
                    onChange={onChange}
                    />
                    <select value={value.role} name="role" onChange={onChange}>
                        <option value=''>-- Select Role --</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Guest">Guest</option>
                    </select>
                    
                    <input type="submit" value="submit" />
                </div>
            </form>
         


    )



}