import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const [project, setProject] = useState(null)
  const {id} = useParams();

  useEffect(()=>{
    // debugger
    fetch(`/projects/${id}`)
    .then(res => {
      if(res.ok) {
        res.json().then((project) => setProject(project))
      }
    })
  }, [])

  // console.log(project)
  return (
    <div> Project details </div>
  )
}

export default ProjectDetails;