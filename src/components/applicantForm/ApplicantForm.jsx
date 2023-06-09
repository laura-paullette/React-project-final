import "./applicantForm.css"
import { useState } from "react"

function ApplicantForm ({id}) {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [city, setCity] = useState("")
    const [petsOwned, setPetsOwned] = useState("")
    const [image, setImage] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleJobChange(event) {
        setJob(event.target.value)
    }
    function handleCityChange(event) {
        setCity(event.target.value)
    }
    function handlePetsOwnedChange(event) {
        setPetsOwned(event.target.value)
    }

    function handleImageChange(event) {
        setImage(event.target.value)
    }


    const handleSubmit =(event) => {
        event.preventDefault()

        // const name = event.target[0].value
        // const job = event.target[1].value
        // const city = event.target[2].value
        // const pets_owned = event.target[3].value
        // const image = event.target[4].value
        // const dog_id = event.target[5].value


        fetch("http://localhost:9292/applicants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                job: job,
                city: city,
                pets_owned: petsOwned,
                image: image,
                dog_id: id
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        setName("")
        setCity("")
        // setDogId("")
        setJob("")
        setPetsOwned("")
        setImage("")
        event.target.reset()
        window.location.reload()
    }
  return (
    <form className="application-form" onSubmit={handleSubmit}>
        <h4>add a new applicant!</h4>
        <input onChange={handleNameChange} type="text" placeholder="name" required className="input"/>
        <input onChange={handleJobChange}    type="text" placeholder="job" required className="input"/>
        <input onChange={handleCityChange}  type="text" placeholder="city" required className="input"/>
        <input  onChange={handleImageChange}  type="text" placeholder="image" required className="input"/>
        <input  onChange={handlePetsOwnedChange} type="number" placeholder="pets owned" required className="input"/>
        {/* <input   onChange={handleDogIdChange} type="number" placeholder="dog id" required className="input"/> */}
        <button onSubmit={handleSubmit} type="submit" className="create">create</button>
    </form>
  )
}

export default ApplicantForm