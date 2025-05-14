'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Tipo para los datos del formulario
type FormData = {
  nombre: string;
  experiencia: string;
  industria: string;
  habilidades: string[];
  objetivos: string[];
  presupuesto: string;
};

// Componente principal
export default function Diagnostico() {
  const router = useRouter();
  const [paso, setPaso] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    experiencia: '',
    industria: '',
    habilidades: [],
    objetivos: [],
    presupuesto: '',
  });

  // Opciones para los select
  const industriaOpciones = [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 
    'Manufactura', 'Retail', 'Servicios', 'Otro'
  ];

  const habilidadesOpciones = [
    'Programación', 'Análisis de datos', 'Gestión de proyectos', 
    'Diseño', 'Marketing', 'Ventas', 'Servicio al cliente', 'Educación'
  ];

  const objetivosOpciones = [
    'Cambiar de carrera a IA', 'Integrar IA en mi profesión actual',
    'Mejorar mi empleabilidad', 'Emprender con IA', 'Comprender el impacto de IA'
  ];

  const presupuestoOpciones = [
    'Sin presupuesto (solo contenido gratuito)',
    'Bajo (hasta $100 USD)',
    'Medio (hasta $500 USD)',
    'Alto (más de $500 USD)'
  ];

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar cambios en checkboxes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'habilidades' | 'objetivos') => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, [category]: [...formData[category], value] });
    } else {
      setFormData({ 
        ...formData, 
        [category]: formData[category].filter(item => item !== value) 
      });
    }
  };

  // Ir al siguiente paso
  const handleNext = () => {
    setPaso(paso + 1);
  };

  // Ir al paso anterior
  const handleBack = () => {
    setPaso(paso - 1);
  };

  // Enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí normalmente enviaríamos los datos a una API
    console.log('Datos del formulario:', formData);
    
    // Redirigir a la página de carga
    router.push('/cargando');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center mb-8">Diagnóstico Inicial</h1>
        
        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(paso / 4) * 100}%` }}
          ></div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Paso 1: Información personal */}
          {paso === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Información Personal</h2>
              
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-1">
                  Años de experiencia profesional
                </label>
                <input
                  type="number"
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                  min="0"
                />
              </div>
              
              <div>
                <label htmlFor="industria" className="block text-sm font-medium text-gray-700 mb-1">
                  Industria actual/previa
                </label>
                <select
                  id="industria"
                  name="industria"
                  value={formData.industria}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Selecciona una industria</option>
                  {industriaOpciones.map((opcion) => (
                    <option key={opcion} value={opcion}>{opcion}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          {/* Paso 2: Habilidades */}
          {paso === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Habilidades Actuales</h2>
              <p className="text-sm text-gray-600 mb-4">
                Selecciona las áreas en las que tienes experiencia o habilidades
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {habilidadesOpciones.map((opcion) => (
                  <div key={opcion} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`habilidad-${opcion}`}
                      name={`habilidad-${opcion}`}
                      value={opcion}
                      checked={formData.habilidades.includes(opcion)}
                      onChange={(e) => handleCheckboxChange(e, 'habilidades')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`habilidad-${opcion}`} className="ml-2 block text-sm text-gray-700">
                      {opcion}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Paso 3: Objetivos */}
          {paso === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Objetivos de Aprendizaje</h2>
              <p className="text-sm text-gray-600 mb-4">
                ¿Qué esperas lograr con esta capacitación?
              </p>
              
              <div className="space-y-3">
                {objetivosOpciones.map((opcion) => (
                  <div key={opcion} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`objetivo-${opcion}`}
                      name={`objetivo-${opcion}`}
                      value={opcion}
                      checked={formData.objetivos.includes(opcion)}
                      onChange={(e) => handleCheckboxChange(e, 'objetivos')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`objetivo-${opcion}`} className="ml-2 block text-sm text-gray-700">
                      {opcion}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Paso 4: Presupuesto */}
          {paso === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Presupuesto</h2>
              <p className="text-sm text-gray-600 mb-4">
                ¿Cuánto estás dispuesto a invertir en tu formación en IA?
              </p>
              
              <div className="space-y-3">
                {presupuestoOpciones.map((opcion) => (
                  <div key={opcion} className="flex items-center">
                    <input
                      type="radio"
                      id={`presupuesto-${opcion}`}
                      name="presupuesto"
                      value={opcion}
                      checked={formData.presupuesto === opcion}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required={paso === 4}
                    />
                    <label htmlFor={`presupuesto-${opcion}`} className="ml-2 block text-sm text-gray-700">
                      {opcion}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Botones de navegación */}
          <div className="mt-8 flex justify-between">
            {paso > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Anterior
              </button>
            )}
            
            {paso < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar diagnóstico
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
} 