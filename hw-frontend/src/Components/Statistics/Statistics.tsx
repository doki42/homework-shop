import React from "react";
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IProduct } from "../../Interfaces";

interface ChartProps {
    products: IProduct[];
}

export function Statistics(props: ChartProps){
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
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Product Prices',
          },
        },
      };

      const labels = props.products.map((product) => product.name);

      const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: props.products.map((product) => product.price ),
                backgroundColor: 'rgba(53, 162, 235, 0.75)',
            }
        ]
      }

      return (
        <Bar options={options} data={data}/>
      )

}


