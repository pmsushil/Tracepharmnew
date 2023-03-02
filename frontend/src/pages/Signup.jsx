import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Signup() {

    const[name, setName] = useState("")
    const[id, setId] = useState("")
    const[password, setPassword] = useState("")
    const[phone, setPhone] = useState("")
    const[address, setAddress] = useState("")
    const[plan, setPlan] = useState("basic")
    const[company, setCompany] = useState("")

    const navigate=useNavigate();

    const InValidate=() => {
        let isproceed=true;
        let errormessage='Please enter the value in '
        if (name === null || name === ''){
            isproceed = false;
            errormessage += ' username '
        }
        if (id === null || id === ''){
            isproceed = false;
            errormessage += ' email'
        }
        if (password === null || password === ''){
            isproceed = false;
            errormessage += ' password'
        }
        if (phone === null || phone === ''){
            isproceed = false;
            errormessage += ' phone number'
        }
        if (address === null || address === ''){
            isproceed = false;
            errormessage += ' Address'
        }
        if (company === null || company === ''){
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
        let regobj={name,id,password,phone,address,plan,company}
        // console.log(regobj)
        if(InValidate()){
        fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                alert('successfully registered')
                navigate('/login');
            }).catch((err) => {
                alert('Failed :' + err.message);
            });
        }
        
    }
    return (
        <section className="bg-gray-50 p-8 px-32  min-h-screen flex items-center justify-center">
        
        <div className="bg-gray-100 flex rounde-2xl shadow-lg max-w-5xl p-3 items-center">
        <div className=" px-8 md:px-16">
            <h5 className="font-bold text-xl text-[#06080b] ">Registration </h5>
           <div className='flex'>
                <h1 className="font-bold text-2xl text-[#f76c16]">Trace</h1>
                <h1 className="font-bold text-2xl text-[#002D74]">Pharm</h1>
           </div> 
           <form onSubmit={handlesubmit}>
           <div className='flex flex-col gap-1'>
           
            <input className="p-2  mt-4 rounded-xl border"
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name" />
                 <input className="p-2  mt-4 rounded-xl border"
                type="email"
                name="Email"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Email" />
                <input className="p-2  mt-4 rounded-xl border"
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
                 <input className="p-2  mt-4 rounded-xl border"
                type="number"
                name="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone" />
                <input className="p-2  mt-4 rounded-xl border"
                type="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company" />
                 <input className="p-2  mt-4 rounded-xl border"
                type="text"
                name="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address" />
           
           <select value={plan} onChange={(e) => setPlan(e.target.value)} className="p-2 mt-4 px-14  rounded-xl border justify-center text-center ">
  <option value="plan" disabled selected>Select the Plan</option>
  <option value="basic">Basic</option>
  <option value="standard">Standard</option>
  <option value="premium">Premium</option>
  <option value="platinum">Platinum</option>

</select>
<div className=' mt-4 justify-center px-20 '>
<button className="bg-[#002D74] rounded-xl w-20  text-white py-2 hover:scale-105 duration-300">
                Submit
              </button>
</div>

           </div>
           </form>
           
           </div>
          
       
       </div>
      
      </section>
    );
}














