import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';



export default function Adduser() {

  const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[created_date, setCreated_date] = useState("")
    const[modified_date, setModified_date] = useState("")
    const[status, setStatus] = useState("")
    const[enable, setEnable] = useState("")

    const navigate=useNavigate();

    const InValidate=() => {
      let isproceed=true;
      let errormessage='Please enter the value in '
      if (name === null || name === ''){
          isproceed = false;
          errormessage += ' username '
      }
      if (email === null || email === ''){
          isproceed = false;
          errormessage += ' email'
      }
      // if (password === null || password === ''){
      //     isproceed = false;
      //     errormessage += ' password'
      // }
      // if (phone === null || phone === ''){
      //     isproceed = false;
      //     errormessage += ' phone number'
      // }
      if (status === null || status === ''){
          isproceed = false;
          errormessage += ' Address'
      }
      if (enable === null || enable === ''){
          isproceed = false;
          errormessage += ' Address'
      }
      if(!isproceed){
          alert(errormessage)
      }
      return isproceed;
  }

  const handlesubmit = (e) => {
        
    e.preventDefault();
    let regobj={email,name,created_date,modified_date,status,enable}
    // console.log(regobj)
    if(InValidate()){
    fetch("http://localhost:8000/addusers", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            alert('Successfully Created')
            navigate('/home/users');
        }).catch((err) => {
            alert('Failed :' + err.message);
        });
    }
    
}

  return (
   <>
<div className='flex flex-col gap-4 w-1/2  p-3 px-32 justify-center'> 
<div className='flex flex-col'>
    <h1>
        <b>
            Create User
            </b>
            </h1>
            <br />
    <p className=' text-gray-500'>Upon submission, a new user account will be created and we will send an email to the provided address with login instructions.</p>
</div>
<form onSubmit={handlesubmit}>
<input
                className="p-2 mt-4 rounded-xl border"
                type="text"
                name="name"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />   
              <input
                className="p-2 mt-4 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />  
              <input
                className="p-2 mt-4 rounded-xl border"
                type="date"
                name="role"
                placeholder="Created date"
                value={created_date}
                onChange={(e) => setCreated_date(e.target.value)}
              />  
              <input
                className="p-2 mt-4 rounded-xl border"
                type="date"
                name="tenantid"
                placeholder="modified Date"
                value={modified_date}
                onChange={(e) => setModified_date(e.target.value)}
              />  
              <input
                className="p-2 mt-4 rounded-xl border"
                type="text"
                name="tenantid"
                placeholder="Status "
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <input
                className="p-2 mt-4 rounded-xl border"
                type="text"
                name="tenantid"
                placeholder="Enable "
                value={enable}
                onChange={(e) => setEnable(e.target.value)}
              />
               
    <div className='flex  gap-2 mt-4 justify-center'>
    <button className="bg-[#002D74] rounded-xl text-white w-20 py-2 hover:scale-105 duration-300">
                Create
              </button>     
              <button className="bg-[#b21616] rounded-xl text-white    w-20 py-2 hover:scale-105 duration-300">
              <a
                        href="/home/users"
                        className=' text-white hover:no-underline'
                    >
                    Cancel </a> 
              </button>   
               </div>
              </form>

    </div>
   </>
  )
}
