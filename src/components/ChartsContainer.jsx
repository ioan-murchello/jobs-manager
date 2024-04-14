import { useState } from "react"
import {useSelector} from 'react-redux'
import AreaChartComponent from "./AreaChart"
import BarChartComponent from "./BarChart"
import Loading from "./Loading"

const ChartsContainer = () => {
    
    const[barChart, setBarChart] = useState(true)
    const {monthlyApplications: data, isLoading } = useSelector(store => store.allJobs)

    if(isLoading){
      return <Loading/>
    }

  return (
    <div className='flex flex-col items-center p-3'>
      <h4 className="text-2xl">Monthly Applications</h4>
      <button className="text-sky-400 text-xl mt-5" onClick={() => setBarChart(old => !old)}>
        {barChart ? 'Area': 'Barchart'}
      </button>
        {barChart ? (
          <BarChartComponent data={data} />
        ) : (
          <AreaChartComponent data={data} />
        )}
    </div>
  );
}
export default ChartsContainer