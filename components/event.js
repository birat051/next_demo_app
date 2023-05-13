import React from 'react'

function EventComponent({events}) {
  return (
    <div>
        <h1>Event Name: {events.name}</h1>
        <h2>Category: {events.category}</h2>
        <h2>Event data: {events.date}</h2>
    </div>
  )
}

export default EventComponent
