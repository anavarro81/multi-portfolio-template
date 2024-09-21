import React from 'react'

import fotoChico from '../src/assets/fotoChico.jpg'
import fotoChica from '../src/assets/fotoChica.jpg'

import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaPython, FaVuejs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql } from 'react-icons/si';


const porfolios = [    
    {
        id: 1,
        name: 'Antonio Navarro',
        photo: fotoChico,
        tecnologies: ['React', 'Node.js', 'MongoDB'],
        linkedin:'https://linkedin.com/in/antonioNavarro',
        github: 'https://github.com/in/antonioNavarro',
    },
    
    {
        id: 2,
        name: 'Juan Perez',
        photo: fotoChico,
        tecnologies: ['React', 'Express', 'MySQL'],
        linkedin: 'https://linkedin.com/in/juanPerez',
        github: 'https://github.com/juanPerez'
      },

      {
        id: 3,
        name: 'Maria Martin',
        photo: fotoChica,
        tecnologies: ['React', 'Node.js', 'MongoDB'],
        linkedin: 'https://linkedin.com/in/MariaMartin',
        github: 'https://github.com/MariaMartin'
      }
]

const getTechIcon = (tech) => {
  
  switch(tech) {
    case 'React': return <FaReact className="text-blue-500" />;
    case 'Node.js': return <FaNodeJs className="text-green-500" />;
    case 'MongoDB': return <SiMongodb className="text-green-700" />;
    case 'Express': return <SiExpress className="text-gray-500" />;
    case 'MySQL': return <SiMysql className="text-blue-800" />;
  }
}





const PortfolioGrid = () => {
  return (
    
    <div className='container mx-auto px-4 py-8'>
        
        <h1 className='text-3xl font-bold text-center mb-8'> Han colaborado </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {porfolios.map((porfolio) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">   
                <img
                    src={porfolio.photo}
                    alt={`foto de ${porfolio.name}`}
                    className="w-full h-64 object-cover"
                />

              <div className="p-6">
                  <h2 className='text-xl font-semibold mb-2'> {porfolio.name} </h2> 
                  <div className='mb-4'>
                      <h3 className='text-sm font-medium text-gray-600 mb-2'> Tecnologias: </h3>
                      <div className='flex flex-wrap gap-3'> 
                        {porfolio.tecnologies.map((tech, index) => (

                          <div key={index} className='flex items-center bg-gray-100 rounded-full px-3 py-1'>
                              {getTechIcon(tech)}
                              <span className="ml-2 text-sm text-gray-800">{tech}</span>
                          </div>
                        ))}                   
                      </div>
                  </div>
{/* RRSS */}

              <div className='flex justify-start space-x-4'>
              <a 
                  href={porfolio.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${porfolio.name}'s LinkedIn profile`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href={porfolio.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${porfolio.name}'s GitHub profile`}
                  className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              </div>

            </div>
        ))}
        </div>

    </div>
  )
}

export default PortfolioGrid