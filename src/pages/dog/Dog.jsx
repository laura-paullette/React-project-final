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
            <img src={dog.image} alt="" />
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