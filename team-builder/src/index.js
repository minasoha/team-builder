import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MemberForm from './Form';

const memList = [
  {name: 'Mina', email:'minasoha@yahoo.com', role:'Student'},
  {name: 'Jeff', email:'asd@asd.com', role:'Student'},
  {name: 'Dan', email:'dan@man.com', role:'Instructor'},
  {name: 'John', email:'john@man.com', role:'Team Lead'} 
]

const initialFromValue = { name: "", email: "", role: ""}

function MembersList () {
  const [formValues, setFormVales] = useState(initialFromValue);
  const [people,setPeople] = useState(memList);
  
  
  const change = e =>{
    const { name , value} = e.target;

    setFormVales({...formValues, [name]: value});

  }
  
  const submit = e =>{

    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setPeople(people.concat(newPerson));
    setFormVales(initialFromValue);
    
  }

  


  return (

    <div className="container">
      <MemberForm 

        update={change}
        submit={submit}
        memebers={people}
        value={formValues}
      />

    </div>
  )






  
}






ReactDOM.render(
  <MembersList>
    <App />
  </MembersList>
  ,
  document.getElementById('root')
);

reportWebVitals();



