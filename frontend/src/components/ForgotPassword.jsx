import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../utils/config.js";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [usedEmail, setUsedEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [password, setPassword] = useState("");
    const [changePasswordInput, setChangePasswordInput] = useState(false);
    const [sendOTPButton, setSendOTPButton] = useState(true);
    const [verifyOTPButton, setVerifyOTPButton] = useState(false);

    const api = axios.create({
        baseURL,
    });

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleOTP(e) {
        setOTP(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function sendOTP() {
        const response = await api.post(
            "/auth/sendotp", { email });
        setUsedEmail(response.data.email);
        setSendOTPButton(false);
        setVerifyOTPButton(true);
    }

    async function verifyOTP() {
        const response = await api.post("/auth/verifyotp", { email, otp });
        console.log(response.data);

        if (response.data.flag) {
            setVerifyOTPButton(false);
            setChangePasswordInput(true);
        } else {
            alert(`OTP doesn't match`);
        }
    }

    async function changePassword() {
        try {
            const response = await api.post(
                "/auth/changepassword",
                {
                    email,
                    password
                }
            );
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.error("Error changing password:", error);
        }
    }

    return (
        <div className="w-full flex justify-center items-center ">
            <div className="bg-white rounded-xl ml-8 w-2/4 py-12 mt-20 flex flex-col justify-center items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                <h1 className="font-medium text-black text-2xl mb-8 uppercase text-center">Forgot Password</h1>
                <div className="flex flex-col justify-center items-start w-2/4">
                    {
                        sendOTPButton &&
                        <>
                            <input
                                type="text"
                                className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                                placeholder="Email"
                                onChange={handleEmail}
                                value={email}
                            />
                            <input
                                className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium "
                                type="submit"
                                value="SEND OTP"
                                onClick={sendOTP}
                            />
                        </>
                    }

                    {
                        verifyOTPButton &&
                        <>
                        <p>Enter the OTP</p>
                            <input
                                type="text"
                                className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                                placeholder="OTP"
                                onChange={handleOTP}
                                value={otp}
                            />
                            <input
                                className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium "
                                type="submit"
                                value="VERIFY OTP"
                                onClick={verifyOTP}
                            />
                        </>
                    }

                    {
                        changePasswordInput &&
                        <>
                            <input
                                type="text"
                                className="bg-white w-full rounded-md p-2 mb-4 placeholder-black placeholder-opacity-75 border border-solid border-gray1 focus:outline-none focus:border-gray2"
                                placeholder="Password"
                                onChange={handlePassword}
                                value={password}
                            />

                            <input
                                className="cursor-pointer rounded-md bg-outerspace text-black w-full p-2 outline-none shadow-sm shadow-black font-medium "
                                type="submit"
                                value="CHANGE PASSWORD"
                                onClick={() => changePassword()}
                            />
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
