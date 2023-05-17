import React from 'react'
import styled from 'styled-components'


const Title=styled.h1`
    font-size: 1em;
    color: ${({theme})=>theme.colors.secondary}
`

function ContactPage() {
  return (
    <div>
        <Title>Contact Page</Title>
    </div>
  )
}

export default ContactPage