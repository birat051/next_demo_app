import useSWR from 'swr'


const fetcher=async()=>{
  const res=await fetch('http://localhost:4000/user')
  const data=await res.json()
  return data
}

function DashBoard() {
  const {data,error} = useSWR('dashboard',fetcher)
  if(error)
  return <h1>Encountered error while fetching data...</h1>
  if(!data)
  return <h1>Loading...</h1>
  return (
    <div><h1>DashBoard</h1>
    <h2>Name: {data.name}</h2>
    <h2>Reward Points: {data.shopping_points}</h2>
    <h2>Address: {data.address}</h2>
    <h2>Membership Status: {data.premium_member?'Premium':'Free'}</h2>
    </div>
  )
}

export default DashBoard