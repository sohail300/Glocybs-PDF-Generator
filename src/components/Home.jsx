import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className=" bg-white rounded-xl ml-8 w-2/4 py-8 mt-20 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-bold text-center mb-12">Choose which document you want to edit</h1>
        <div className=' w-40 m-auto'>
          <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black ' onClick={() => navigate('/offer-letter-input')}>Offer Letter</div>
          <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black' onClick={() => navigate('/nda-bond-input')}>NDA + Bond</div>
          <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black' onClick={() => navigate('/moonlighting-input')}>Moonlighting</div>
          <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center mb-8 font-medium text-lg outline-none shadow-sm shadow-black' onClick={() => navigate('/invoice-input')}>Invoice</div>
        </div>
      </div>
    </div>
  )
}

export default Home