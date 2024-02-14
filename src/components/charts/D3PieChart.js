import React from 'react';
import DonutChart from './DonutChart';

/* const donutData = [
    {
        title: "Media",
        budget: 25
    },
    {
        title: "Misc",
        budget: 15
    },
    {
        title: "Savings",
        budget: 100
    },
    {
        title: "Eat out",
        budget: 25
    },
    {
        title: "Rent",
        budget: 75
    },
    {
        title: "Grocery",
        budget: 110
    },
    {
        title: "Car",
        budget: 100
    },
    {
        title: "Gas",
        budget: 25
    }
   ] */

const D3PieChart = (props) => {
    return (
        <>
       
            <DonutChart data={props.data.myBudget}  />
        </>
    );
};

export default D3PieChart;