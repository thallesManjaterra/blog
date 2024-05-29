import blogFetch from '../axios/config'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './NewPost.css'

export const NewPost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const createPost = async (e) => {
    e.preventDefault()
    const post = { title, body, userId: 1 }
    await blogFetch.post('/posts', post)
    navigate('/')
  }

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  )
}
