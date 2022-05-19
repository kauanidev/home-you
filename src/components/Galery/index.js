import './styles.scss'

export function Galery() {
    const images = [
        {
            alt: 'Chair',
            src: '/galery1.png'
        },
        {
            alt: 'Fireplace',
            src: '/galery2.png'
        },
        {
            alt: 'Bathroom',
            src: '/galery3.png'
        }
    ];

    return(
        <section className='galery'>
            <div className='container'>
                <h2>Galeria</h2>
                <p>Se você está entediado com a aparência da decoração de interiores da casa comuns,<br/>
                    trabalhamos com designs diferentes e inovadores.
                </p>
                <section className='pics'>
                    {images.map((item) => {
                        return (
                            <img key={item.alt} src={item.src} alt={item.alt} />
                        )
                    })}
                </section>
            </div>
        </section>
    )
}