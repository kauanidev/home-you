import './styles.scss'

export function Details() {
    return(
        <section className='container details'>
            <img src='/img2.png'/>
            <div className='text'>
                <div>
                    <h2>Design Minimalista</h2>
                    <p>
                    Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.
                    </p>
                </div>
                <a href='#'>Quero saber mais sobre os designs</a>
            </div>
        </section>
    )
}