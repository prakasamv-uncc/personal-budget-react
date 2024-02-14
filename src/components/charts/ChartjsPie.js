import { color } from 'd3';
import React from 'react';
import {Chart} from 'chart.js';

import { ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.color = '#FFF';
Chart.defaults.plugins.legend.labels.color = '#FFF';
Chart.defaults.plugins.legend.title.text = 'Budget Summary';
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

const ChartjsPie = (props) => {
    const myBudget = props.data.myBudget;
  const data = {
  labels: myBudget.map(item => item.title),
  datasets: [{
    data: myBudget.map(item => item.budget),
    backgroundColor: [
      "#ffcd56",
      "#ff6384",
      "#36a2eb",
      "#fd6b19",
      "#fc6d19",
      "#ff6c20",
      "#dfd619",
      "#e6a2ec",
    ],
    borderColor: [
      "#ffcd56",
      "#ff6384",
      "#36a2eb",
      "#fd6b19",
      "#fc6d19",
      "#ff6c20",
      "#dfd619",
      "#e6a2ec",
    ],
    radius: 80,
    spacing: 20,
    aspectRatio: 1,
  }]
};

  return  <div>
  <h2>Requests Summary Widget</h2>
  <div className='doughnutWrapper'><Doughnut data={data} /></div>
</div>;
};

export default ChartjsPie;
