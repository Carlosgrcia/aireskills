'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaVideo, FaBook, FaLaptopCode, FaCheckCircle, FaLock, FaCertificate } from 'react-icons/fa';

// Tipos
type ModuleType = 'video' | 'lectura' | 'ejercicio';
type ModuleStatus = 'locked' | 'available' | 'completed';
type PaymentType = 'free' | 'paid';

interface Module {
  id: string;
  title: string;
  description: string;
  type: ModuleType;
  status: ModuleStatus;
  paymentType: PaymentType;
  durationMinutes: number;
  linkToContent?: string;
}

export default function RutaPersonalizada() {
  // Estado para módulos (normalmente vendría de una API)
  const [modules, setModules] = useState<Module[]>([
    {
      id: 'm1',
      title: 'Introducción a la IA: Conceptos Fundamentales',
      description: 'Comprende qué es la inteligencia artificial, su historia y aplicaciones actuales.',
      type: 'video',
      status: 'available',
      paymentType: 'free',
      durationMinutes: 15,
      linkToContent: '/modulos/introduccion'
    },
    {
      id: 'm2',
      title: 'Tipos de IA y sus capacidades',
      description: 'Aprende sobre IA débil vs. fuerte, aprendizaje automático, redes neuronales y más.',
      type: 'lectura',
      status: 'locked',
      paymentType: 'free',
      durationMinutes: 25,
      linkToContent: '/modulos/tipos-ia'
    },
    {
      id: 'm3',
      title: 'Herramientas básicas de IA para profesionales',
      description: 'Explora herramientas prácticas de IA que pueden ayudarte en tu campo profesional.',
      type: 'ejercicio',
      status: 'locked',
      paymentType: 'free',
      durationMinutes: 40,
      linkToContent: '/modulos/herramientas'
    },
    {
      id: 'm4',
      title: 'Curso avanzado: Aplicaciones de IA en tu industria',
      description: 'Analiza cómo la IA está transformando tu sector específico.',
      type: 'video',
      status: 'locked',
      paymentType: 'paid',
      durationMinutes: 60,
      linkToContent: '/modulos/aplicaciones-industria'
    },
    {
      id: 'm5',
      title: 'Proyecto práctico: Implementando soluciones de IA',
      description: 'Crea tu propio proyecto de IA aplicado a un problema real de tu campo profesional.',
      type: 'ejercicio',
      status: 'locked',
      paymentType: 'paid',
      durationMinutes: 120,
      linkToContent: '/modulos/proyecto'
    },
  ]);

  // Función para marcar un módulo como completado
  const completeModule = (moduleId: string) => {
    setModules(modules.map(module => {
      if (module.id === moduleId) {
        // Marcar el módulo actual como completado
        return { ...module, status: 'completed' as ModuleStatus };
      } else if (modules.findIndex(m => m.id === moduleId) + 1 === modules.findIndex(m => m.id === module.id)) {
        // Desbloquear el siguiente módulo
        return { ...module, status: 'available' as ModuleStatus };
      }
      return module;
    }));
  };

  // Obtener el porcentaje de progreso
  const progressPercentage = Math.round(
    (modules.filter(m => m.status === 'completed').length / modules.length) * 100
  );

  // Obtener el icono según el tipo de módulo
  const getModuleIcon = (type: ModuleType) => {
    switch (type) {
      case 'video': return <FaVideo className="text-blue-600" />;
      case 'lectura': return <FaBook className="text-green-600" />;
      case 'ejercicio': return <FaLaptopCode className="text-purple-600" />;
      default: return null;
    }
  };

  // Variantes para las animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const moduleVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tu Ruta de Aprendizaje en IA</h1>
          <p className="text-lg text-gray-600">
            Hemos personalizado este plan según tus objetivos y experiencia profesional
          </p>
          
          {/* Barra de progreso */}
          <div className="mt-8 w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">Progreso: {progressPercentage}% completado</p>
        </div>

        {/* Lista de módulos */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {modules.map((module, index) => (
            <motion.div 
              key={module.id}
              className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                module.status === 'completed' ? 'border-green-500' : 
                module.status === 'available' ? 'border-blue-500' : 'border-gray-300'
              } relative`}
              variants={moduleVariants}
            >
              {/* Número de paso */}
              <div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    {getModuleIcon(module.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                      {module.title}
                      {module.paymentType === 'paid' && (
                        <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Premium
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                      <span>Duración: {module.durationMinutes} min</span>
                      <span className="flex items-center">
                        {module.type === 'video' && 'Video'}
                        {module.type === 'lectura' && 'Lectura'}
                        {module.type === 'ejercicio' && 'Ejercicio interactivo'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  {module.status === 'completed' ? (
                    <FaCheckCircle className="text-green-500 text-2xl" />
                  ) : module.status === 'locked' ? (
                    <FaLock className="text-gray-400 text-xl" />
                  ) : module.paymentType === 'free' ? (
                    <button
                      onClick={() => completeModule(module.id)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      Marcar como completado
                    </button>
                  ) : (
                    <Link 
                      href="/pagar"
                      className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 transition-colors"
                    >
                      Desbloquear
                    </Link>
                  )}
                </div>
              </div>
              
              {/* Acciones adicionales para módulos completados o disponibles */}
              {(module.status === 'completed' || module.status === 'available') && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    {module.status === 'completed' && (
                      <span className="text-sm text-green-600 flex items-center">
                        <FaCheckCircle className="mr-1" /> Completado
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    {module.status === 'completed' && module.paymentType === 'paid' && (
                      <button
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors flex items-center"
                      >
                        <FaCertificate className="mr-1" /> Ver certificado
                      </button>
                    )}
                    
                    <Link 
                      href={module.linkToContent || '#'} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded hover:bg-blue-100 transition-colors"
                    >
                      {module.status === 'completed' ? 'Revisar de nuevo' : 'Ver contenido'}
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Proyecto final */}
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-md border border-blue-200 mt-8"
            variants={moduleVariants}
          >
            <h3 className="text-xl font-bold text-blue-800 mb-3">Proyecto Final de Certificación</h3>
            <p className="text-gray-700 mb-4">
              Aplica lo aprendido en un proyecto práctico que será revisado por otros profesionales.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <div className="text-sm text-gray-600">
                Disponible cuando completes todos los módulos requeridos
              </div>
              <Link 
                href="/proyecto"
                className={`px-4 py-2 rounded text-center ${
                  progressPercentage >= 80 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {progressPercentage >= 80 ? 'Comenzar proyecto' : 'Bloqueado'}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 