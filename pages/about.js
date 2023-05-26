import React from 'react';

function About({dbUser,dbPassword}) {
  return (
    <>
      <h1>About Page</h1>
      <h2>Analytics id: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
      <h2>DB USER: {dbUser}</h2>
      <h2>DB password: {dbPassword}</h2>
    </>
  );
}

export default About

export async function getServerSideProps()
{
    const user=process.env.DB_USER
    const password=process.env.DB_PASSWORD
    return{
        props:{
            dbUser:user,
            dbPassword:password
        }
    }
}