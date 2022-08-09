import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
      }, [])

    const getStudents = async () => {
        const request = await fetch('http://localhost:5000/students')
        const response = await request.json()
        setStudents(response)
    }

    const postStudent = async e => {
        e.preventDefault()

    
        const student = {
          name: "Jacky"
        }
    
        const request = await fetch(`http://localhost:5000/students`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(student)
        })
    
        const response = await request.json()
      }


    return (
        <>
         <h1>Home</h1>
      <ul>
        {authors.map(student => (
          <li>
            <Link to={`/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={postStudent}>
        <input type='text' />
        <button type='submit'>Create student</button>
      </form>
        </>
    )

}

export default Home
