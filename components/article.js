import React from 'react'

function Article({article}) {
  return (
    <>
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <h2>{article.category}</h2>
        <p>{article.body}</p>
    </>
  )
}

export default Article