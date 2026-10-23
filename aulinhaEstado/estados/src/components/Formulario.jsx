import { useState } from "react"

export default function Formulario() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [enviado, setEnviado] = useState(null)

    const enviar = (e) => {
        e.preventDefault()
        setEnviado({ nome, email })
    }

    return (
        <div>
            <h1>Formulário</h1>

            <form onSubmit={enviar}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input
                        id="nome"
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>

            {enviado && (
                <div>
                    <h2>Você enviou:</h2>
                    <p>Nome: {enviado.nome}</p>
                    <p>Email: {enviado.email}</p>
                </div>
            )}
        </div>
    )
}