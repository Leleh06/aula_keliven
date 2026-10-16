import Button from "./Button"
import "./Card.css"


export default function Card(
    {
        imagem,
        categoria,
        nome,
        preco
    }
) {
    const categoriaClasse = categoria
    return (
        <article className="card">

            <div className={`categoria ${categoriaClasse}`}>
                <span>{categoria}</span>
            </div>

            <div className="informacao">
                <h1 className="imagem">{imagem}</h1>
                <h2 className="nome">{nome}</h2>
                <h1 className="preco">{preco}</h1>
            </div>

            <Button titulo={"Comprar"}></Button>

        </article>
    )
}