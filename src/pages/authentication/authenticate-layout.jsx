import { background } from '@/assets/images/template';
import React from "react";
const AuthenticateLayout = ({ children }) => {
    return (
        <>
            <main className="mt-8 flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div
                        className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md dark:bg-white">
                        <div className="md:max-w-md w-full sm:px-6 py-4">
                            { children }
                        </div>
                        <div className="md:h-full max-md:mt-10 bg-[#000842] rounded-xl lg:p-12 p-8">
                            <img
                                src={ background }
                                className="w-full h-full object-contain"
                                alt="login-image"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AuthenticateLayout;