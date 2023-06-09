import "./applicantTable.css"


function ApplicantTable({applicants}) {
  // console.log(applicants);
  return (
    
    <table>
      <thead>
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
    </thead>
    <tbody>


    {applicants?.map(applicant => (
      <tr key={applicant.id}>
        <td><img className ="participant-img" src={applicant.image} alt="" /></td>
        <td>{applicant.name}</td>
        <td>{applicant.job}</td>
        <td>{applicant.city}</td>
        <td>{applicant.pets_owned}</td>
      </tr>
        ))}
    
    </tbody>


   
    
  </table>
  )
}

export default ApplicantTable