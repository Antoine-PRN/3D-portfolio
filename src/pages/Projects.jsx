import { arrow } from "../assets/icons";
import CTA from "../components/cta";
import { projects } from "../constants";
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Mes <span className="blue-gradient_text font-semibold drop-shadow">Projets</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>J'ai eu l'occasion de travailler sur différents projets mais voici ceux qui sont le plus représentatifs de mes compétences.
          Certains d'entre eux sont des projets personnels, professionnels ou bien dans le cadre de mes études.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map(project => (

          <div className="lg:w-[400px] w-full" key={project.id}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <span className="text-slate-500 mb-2 font-poppins font-semibold">{project.type}</span>
              <p className="mt-2 text-slate-500">{project.description}</p>
              {project.link && (
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                    Découvrir
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects