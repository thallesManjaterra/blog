import blogFetch from '../axios/config'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditPost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const { id } = useParams()
  const getPost = async () => {
    try {
      const {
        data: { title, body },
      } = await blogFetch.get(`/posts/${id}`)
      setTitle(title)
      setBody(body)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  const editPost = async (e) => {
    e.preventDefault()
    const post = { title, body, userId: 1 }
    await blogFetch.put(`/posts/${id}`, post)
  }

  return (
    <div className="new-post">
      <h2>Editando {title}</h2>
      <form onSubmit={editPost}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            value={body || ''}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  )
}
