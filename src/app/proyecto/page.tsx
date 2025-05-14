'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaUpload, FaUsers, FaCertificate, FaExclamationCircle } from 'react-icons/fa';

// Posibles estados del proyecto
type ProyectoStatus = 'inicio' | 'subido' | 'revision' | 'completado';

export default function ProyectoFinal() {
  // Estado del proyecto
  const [status, setStatus] = useState<ProyectoStatus>('inicio');
  
  // Estado para el formulario
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    aplicacion: '',
    recursos: '',
    archivo: null as File | null,
  });
  
  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Manejar cambios en el archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, archivo: e.target.files[0] });
    }
  };
  
  // Manejar el envío del proyecto
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulamos el envío y cambiamos el estado
    console.log('Enviando proyecto:', formData);
    setStatus('subido');
  };
  
  // Solicitar revisión por pares
  const solicitarRevision = () => {
    setStatus('revision');
    // Aquí normalmente enviaríamos esta solicitud a un backend
  };
  
  // Simular la finalización de la revisión
  const completarProyecto = () => {
    setStatus('completado');
    // Aquí normalmente recibiríamos la confirmación desde un backend
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
            
            <div className="text-sm text-gray-500">
              Estado: {
                status === 'inicio' ? 'Preparación del proyecto' :
                status === 'subido' ? 'Proyecto subido' :
                status === 'revision' ? 'En revisión por pares' :
                'Proyecto completado'
              }
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Proyecto Final de Certificación
          </h1>
          <p className="text-gray-700">
            Aplica lo aprendido creando un proyecto práctico que demuestre tus habilidades en IA.
            Tu proyecto será revisado por otros profesionales y, una vez aprobado, recibirás tu certificado.
          </p>
        </div>
        
        {/* Indicador de progreso */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                status === 'inicio' ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'
              }`}>
                <FaUpload />
              </div>
              <span className="text-xs mt-1">Subir</span>
            </div>
            <div className="flex-1 border-t-2 border-gray-300 self-center"></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                status === 'revision' ? 'bg-blue-600 text-white' : 
                status === 'subido' ? 'bg-gray-300 text-gray-500' : 
                status === 'completado' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}>
                <FaUsers />
              </div>
              <span className="text-xs mt-1">Revisión</span>
            </div>
            <div className="flex-1 border-t-2 border-gray-300 self-center"></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                status === 'completado' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}>
                <FaCertificate />
              </div>
              <span className="text-xs mt-1">Certificado</span>
            </div>
          </div>
        </div>
        
        {/* Contenido según el estado */}
        {status === 'inicio' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Subir tu proyecto</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                  Título del proyecto
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción del proyecto
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="aplicacion" className="block text-sm font-medium text-gray-700 mb-1">
                  Aplicación en tu campo profesional
                </label>
                <textarea
                  id="aplicacion"
                  name="aplicacion"
                  rows={3}
                  value={formData.aplicacion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="recursos" className="block text-sm font-medium text-gray-700 mb-1">
                  Recursos y herramientas utilizadas
                </label>
                <textarea
                  id="recursos"
                  name="recursos"
                  rows={2}
                  value={formData.recursos}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="archivo" className="block text-sm font-medium text-gray-700 mb-1">
                  Archivo del proyecto (PDF, ZIP, DOC, etc.)
                </label>
                <input
                  type="file"
                  id="archivo"
                  name="archivo"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Tamaño máximo: 10MB. Formatos aceptados: PDF, DOC, DOCX, PPT, PPTX, ZIP.
                </p>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subir proyecto
                </button>
              </div>
            </form>
          </div>
        )}
        
        {status === 'subido' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-center mb-6 text-green-500">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Proyecto subido correctamente</h2>
            <p className="text-gray-700 text-center mb-6">
              Tu proyecto ha sido recibido. A continuación, puedes solicitar que sea revisado por otros profesionales.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaExclamationCircle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Recuerda que el proceso de revisión puede tomar entre 3 y 5 días hábiles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={solicitarRevision}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Solicitar revisión por pares
              </button>
            </div>
          </div>
        )}
        
        {status === 'revision' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="text-center mb-6">
              <div className="inline-block rounded-full bg-blue-100 p-3">
                <FaUsers className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Tu proyecto está siendo revisado</h2>
              <p className="text-gray-600">
                Otros profesionales están evaluando tu trabajo. Te notificaremos cuando la revisión esté completa.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Detalles del proyecto</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Título:</span> {formData.titulo || 'Proyecto de IA aplicada'}
                </div>
                <div>
                  <span className="font-medium">Fecha de envío:</span> {new Date().toLocaleDateString()}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-medium">Estado:</span> En revisión
                </div>
              </div>
            </div>
            
            {/* Esto es solo para simular el proceso de revisión */}
            <div className="flex justify-center mt-8">
              <button
                onClick={completarProyecto}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Simular finalización de revisión
              </button>
            </div>
          </div>
        )}
        
        {status === 'completado' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="text-center mb-6">
              <div className="inline-block rounded-full bg-green-100 p-3">
                <FaCertificate className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">¡Felicidades! Tu proyecto ha sido aprobado</h2>
              <p className="text-gray-600">
                Has completado con éxito el programa de capacitación en IA. Ya puedes descargar tu certificado.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-green-800 mb-2">Certificado de Capacitación en IA</h3>
                <p className="text-green-700 mb-4">Este documento certifica que has completado satisfactoriamente el programa de formación en Inteligencia Artificial para profesionales.</p>
                <div className="border-4 border-green-700 border-double p-6 max-w-md mx-auto">
                  <div className="text-green-800">
                    <h4 className="text-xl font-serif mb-2">Certificado</h4>
                    <p className="font-medium mb-1">Se otorga a:</p>
                    <p className="text-lg font-semibold mb-4">{formData.titulo ? formData.titulo.split(' ')[0] : 'Usuario'}</p>
                    <p className="mb-4">Por completar exitosamente el programa de:</p>
                    <p className="text-lg font-bold mb-4">Capacitación en Inteligencia Artificial</p>
                    <p className="text-sm">Fecha: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Descargar certificado
                </button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/ruta"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Volver a mi ruta de aprendizaje
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 