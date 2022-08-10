import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Success = () => {
    const params = useParams()

    useEffect(() => {
        fetchStudent()
    }, [])

    const fetchStudent = async () => {
        const request = await fetch('http://localhost:5000/students')
        const response = await request.json()
    }

    return (
        <>
        </>
    )
}

export default Success