import './styles.scss';

export function Header() {
    return (
        <header className='container'>
            <img src='/logo.png' alt='logotipo HomeYou'/>
            <section>
                <div className='links'>
                    <a href='#'>Início</a>
                    <a href='#'>Galeria</a>
                    <a href='#'>Contato</a>
                </div>
                <div className='icons'>
                    <img src='/fi_user.png' alt='perfil'/>
                    <img src='/fi_heart.png' alt='favoritos'/>
                    <img src='/fi_search.png' alt='buscar'/>
                </div>
            </section>
        </header>
    )
}