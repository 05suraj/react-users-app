import React  from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import configObj from './chartdata/chartobj'

const HighChart = ()=>{

   const charthp = (chart)=>{
      console.log(chart);
   }

    return(
    <>
    <div className="container">
        <div className="mt-4">
        <HighchartsReact
    highcharts={Highcharts}
    options={configObj}
    callback = {charthp}
  />
  </div>
  </div>
  </>
    )
}
export default HighChart