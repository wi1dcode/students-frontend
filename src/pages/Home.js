import { useState, useEffect } from 'react'
import Form from './Form'
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


    return (
        <main>
        <div className="card" >
          <img className="card-img-top" src="http://pact-necker.org/wp-content/uploads/2018/06/LOGO-OXFORD-UNIVERSITY.png" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">List of students:</h5>
            <ul className='card-text'>
              {students.map(student => (
                <li>
                  {student.name}
                </li>
              ))}
            </ul>
                <Link to={`/form`}  href="#">
          <button className="btn btn-primary">Add Student</button>
          </Link>
          </div>
        </div>
        </main>
    )

}

export default Home
