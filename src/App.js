import './App.css';
import React from 'react';
import axios from "axios"
function App() {

  const [pass, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");

const typeEmail=(e)=>{
  setEmail(e.target.value);
}
const typePass=(e)=>{
  setPass(e.target.value);
}
const submit=()=>{
  console.log({email,pass})
axios.post("https://reqres.in/api/login",{
  email:email,
  password:pass
}).then(result=>{
  console.log(result.data.token);
})

}
  return (
    <div className="App">
      <input
      type="text"
      value={email}
      placeholder="email"
      onChange={typeEmail}
      />
      <div><br/></div>
       <input
       type="password"
      value={pass}
      placeholder="password"
      onChange={typePass}
      />
         <div><br/></div>
      <button onClick={submit}>send</button>

    </div>
  );
}

export default App;
