import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/config";
import Header from "./Header";

const MoonlightingInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleName = (e) => {
    setName(e.target.value)
  };

  function handleView() {
    if (name == '') {
      alert('Enter Name!')
    } else {
      const queryParams = new URLSearchParams({ name: name }).toString();
      console.log(queryParams)
      navigate(`/moonlighting-view?${queryParams}`);
    }
  }

  function handleDownload() {
    if (name == '') {
      alert('Enter Name!')
    } else {
      const queryParams = new URLSearchParams({ name: name }).toString();
      console.log(queryParams)
      navigate(`/moonlighting-download?${queryParams}`);
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
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="bg-white rounded-xl ml-8 w-2/4 py-12 mt-20 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <h1 className="font-medium text-black text-2xl mb-8 uppercase text-center">Moonlighting Form</h1>
            <div className="flex flex-col justify-center items-start w-2/4">
              <input
                type="text"
                className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                placeholder="Name"
                name="name"
                onChange={handleName}
                value={name}
              />
              <div className=" flex flex-row justify-between w-full">
                <input
                  className="cursor-pointer rounded-md bg-outerspace text-black w-2/5 p-2 outline-none shadow-sm shadow-black font-medium "
                  type="submit"
                  value="VIEW PDF"
                  onClick={() => handleView()}
                />
                <input
                  className="cursor-pointer rounded-md bg-outerspace text-black w-2/5 p-2 outline-none shadow-sm shadow-black font-medium "
                  type="submit"
                  value="DOWNLOAD PDF"
                  onClick={() => handleDownload()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoonlightingInput