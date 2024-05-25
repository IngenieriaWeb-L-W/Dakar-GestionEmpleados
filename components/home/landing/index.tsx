import React from 'react';
//import Link from 'next/link';
//import {Session} from "@/components/home/session";

const Landing = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto text-center">
                <div className="mb-6 lg:text-3xl">
                    <h2 className="text-2xl font-bold mb-6 lg:text-3xl dark:text-white">Welcome to the Employee Management System</h2>
                    
                </div>
                <div className="absolute top-4 right-4">
                    {/*<Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Iniciar sesión
                        </Link>*/}

                    
                </div>
                
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
                <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:mr-4">
                        <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <div className="">
                        <p className="font-bold mb-6 lg:text-xl dark:text-white">
                        Please log in to access all the features of our employee management system.
                        </p>
                        {/* Aquí puedes agregar más texto o contenido según sea necesario */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export {Landing}
