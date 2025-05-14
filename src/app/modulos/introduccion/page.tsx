'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function ModuloIntroduccion() {
  const [completado, setCompletado] = useState(false);

  // Función para marcar el módulo como completado
  const marcarCompletado = () => {
    setCompletado(true);
    // Aquí normalmente guardaríamos esta información en una API
    console.log('Módulo marcado como completado');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegación superior */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/ruta" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaArrowLeft className="mr-2" />
              <span>Volver a mi ruta</span>
            </Link>
            
            {completado ? (
              <span className="text-green-600 flex items-center">
                <FaCheckCircle className="mr-2" />
                Módulo completado
              </span>
            ) : (
              <button
                onClick={marcarCompletado}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Marcar como completado
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Introducción a la IA: Conceptos Fundamentales
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-4">Duración: 15 minutos</span>
            <span>Tipo: Video</span>
          </div>
          <p className="text-gray-700">
            En este módulo introductorio, aprenderás los conceptos básicos de la inteligencia artificial, 
            su historia y cómo está impactando diferentes sectores profesionales en la actualidad.
          </p>
        </div>
        
        {/* Video principal */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Video: ¿Qué es la Inteligencia Artificial?</h2>
          
          {/* Simulación de un reproductor de video (en un caso real, esto sería un iframe de YouTube o similar) */}
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-md overflow-hidden mb-4">
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-center p-4">
                <p className="mb-2">Reproductor de video simulado</p>
                <p className="text-sm">(En una implementación real, aquí se insertaría un iframe de YouTube o similar)</p>
              </div>
            </div>
          </div>
          
          <div className="text-gray-700 space-y-4">
            <p>
              La inteligencia artificial (IA) es la simulación de procesos de inteligencia humana por parte de sistemas informáticos. 
              Estos procesos incluyen el aprendizaje (la adquisición de información y reglas para usar la información), 
              el razonamiento (usar las reglas para llegar a conclusiones aproximadas o definitivas) y la autocorrección.
            </p>
            <p>
              Las aplicaciones particulares de la IA incluyen sistemas expertos, procesamiento del lenguaje natural, 
              reconocimiento de voz y visión artificial.
            </p>
          </div>
        </div>
        
        {/* Puntos clave */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Puntos clave a recordar</h2>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>La IA busca replicar o simular la inteligencia humana en máquinas.</li>
            <li>Existen diferentes tipos de IA: débil (específica para una tarea) y fuerte (capaz de realizar cualquier tarea intelectual).</li>
            <li>El machine learning es una rama de la IA que permite a las máquinas aprender de los datos sin ser explícitamente programadas.</li>
            <li>El deep learning utiliza redes neuronales con varias capas para analizar datos con una estructura similar a la del cerebro humano.</li>
            <li>La IA está transformando industrias como la salud, finanzas, transporte, educación y muchas más.</li>
          </ul>
        </div>
        
        {/* Recursos adicionales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recursos adicionales</h2>
          
          <div className="space-y-3">
            <a 
              href="https://www.ibm.com/cloud/learn/what-is-artificial-intelligence" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt className="mr-2" />
              IBM: ¿Qué es la inteligencia artificial?
            </a>
            
            <a 
              href="https://builtin.com/artificial-intelligence" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt className="mr-2" />
              Built In: Guía completa sobre IA
            </a>
            
            <a 
              href="https://www.coursera.org/learn/ai-for-everyone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt className="mr-2" />
              Coursera: IA para todos (curso gratuito)
            </a>
          </div>
        </div>
        
        {/* Botón de navegación inferior */}
        <div className="mt-8 flex justify-between">
          <Link 
            href="/ruta" 
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Volver a mi ruta
          </Link>
          
          <Link 
            href="/modulos/tipos-ia" 
            className={`px-4 py-2 rounded-md ${
              completado 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } transition-colors`}
          >
            Siguiente módulo
          </Link>
        </div>
      </div>
    </div>
  );
} 