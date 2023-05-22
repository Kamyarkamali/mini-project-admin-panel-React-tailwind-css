import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Charts() {

    
const data = [
    {
      name: 'kamyar',
      "Active users": 3300,
    },
    {
      name: 'alireza',
      "Active": 5000,
    },
    {
      name: 'mojtaba',
      "Active": 2009,
    },
    {
      name: 'zahra',
      "Active": 2980,
    },
    {
      name: 'majid',
      "Active": 1090,
    },
    {
      name: 'sara',
      "Active": 2590,
    },
    {
      name: 'korosh',
      "Active": 2490,
    },
    {
        name: 'samaneh',
        "Active": 5490,
      },
      {
        name: 'ahora',
        "Active": 1490,
      },
      {
        name: 'amir',
        "Active": 2490,
      },
      {
        name: 'korosh',
        "Active": 3490,
      },
  ];
  

  return (
    <div className='shadow-lg p-[20px] m-[20px]'>
        <h3>Users</h3>
        <ResponsiveContainer  width="94%"  aspect={4/1.8}>
            <LineChart width={500} data={data} stroke="#8884d8">
                <XAxis dataKey="name"/>
                <Line type="monotone" dataKey="Active"/>
                <Tooltip/>
                <CartesianGrid stroke='#999'/>
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Charts