import React, { useState }  from 'react';
import D3PieChart from '../charts/D3PieChart';
import ChartjsPie from '../charts/ChartjsPie';

const ChartTabs = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
    return (
        <div className="Tabs">
          <ul className="nav">
            <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>D3</li>
            <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Chart JS</li>
          </ul>
          <div className="outlet">
             
      
            {activeTab === "tab1" ? <D3PieChart data={props.data} className="d3Chart"/> : <ChartjsPie data={props.data} className="chartjsChart"/>}
          </div>
        </div>
      );
};

export default ChartTabs;
