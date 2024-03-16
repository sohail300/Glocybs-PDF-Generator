import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NDABondInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleDay(e) {
    setDay(e.target.value);
  }

  function handleMonth(e) {
    setMonth(e.target.value);
  }

  function handleYear(e) {
    setYear(e.target.value);
  }

  function handleSubmit() {
    navigate('/nda-bond');
  }

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="bg-white rounded-xl ml-8 w-2/4 py-16 mt-20 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
        <h1 className="font-medium text-black text-2xl mb-8 uppercase text-center"> Form</h1>
        <div className="flex flex-col justify-center items-start w-2/4">
          <input
            type="text"
            className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
            placeholder="Name"
            onChange={handleName}
            value={name}
          />

          <select
            className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
            onChange={handlePosition}
            value={position}
          >
            <option value="" disabled selected>Select Position</option>
            <option value="internship">Internship</option>
            <option value="full-time">Full-time</option>
          </select>

          <div className=" font-medium">STARTING DATE</div>
          <div className=" flex flex-row justify-between mb-4">
            <input
              type="text"
              className="bg-white rounded-md p-2 placeholder-black placeholder-opacity-75 w-1/4 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Day"
              onChange={handleDay}
              value={day}
            />
            <select
              className="bg-white rounded-md p-2 placeholder-black placeholder-opacity-75 w-1/4 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              onChange={handleMonth}
              value={month}
            >
              <option value="" disabled selected>Month</option>
            </select>
            <input
              type="text"
              className="bg-white rounded-md p-2 placeholder-black placeholder-opacity-75 w-1/4 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Year"
              onChange={handleYear}
              value={year}
            />
          </div>
          <input
            className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium "
            type="submit"
            value="SUBMIT APPLICATION"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default NDABondInput