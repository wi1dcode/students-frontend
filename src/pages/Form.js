import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const [member, setMember] = useState('')
    const [error, setError] = ''
    
    
    const handleChange = e => {
      setMember(e.target.value);
    }

    useEffect(() => {
      }, [handleChange])

    const postStudent = async e => {
        e.preventDefault()

    
        const student = {
          name: member
        }
    
        const request = await fetch(`http://localhost:5000/students`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(student)
        })
    
        const response = await request.json()

        if (request.status === 201) {
            console.log(response);
        } else {
            console.log(response);
        }

      }


    return (
        <main>

            <div className="card" >
                    <img className="card-img-top" src="http://pact-necker.org/wp-content/uploads/2018/06/LOGO-OXFORD-UNIVERSITY.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Add new student</h5>
                        <form onSubmit={postStudent}>
                            <input type='text'  onChange={handleChange} value={member} />
                            <button type='submit' className='btn btn-success add'>Create student</button>
                            <Link to={`/`} href="#">
                            <button className='btn btn-primary home'>Home</button>
                            </Link>
                        </form>
                    </div>
            </div>
        </main>
    )

}

export default Form
