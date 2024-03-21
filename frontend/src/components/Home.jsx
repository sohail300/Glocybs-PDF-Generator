import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { baseURL } from "../utils/config";
import { useEffect, useState } from 'react';
import Header from './Header';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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
      <div className=' flex flex-col justify-center items-center'>
        <div className=" bg-white rounded-xl ml-8 w-2/4 mt-8 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <h1 className="text-3xl font-bold text-center mt-10 mb-8">Choose which document you want to edit</h1>
          <div className=' w-80 m-auto'>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/offer-letter-intern-input')}>Offer Letter For Intern</div>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/offer-letter-employee-input')}>Offer Letter For Full Time</div>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/nda-input')}>NDA</div>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/bond-input')}>Bond</div>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/moonlighting-input')}>Moonlighting</div>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/invoice-input')}>Invoice</div>
            <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black uppercase' onClick={() => navigate('/custom-input')}>Custom PDF</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home