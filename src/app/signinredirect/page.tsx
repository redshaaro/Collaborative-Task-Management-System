import React from "react";
import SignIn from "../components/buttons/SignIn-Button";

const SignInRedirectPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-light-grey p-4">
            <div className="bg-[#f6c75c] text-center rounded-xl p-6 font-bold w-full max-w-md m-2 shadow-lg">
                <h1 className="text-2xl text-black mb-4">Welcome to TaskSphere!</h1>
                <p className="text-black mb-6">
                    Discover a better way to manage tasks and collaborate effortlessly.{" "}
                    <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                        <SignIn />
                    </span>{" "}
                    now and get started.
                </p>
            </div>
        </div>
    );
};

export default SignInRedirectPage;
