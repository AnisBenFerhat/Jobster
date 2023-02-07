import logo from '../assets/images/logo.svg';
import mainLogo from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='Jobster Logo' className='logo' />
      </nav>
      <div className='container page'>
        {/*Info Here*/}
        <div className='info'>
          <h1>
            Job <span>Tracking App</span>
          </h1>
          <p>
            Fixie kitsch raclette schlitz succulents hashtag vaporware craft beer vice DSA lo-fi fashion axe tbh. Paleo
            vinyl bespoke mukbang pitchfork next level church-key brunch VHS readymade.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={mainLogo} alt='Lady Hunting for a Job' className='img main-img' />
      </div>
    </main>
  );
};

export default Landing;
