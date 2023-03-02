import React,{useState,useEffect} from 'react'




export default function Users() {

    const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:3000/addusers/")
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
        <h1>User Details</h1>
        <button className="py-2 px-5  bg-blue-300 border rounded-xl hover:scale-110 duration-300">
              <a
                        href="/home/adduser"
                        className=' text-white hover:no-underline'
                    >
                    Add User </a> 
              </button>        
        </div>
        <br />
    <div className='flex justify-between'>
        <table className="w-full min-w-[640px] table-auto ">
            <thead >

                <tr >
                    <th>Email</th>
                    <th>Name</th>
                    <th>Created Date</th>
                    <th>Modified Date</th>
                    <th>Status</th>
                    <th>Enabled</th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                {users && users.map((data,key) => {
                    return(
                        <tr key={data.id}>
                            <td>
                                {data.email}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.created_date}
                            </td>
                            <td>
                                {data.modified_date}
                            </td>
                            <td>
                                {data.status}
                            </td>
                            <td>
                                {data.enable}
                            </td>
                            <td>
                                <button varient="primary"> View</button>
                                <button> Edit</button>
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
