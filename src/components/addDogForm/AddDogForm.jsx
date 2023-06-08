import './addDogForm.css'

const AddDogForm = () => {
    function handleSubmit(event){
        event.preventDefault()

        const name = event.target[0].value
        const breed = event.target[1].value
        const trait = event.target[2].value
        const age = event.target[3].value
        const image = event.target[4].value

     fetch("http://localhost:9292/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            breed: breed,
            trait: trait,
            age: age,
            image: image
        })
     })
    //  .then(res => res.json())
    //  .then(data => console.log(data))      
    }
    
  return (
    <div className='addDogForm'>
        <h2>Add a Dog to the database</h2>

        <form className="add-dog-form" onSubmit={handleSubmit}>
            <input className='input' required type='text' placeholder='Name' />
            <input className='input' required type='text' placeholder='breed' />
            <input className='input' required type='text' placeholder='trait' />
            <input className='input' required type='number' placeholder='age' />
            <input className='input' required type='text' placeholder='image' />
            <button type="submit" className='create'>create</button>
        </form>
    </div>
  )
}

export default AddDogForm