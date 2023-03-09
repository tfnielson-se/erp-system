import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectRow from "./ProjectRow"

const MyProjectsList = ({ currentUser }) => {
  const {projects} = currentUser
  const[myProjects, setMyProjects] = useState(projects)

  if(!myProjects) return <h1>Loading...</h1>;

  const deleteProject = (projectId) => {
    const projectsAfterDelete = projects.filter(project => {
      if (project.id !== projectId) {
        return project
    }})
    setMyProjects(projectsAfterDelete)
  }

  const renderProjects = myProjects.map((project) => (
    <ProjectRow key={project.id} project={project} onDeleteProject={deleteProject}/>
  ))


  return (
    <>
    <Link to='/projects' className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize">
      <button className="inline-flex items-center px-3 py-1 mx-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize">View All Projects</button>
    </Link>
<section className="container px-4 mx-auto mt-5">
			<div className="flex flex-col">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-gray-50 dark:bg-gray-800">
									<tr>
										<th
											scope="col"
											className="py-3.5 px-4 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>

													<span>ID #</span>

										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Name
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Status
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Spent
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Budget
										</th>

										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
										Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
									{renderProjects}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default MyProjectsList