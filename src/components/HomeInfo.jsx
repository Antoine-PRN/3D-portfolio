import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Bonjour, je suis
        <span className='font-semibold mx-2 text-white'>Antoine👋</span>
        <br />
        Un développeur Fullstack junior originaire de Dijon.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          J'ai acquéri de nombreuses compétences lors de mes stages et de mes études.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          En savoir plus
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          J'ai pu mener a bien plusieurs projets nécessitant différentes compétences.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visitez mon portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Je suis actuellement en recherche d'une alternance pour la rentrée 2024.
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Parlons-en
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;