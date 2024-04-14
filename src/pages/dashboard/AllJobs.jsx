import SearchContainer from "../../components/SearchContainer"
import JobsContainer from "../../components/JobsContainer"

const AllJobs = () => {
  return (
    <div className="p-0 md:p-5"> 
      <SearchContainer/>
      <JobsContainer/>
    </div>
  )
}
export default AllJobs