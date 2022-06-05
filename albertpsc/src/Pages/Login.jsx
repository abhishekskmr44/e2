import React from 'react'

function Login() {
 const[email, setEmail] = useState("")
 const[password, setPassword] = useState("")
 const[state, dispatch] = useContext(AppContext);


 const handleSubmit = (e) => {
     e.preventDefault()
     axios({
         url:"https://reqres.in/api/Login",
         method: "POST",
         data: {
             email,
             password
         }
     }) .then(res=>{
      alert("success");
      dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token
      });
     })
     .catch(err=>{
         console.log(err.message)
        alert("error");
     })
 };
 console.log('state.isAuth, ${isAuth}')

 if(isAuth){
     return <Navigate to="/users" />;
 }
 return (
    <div>
         <form onSubmit={handleSubmit}>
              <div>
                  <input placeholder="email" value={email} onChange=>{(e.target.value)} />    
              </div>
              <div>
              <input placeholder="password" value={password} onChange={(e)=>setPassword{e.target.value}} />    
              </div>
              <div>
                  <button type = "submit">SUBMIT</button> 
              </div>
         </form>
    </div>
  )
}

export default Login
