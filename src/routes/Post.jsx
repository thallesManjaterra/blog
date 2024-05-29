import { useEffect, useState } from 'react'
import './Post.css'
import blogFetch from '../axios/config'
import { useParams } from 'react-router-dom'

export const Post = () => {
  const [post, setPost] = useState({})
  const { id } = useParams()

  const getPost = async () => {
    try {
      const { data } = await blogFetch.get(`/posts/${id}`)
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}
