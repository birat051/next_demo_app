import User from '@/components/user'
import React from 'react'

function Users({users}) {
  return (
    <div><h1>List of users</h1>
    {
        users.map((user)=>{
            return <User key={user.id} user={user} />
        })
    }
    </div>
  )
}

export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props:{
            users: data
        }
    }
}


export default Users