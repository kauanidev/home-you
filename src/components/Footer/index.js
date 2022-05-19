import './styles.scss'

export function Footer() {
    return(
        <footer>
            <div className='container'>
                <ul>
                    <li><strong>Produtos</strong></li>
                    <li>Mobília</li>
                    <li>Segurança</li>
                    <li>Design Interior</li>
                </ul>
                <ul>
                    <li><strong>Mais Informações</strong></li>
                    <li>Contrato</li>
                    <li>Sobre nós</li>
                    <li>Termos e Condições</li>
                </ul>
                <ul>
                    <li><strong>Redes Sociais</strong></li>
                    <li>Pinterest</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    )
}