import { useState, useEffect } from 'react'

export default function Lista() {
    const [usuarios, setUsuarios] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {


        setTimeout(() => {
            const listaUsuarios = [
                {
                    id: 1,
                    nome: "Liz Macedo",
                    email: "liz@gmail.com"
                },
                {
                    id: 2,
                    nome: "Virginia Fonseca",
                    email: "virginia@gmail"
                },
                {
                    id: 3,
                    nome: "Vini Jr",
                    email: "vini@gmail.com"
                },
                {
                    id: 4,
                    nome: "Érica Hilton",
                    email: "erica@gmail.com"
                }
            ]

            setUsuarios(listaUsuarios)
            setCarregando(false)

        }, 4000)
    })

    return (
        <div>
            <h1>Lista de usuario</h1>
            {carregando ? (
                <p>Carregando dados...</p>
            ) : (
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome}, {usuario.email}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}