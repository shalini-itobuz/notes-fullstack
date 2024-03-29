import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navig=useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navig('/register')
        },3000)
    },[])

  return (
    <div>
      404
    </div>
  )
}

export default ErrorPage
