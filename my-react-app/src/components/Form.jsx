import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function form() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='flex flex-col gap-4'>
      <label className='font-bold'>Enter Name</label>
      <input type="text" className='border-2 ml-5 w-2xl'/>
      <label className='font-bold'>Description</label>
      <input type="text" className='border-2 ml-5 w-2xl'/>
      <label className='font-bold'>Enter Date</label>
      <DatePicker className='border-2 ml-5 w-2xl' selected={startDate} onChange={(date) => setStartDate(date)} />

        <button type="button" value="submit" className='border-2 p-2 rounded-2xl'/>
    </div>
  )
}

export default form
