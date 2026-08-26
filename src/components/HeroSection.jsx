import hero from '../assets/hero.png'
// imagem preciso importar quando está SRC. Caso estiver na public não precisa importar

const HeroSection = ({titulo, subtitulo, textoBotao}) => {
// criação do componente com 3 propriedades

    const nome = "Carol"


    return (
        <section className="banner">
            <div className="banner-text">
                <h1>{titulo}</h1>
                {nome}
                <p>{subtitulo}</p>
                <button className="btn-primary">{textoBotao}</button>
            </div>
            <img className="banner-image" src={hero} alt="Banner de promoção da loja" />
        </section>
    )
}

export default HeroSection
// exportar o HeroSection