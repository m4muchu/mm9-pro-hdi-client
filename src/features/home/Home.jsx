import React from 'react'
import { useHistory } from 'react-router'

const Home = () => {
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.push('/login')}>login</button>
    </div>
  )
}

export default Home
