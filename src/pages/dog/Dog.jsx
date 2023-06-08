import "./dog.css"
function Dog() {
  return (
    <div className="dog-details-container">
      <div className="dog-details-wrapper">
        <div className="dog-image-detail">
            <img src="https://images.unsplash.com/photo-1600525334864-9e6c8ed189d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
        </div>
        <div className="details">
            <h3>Name:</h3>
            <p>Breed:</p>
            <p>Age:</p>
            <p>Trait:</p>
        </div>
      </div>


      <div className="applicants-wrapper">
        <div className="applicants-list">
          <table>
            <tr>
              <th>
                image
              </th>
              <th>
                name
              </th>
              <th>
                job
              </th>
              <th>
                city
              </th>
              <th>
                pets owned
              </th>
            </tr>

            <tr>
              <td>profile picture</td>
              <td>laura</td>
              <td>singer</td>
              <td>nairobi</td>
              <td>5</td>
            </tr>
            <tr>
              <td>profile picture</td>
              <td>laura</td>
              <td>singer</td>
              <td>nairobi</td>
              <td>5</td>
            </tr>
            <tr>
              <td>profile picture</td>
              <td>laura</td>
              <td>singer</td>
              <td>nairobi</td>
              <td>5</td>
            </tr>
            <tr>
              <td>profile picture</td>
              <td>laura</td>
              <td>singer</td>
              <td>nairobi</td>
              <td>5</td>
            </tr>
            
          </table>
        </div>
        <div className="applicants-form">form</div>
      </div>
    </div>
  )
}

export default Dog