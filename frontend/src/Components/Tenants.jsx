import React,{useState,useEffect} from 'react'

export default function Tenants() {

  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:3000/signup/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
       

  return (
    <>
  <div className='flex flex-col p-4 bg-white gap-2'>
    <div className='flex justify-between'>
        <h1>Tenants Details</h1>
              
        </div>
        <br />
    <div className='flex justify-between'>
        <table className="w-full min-w-[640px] table-auto ">
            <thead >

                <tr >
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Plan</th>
                    <th>Company</th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                {users && users.map((data,key) => {
                    return(
                        <tr key={data.id}>
                            <td>
                                {data.id}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.phone}
                            </td>
                            <td>
                                {data.address}
                            </td>
                            <td>
                                {data.plan}
                            </td>
                            <td>
                                {data.company}
                            </td>
                            <td className=' flex gap-2'>
                                <button varient="primary"> View</button>
                                <button> Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>

  </div>
  </>
  )
}
