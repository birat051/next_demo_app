import React, { useState } from 'react'
import { useRouter } from 'next/router'
import EventComponent from '@/components/event'

export async function getSportsEvents()
{
    const res=await fetch(`http://localhost:4000/events?category=sports`)
    const data=await res.json()
    return data
}

function Events({eventList}) {
  const [eventEntry, seteventEntry] = useState(eventList)
  const router=useRouter()
  const showSportsEvents=async()=>
  {
    const data=await getSportsEvents()
    console.log('Got data: ',data)
    seteventEntry(data)
    router.push('/events?category=sports',undefined,{shallow: true}) //pushes application to new route while updating the events data with only sports category
  }
  return (
    <div>
        <h1>Events</h1>
        <button onClick={showSportsEvents}>Show sports events</button>
        {eventEntry.map((events)=>{
           return <EventComponent key={events.id} events={events}/>
        })}
    </div>
  )
}

export default Events

export async function getServerSideProps(context)
{
    const {query}=context
    const {category}=query
    const queryString=category?'category=sports':''
    const res=await fetch(`http://localhost:4000/events?${queryString}`)
    const data=await res.json()
    return{
        props:{
            eventList:data
        }
    }
}