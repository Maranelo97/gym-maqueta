import aboutImage from '../assets/img/about.png'
function About() {
  return (
    <div id="about">
        <div className="about-image">
            <img src={aboutImage} alt="about" />
        </div>
        <div className='about-text'>
            <h1>CONOCE MAS SOBRE MI</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum soluta mollitia harum, totam suscipit fuga fugit eum nesciunt maiores! Quo dolore animi sit veniam, enim ab placeat nam rerum dignissimos.</p>
        </div>
    </div>
  )
}

export default About