import React, {useState, useEffect} from 'react'
import axios from 'axios'
// Data Possibly null =>  .?
type Title = {
  title: string
}
function DataFetchingWithReducer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState<Title | null>(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      console.log(res)
      setLoading(false)
      setPost(res.data)
      setError('')
    })
    .catch((error) => {
      setLoading(false)
      setPost(null)
      setError('Something went wrong')
    })
  }, [])
  return (
    <div>
      {loading ? 'loading' : post?.title}
      {error? error : null}
    </div>
  )
}

export default DataFetchingWithReducer