import { useState } from 'react'
import Header from './Header'
import axios from 'axios';

const CustomPDFInput = () => {
    const [values, setValues] = useState(null);
    const [formData, setFormData] = useState([]);
    const [file, setFile] = useState(null);

    function handleForm(i, e) {
        const { name, value } = e.target;
        console.log(name)
        console.log(value)

        const newFormData = [...formData];
        newFormData[i] = { ...newFormData[i], [name]: value }
        setFormData(newFormData)
        console.log(formData)
    }

    async function sendData(e) {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("file", file);
            console.log(formData)
            // console.log(file)
            const response = await axios.post('http://localhost:3000/api/file', formData);
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    function generateTable() {
        const rows = [];

        for (let i = 0; i < values; i++) {
            rows.push(
                <tr key={i}>
                    <td>
                        <input
                            type="text"
                            className="bg-white rounded-md p-2 mb-4 mr-8 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                            placeholder="key"
                            name="key"
                            onChange={(e) => handleForm(i, e)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="bg-white rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                            placeholder="value"
                            name="value"
                            onChange={(e) => handleForm(i, e)}
                        />
                    </td>
                </tr>
            )
        }
        return rows;
    }

    return (
        <div>
            <Header />
            <div className="w-full flex justify-center items-center">
                <div className="bg-white rounded-xl ml-8 w-2/4 py-12 mt-20 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)] ">
                    <form action="" className=' flex flex-col'>

                        <h1 className="font-medium text-black text-2xl mb-8 uppercase text-center">Custom PDF Form</h1>
                        <div>
                            <input
                                type='file'
                                className='"bg-white rounded-md p-2 mb-4 mr-8 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2 w-full'
                                placeholder='Select File'
                                name='file'
                                accept='.pdf,.doc,.docx'
                                onChange={(e) => { setFile(e.target.files[0]) }}
                            />
                            <div className="flex flex-row justify-between items-start ">
                                <input
                                    type="text"
                                    className="bg-white rounded-md p-2 mb-4 mr-8 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                                    placeholder="No. of Values"
                                    name="name"
                                    onChange={(e) => setValues(e.target.value)}
                                    value={values}
                                />
                                <input
                                    className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium "
                                    type="button"
                                    value="GENERATE TABLE"
                                    onClick={() => setFormData(new Array(values).fill({}))}
                                />
                            </div>
                        </div>

                        <div className=' mx-auto '>
                            <table>
                                <tbody>
                                    {generateTable()}
                                </tbody>
                            </table>
                        </div>

                        <input
                            className="cursor-pointer rounded-md bg-outerspace text-black mx-auto w-2/4 p-2 outline-none shadow-sm shadow-black font-medium "
                            type="submit"
                            value="SUBMIT"
                            onClick={(e) => sendData(e)}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomPDFInput