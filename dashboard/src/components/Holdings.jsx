import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import Chart from 'chart.js/auto';
// import { VerticalGraph } from "./VerticalGraph";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const Holdings = () => {
  

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    // labels,
    datasets: [
      {
        label: "Stock Price",
        // data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  let [holdings, setHoldings] = useState([]);
 
  useEffect(()=>{
    axios.get("http://localhost:3000/holdings").then((response)=>{
    setHoldings(response.data);
    
    
  }).catch((err)=>{
    console.log(err.message);
  });
  }, []);
  
 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Holding chart',
    },
  },
};

const labels = holdings.map((subArray)=>{return subArray.name});

const chartData = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: holdings.map((subArray) => subArray.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};

// function App() {
//   return <Bar options={options} data={chartData} />;
// }
// App();
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
        <Bar className="mt-4" options={options} data={chartData} />
      </div>

     
      {/* <VerticalGraph data={data} /> */}
    </>
  );
};

export default Holdings;