import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/config";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const api = axios.create({
        baseURL,
    });


    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    // async function handleSignup() {
    //     const response = await api.post("/auth/signup", {
    //       email: signupEmail,
    //       password: signupPassword,
    //     });
    //     localStorage.setItem("token", response.data);
    //     setCurrUser("user");
    //     setIsUserLoggedIn(true);
    //     navigate("/allcourse");
    //   }

    async function handleLogin() {
        const response = await api.post("/auth/login", {
            email,
            password,
        });
        console.log(response.data)
        localStorage.setItem("token", response.data);
        navigate("/home");
    }

    return (
        <>
            <div className=" w-full flex justify-center items-center">
                <div className=" bg-white rounded-xl ml-8 w-2/4 py-16 mt-20 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col justify-center items-center ">
                        <img src="./logo-bg.png" alt="logo" className=" w-40" />
                        <h1 className="font-bold text-black text-5xl mb-8">LOGIN</h1>
                        <div className="flex flex-col justify-center items-center">
                            <input
                                type="text"
                                className="bg-white rounded-md p-2 mb-8 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                                placeholder="USERNAME"
                                onChange={handleEmail}
                                value={email}
                            />
                            <input
                                type="password"
                                className="bg-white rounded-md p-2 mb-8 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                                onChange={handlePassword}
                                placeholder="PASSWORD"
                                value={password}
                            />
                            <input
                                className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium"
                                type="submit"
                                value="LOGIN"
                                onClick={handleLogin}
                            />
                            <p className=" mt-6 text-linkblue cursor-pointer">Forgot Password</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;