import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MoonlightingInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  };

  function handleSubmit() {
    if (name == '') {
      alert('Enter Name!')
    } else {
      const queryParams = new URLSearchParams({ name: name }).toString();
      console.log(queryParams)
      navigate(`/moonlighting?${queryParams}`);
    }
  }

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="bg-white rounded-xl ml-8 w-2/4 py-16 mt-20 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
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
            <input
              className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium "
              type="submit"
              value="SUBMIT APPLICATION"
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MoonlightingInput