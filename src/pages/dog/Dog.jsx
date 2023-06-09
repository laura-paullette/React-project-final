import { useEffect, useState } from "react"
import ApplicantForm from "../../components/applicantForm/ApplicantForm"
import ApplicantTable from "../../components/applicantTable/ApplicantTable"
import "./dog.css"
import { useParams } from "react-router-dom"

function Dog() {

  const [dog, setDog] = useState({})

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/dogs/${params.id}}`)
    .then(res => res.json())
    .then(data => setDog(data))
      
    }
  , [])
  
// console.log(dog);

  return (
    <div className="dog-details-container">
      <div className="dog-details-wrapper">
        <div className="dog-image-detail">
            <img src="https://images.unsplash.com/photo-1600525334864-9e6c8ed189d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
        </div>
        <div className="details">
            <h3>Name: {dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>Trait: {dog.trait}</p>
        </div>
      </div>


      <div className="applicants-wrapper">
        <div className="applicants-list">
         <ApplicantTable applicants={dog?.applicants}/>
        </div>
        <div className="applicants-form">
          <ApplicantForm id={params.id}/>
        </div>
      </div>
    </div>
  )
}

export default Dog