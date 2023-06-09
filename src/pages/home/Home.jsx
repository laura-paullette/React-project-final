import { useEffect, useState } from 'react'
import './home.css'
import AddDogForm from '../../components/addDogForm/AddDogForm'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [dogs, setDogs] = useState([])
  const navigate = useNavigate()

useEffect(() => {
  fetch("http://localhost:9292/dogs")
  .then(res => res.json())
  .then(data => setDogs(data))  
}, [])

  return (
    <div className='home'>
        <div className="search-bar">
            <input type="text" className="search-input" placeholder='input value'></input>
            <button className="search-button" >SEARCH</button>
        </div>

        <AddDogForm/>

        <div className="dogs-container">
          {dogs.map(dog => (
          <div className="dog-box" key={dog.id}>
            <img src={dog.image} alt="dog" className="dog-img" />
            <button className="button" onClick={() => navigate(`/dogs/${dog.id}`)}>VIEW</button>
            {/* <button className='delete' onClick={
              handleDelete
            }/> */}
          </div>
          ))
          }
          
        </div>
    </div>
  )
}

export default Home