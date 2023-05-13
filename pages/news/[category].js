import Article from '@/components/article'
import React from 'react'

function ArticleByCategory({articles,category}) {
  return (
    <div>
        <h1>Showing news for {category}</h1>
        {
            articles.map((article)=>{
                return <Article article={article} key={article.id}/>
            })
        }
    </div>
  )
}

export default ArticleByCategory

export async function getServerSideProps(context){
    const {params}=context
    const {category}=params
    const res=await fetch(`http://localhost:4000/news?category=${category}`)
    const data=await res.json()
    return {
        props: {
            articles: data,
            category: category
        }
    }
}