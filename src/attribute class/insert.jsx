import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
        
    }
    const handleSubmit=async()=>{
        let api="http://localhost:3000/data";
        const response=await axios.post(api,input);
        console.log(response);
        alert("data save successfully!!!")
        
    }

    return(
        <>
        <h1>INSERT YOUR DATA!!</h1>
        enter empno :<input type="text" name="empno" onChange={handleInput}/>
        <br/><br/>
        enter name :<input type="text" name="name" onChange={handleInput}/>
        <br/><br/>
        enter designation :<input type="text" name="designation" onChange={handleInput}/>
        <br/><br/>
        enter salary :<input type="text" name="salary" onChange={handleInput}/>
        <br/><br/>
        <button onClick={handleSubmit}> save!!!</button>








{/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Empno</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
        </>





    )
}
export default Insert;