import React from 'react'
import Article from '@/components/article'

function Articles({articles}) {
  return (
    <div>
           {
            articles.map((article)=>{
                return <Article article={article} key={article.id}/>
            })
        }
    </div>
  )
}

export default Articles

export async function getServerSideProps(){
    const res=await fetch(`http://localhost:4000/news`)
    const data=await res.json()
    return {
        props: {
            articles: data,
        }
    }
}