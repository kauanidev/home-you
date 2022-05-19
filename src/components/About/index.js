import './styles.scss'

export function About() {
    return(
        <section className='about'>
            <div className="container">
                <div className='left'>
                    <h1>
                        Ajudar você a encontrar<br/>
                        o melhor conforto,<br/>
                        é nossa prioridade.
                    </h1>
                    <p>
                        Encontre uma variedade de propriedades que<br/>combinam com você. Esqueça todas as dificuldades<br/>em encontrar uma residência
                    </p>
                    <div>
                        <button>Entre em contato</button>
                        <a href="#">Mais sobre nós</a>
                    </div>
                </div>
                <img src="/img.png"/>
            </div>
        </section>
    )
}