import React from 'react'


function Article ({tittle, date = "January 1, 1970",  preview}) {
  
  return (
    <article>
        <h3>{tittle}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article;