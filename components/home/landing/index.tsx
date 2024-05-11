import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-blue-400">
                <div className="bg-white p-16 rounded shadow-2xl w-2/3 text-center">
                    <h2 className="text-3xl font-bold mb-10 text-gray-800">Bienvenido al Sistema de Gestión de Empleados</h2>
                    <p className="mb-6 text-gray-700">Por favor, inicia sesión para continuar.</p>
                    <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Iniciar sesión
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default Index
