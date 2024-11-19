import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
        Blog
        <h1>Voici mon blog</h1>
        <Link to = "/blog/1">Cliquer pour voir les details de l'articles</Link>
        </div>
  )
}
