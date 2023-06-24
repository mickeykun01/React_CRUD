import React, { useState } from 'react'


const countries = [
    {name : 'India' , value: 'IN' , cities :[
        'Delhi',
        'Mumbai'
    ]},
    {name : 'Pak' , value: 'PK' , cities :[
        'Lahore',
        'Karachi'
    ]},
    {name : 'Bangladesh' , value: 'BG' , cities :[
        'Dhaka',
        'Chittogorgh'
    ]},
];


function CityDropdown() {
    const [country, setcountry] = useState({name : '' , value : '' , cities : []})
  return (
    <div>
        <select 
        value={country}
        onChange={(e)=>{
            console.log(e.target.value);
            setcountry(e.target.value)
        }}>
        {
            countries.map((item , index)=>{
                return <option value={index}>{item.name}</option>
            })
        }
        </select>

        <select value={country}>
            {
                countries[country].cities.map((item,index)=>{
                    return <option value={index}>{item}</option>
                })
            }
        </select>
    </div>
  )
};

export default CityDropdown