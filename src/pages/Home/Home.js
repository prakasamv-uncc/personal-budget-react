import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import D3PieChart from '../../components/charts/D3PieChart';
import ChartjsPie from '../../components/charts/ChartjsPie';
import ChartTabs from '../../components/Tabs/ChartTabs';
const baseURL = "http://localhost:3001/budget";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <p>This is a personal budget management app</p>
      
      <ChartTabs data={data} /> 
    </div>
  );
};

export default Home;
