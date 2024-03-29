import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/config";
import Header from "./Header";

const OfferLetterInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [orientatonDay, setOrientatonDay] = useState('');
  const [orientatonMonth, setOrientatonMonth] = useState('');
  const [orientatonYear, setOrientatonYear] = useState('');
  const [stipend, setStipend] = useState('');
  const [dearness, setDearness] = useState('');
  const [houseRent, setHouseRent] = useState('');
  const [conveyance, setConveyance] = useState('');
  const [otherAllowance, setOtherAllowance] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePost(e) {
    setPost(e.target.value);
  }

  function handleStipend(e) {
    setStipend(e.target.value);
  }

  function handleDearness(e) {
    setDearness(e.target.value);
  }

  function handleHouseRent(e) {
    setHouseRent(e.target.value);
  }

  function handleConveyance(e) {
    setConveyance(e.target.value);
  }

  function handleOtherAllowance(e) {
    setOtherAllowance(e.target.value);
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

  function handleOrientaionDay(e) {
    setOrientatonDay(e.target.value);
  }

  function handleOrientaionMonth(e) {
    setOrientatonMonth(e.target.value);
  }

  function handleOrientaionYear(e) {
    setOrientatonYear(e.target.value);
  }

  function handleView() {
    if (name == '' || day == '' || month == '' || year == '' || post == '' || stipend == '' || dearness == '' || houseRent == '' || conveyance == '' || otherAllowance == '' || orientatonDay == '' || orientatonMonth == '' || orientatonYear == '') {
      alert('Enter Details!')
    } else {
      const queryParams = new URLSearchParams({
        name,
        post,
        stipend,
        dearness,
        houseRent,
        conveyance,
        otherAllowance,
        day,
        month,
        year,
        orientatonDay,
        orientatonMonth,
        orientatonYear
      }).toString();
      navigate(`/offer-letter-employee-view?${queryParams}`);
    }
  }

  function handleDownload() {
    if (name == '' || day == '' || month == '' || year == '' || post == '' || stipend == '' || dearness == '' || houseRent == '' || conveyance == '' || otherAllowance == '' || orientatonDay == '' || orientatonMonth == '' || orientatonYear == '') {
      alert('Enter Details!')
    } else {
      const queryParams = new URLSearchParams({
        name,
        stipend,
        dearness,
        houseRent,
        conveyance,
        otherAllowance,
        post,
        day,
        month,
        year,
        orientatonDay,
        orientatonMonth,
        orientatonYear
      }).toString();
      navigate(`/offer-letter-employee-download?${queryParams}`);
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
        <div className="bg-white rounded-xl ml-8 w-2/4 mt-8 py-10 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <h1 className="font-medium text-black text-2xl mb-8 uppercase text-center">Offer Letter Form for Full Time</h1>
          <div className="flex flex-col justify-center items-start w-2/4">
            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Name"
              onChange={handleName}
              value={name}
            />
            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Post"
              onChange={handlePost}
              value={post}
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
            <div className=" font-medium">ORIENTATION DATE</div>
            <div className=" flex flex-row justify-between mb-4">
              <input
                type="text"
                className="bg-white rounded-md p-2 placeholder-black placeholder-opacity-75 w-1/4 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                placeholder="Day"
                onChange={handleOrientaionDay}
                value={orientatonDay}
              />
              <select
                className="bg-white rounded-md p-2 placeholder-black placeholder-opacity-75 w-1/4 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                onChange={handleOrientaionMonth}
                value={orientatonMonth}
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
                onChange={handleOrientaionYear}
                value={orientatonYear}
              />
            </div>
            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="CTC per annum (including LPA)"
              onChange={handleStipend}
              value={stipend}
            />

            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Dearness Allowance (including LPA)"
              onChange={handleDearness}
              value={dearness}
            />

            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="House Rent Allowance (including LPA)"
              onChange={handleHouseRent}
              value={houseRent}
            />

            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Conveyance Allowance (including LPA)"
              onChange={handleConveyance}
              value={conveyance}
            />

            <input
              type="text"
              className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
              placeholder="Other Allowance (including LPA)"
              onChange={handleOtherAllowance}
              value={otherAllowance}
            />

            <div className=" flex flex-row justify-between w-full">
              <input
                className="cursor-pointer rounded-md bg-outerspace text-black w-2/5 p-2 outline-none shadow-sm shadow-black font-medium"
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

export default OfferLetterInput