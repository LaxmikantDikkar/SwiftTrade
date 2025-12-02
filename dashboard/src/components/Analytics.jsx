import { Chart as ChartJS, ArcElement, Tooltip as tool, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { watchlist } from "../data/data";
import "./Analytics.css";
import CloseIcon from '@mui/icons-material/Close';
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
export default function Analytics(){

    const generalContext = useContext(GeneralContext);

    const handleCloseAnalytics =()=>{
        generalContext.closeAnalytics();
        
    }
    ChartJS.register(ArcElement, tool, Legend);
    
    const data = {
      labels: watchlist.map((arr)=>arr.name),
      datasets: [
        {
          label: 'Price',
          data: watchlist.map((arr)=>arr.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return(
        <div className='container'> <div className='piechart'><Pie data={data} /></div><button type="button"className='closeIcon' onClick={handleCloseAnalytics} ><CloseIcon  /></button></div>
        
    )
}