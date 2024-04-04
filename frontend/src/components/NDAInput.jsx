import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/config";
import Header from "./Header";

const NDAInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function handleName(e) {
    setName(e.target.value);
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

  function handleView() {
    const regex = /^[a-zA-Z\s]*$/;

    if (!(regex.test(name)) || name === "") {
      alert('Enter Valid Name!')
    } else if (day === "" || !(parseInt(day) >= 1 && parseInt(day) <= 31) || month == '' || year === "" || !(parseInt(year) >= 2020 && parseInt(year) <= new Date().getFullYear())) {
      alert('Enter Valid Date!')

    } else {
      const queryParams = new URLSearchParams({
        name: name,
        day: day,
        month: month,
        year: year
      }).toString();
      navigate(`/nda-view?${queryParams}`);
    }
  }

  function handleDownload() {
    const regex = /^[a-zA-Z\s]*$/;

    if (!(regex.test(name)) || name === "") {
      alert('Enter Valid Name!')
    } else if (day === "" || !(parseInt(day) >= 1 && parseInt(day) <= 31) || month == '' || year === "" || !(parseInt(year) >= 2020 && parseInt(day) <= new Date().getFullYear())) {
      alert('Enter Valid Date!')

    } else {
      const queryParams = new URLSearchParams({
        name: name,
        day: day,
        month: month,
        year: year
      }).toString();
      navigate(`/nda-download?${queryParams}`);
    }
  }

  const api = axios.create({
    baseURL,
  });

  async function getId() {
    const response = await api.get("/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getId();
  }, [])

  return (
    isLoading == false &&
    <>
      <Header />
      <div className="w-full flex justify-center items-center ">
        <div className="bg-white rounded-xl ml-8 w-2/4 py-12 mt-20 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <h1 className="font-medium text-black text-2xl mb-8 uppercase text-center">NDA Form</h1>
          <div className="flex flex-col justify-center items-start w-2/4">
            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Name"
              onChange={handleName}
              value={name}
            />

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
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <input
                type="text"
                className="bg-white rounded-md p-2 placeholder-black placeholder-opacity-75 w-1/4 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                placeholder="Year"
                onChange={handleYear}
                value={year}
              />
            </div>
            <div className=" flex flex-row justify-between w-full">
              <input
                className="cursor-pointer rounded-md bg-outerspace text-black w-2/5 p-2 outline-none shadow-sm shadow-black font-medium "
                type="submit"
                value="VIEW PDF"
                onClick={handleView}
              />
              <input
                className="cursor-pointer rounded-md bg-outerspace text-black w-2/5 p-2 outline-none shadow-sm shadow-black font-medium "
                type="submit"
                value="DOWNLOAD PDF"
                onClick={handleDownload}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NDAInput