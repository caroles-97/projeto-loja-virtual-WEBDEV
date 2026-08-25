import hero from '../assets/hero.png'

const HeroSection = ({titulo, subtitulo, textoBotao}) => {

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