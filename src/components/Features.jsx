import FeatureBox from "./FeatureBox"
import image1 from '../assets/img/1.svg'
import image2 from '../assets/img/2.svg'
import image3 from '../assets/img/3.svg'
import image4 from '../assets/img/4.svg'
function Features() {
  return (
    <div id="features">
        <h1>ENTRENEMOS JUNTOS</h1>
        <div className="a-container">
            <FeatureBox image={image1} title="Levantamiento de Pesas" />
            <FeatureBox image={image2} title="Acondicionamiento Fisico" />
            <FeatureBox image={image3} title="Ganancia de masa muscular" />
            <FeatureBox image={image4} title="Seguimiento constante 24/7" />
        </div>
    </div>
  )
}

export default Features