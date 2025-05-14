'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaLock, FaUnlock, FaCreditCard, FaPaypal } from 'react-icons/fa';

// Tipos de planes disponibles
type Plan = {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  caracteristicas: string[];
  recomendado: boolean;
};

export default function PaginaPago() {
  const router = useRouter();
  const [planSeleccionado, setPlanSeleccionado] = useState<string | null>(null);
  const [metodoPago, setMetodoPago] = useState<'tarjeta' | 'paypal'>('tarjeta');
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);

  // Planes disponibles
  const planes: Plan[] = [
    {
      id: 'basico',
      nombre: 'Básico',
      precio: 49.99,
      descripcion: 'Acceso a todos los módulos premium por 1 mes',
      caracteristicas: [
        'Acceso a contenido premium',
        'Certificado de finalización',
        'Soporte por correo electrónico',
      ],
      recomendado: false
    },
    {
      id: 'completo',
      nombre: 'Completo',
      precio: 99.99,
      descripcion: 'Acceso a todos los módulos premium por 3 meses',
      caracteristicas: [
        'Acceso a contenido premium',
        'Certificado de finalización',
        'Soporte por correo electrónico',
        'Revisión de proyecto prioritaria',
        'Webinars exclusivos mensuales',
      ],
      recomendado: true
    },
    {
      id: 'empresarial',
      nombre: 'Empresarial',
      precio: 199.99,
      descripcion: 'Acceso ilimitado para equipos de hasta 5 personas',
      caracteristicas: [
        'Todo lo del plan Completo',
        'Acceso para 5 usuarios',
        'Mentorías personalizadas',
        'Contenido adaptado a tu industria',
        'Soporte prioritario',
      ],
      recomendado: false
    }
  ];

  // Simular proceso de pago
  const procesarPago = (e: React.FormEvent) => {
    e.preventDefault();
    if (!planSeleccionado) return;
    
    setCargando(true);
    
    // Simulamos una llamada a API de pago
    setTimeout(() => {
      setCargando(false);
      setExito(true);
      
      // Después de un tiempo, redirigimos al usuario a la ruta
      setTimeout(() => {
        router.push('/ruta');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegación superior */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/ruta" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaArrowLeft className="mr-2" />
              <span>Volver a mi ruta</span>
            </Link>
            
            <div className="flex items-center space-x-1">
              <FaLock className="text-gray-400" />
              <span className="text-sm text-gray-500">Conexión segura</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!exito ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-800">Desbloquea el contenido premium</h1>
              <p className="mt-3 text-gray-600">
                Accede a todos los módulos avanzados y obtén tu certificación completa en IA
              </p>
            </div>
            
            {/* Selección de plan */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Selecciona tu plan</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {planes.map((plan) => (
                  <div 
                    key={plan.id} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all relative ${
                      planSeleccionado === plan.id 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-transparent hover:border-gray-200'
                    } ${plan.recomendado ? 'md:scale-105' : ''}`}
                  >
                    {plan.recomendado && (
                      <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 text-center">
                        RECOMENDADO
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {plan.nombre}
                      </h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">${plan.precio}</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {plan.descripcion}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.caracteristicas.map((caracteristica, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="text-green-500 w-5 h-5 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button
                        type="button"
                        onClick={() => setPlanSeleccionado(plan.id)}
                        className={`w-full py-2 px-4 rounded-md ${
                          planSeleccionado === plan.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        } transition-colors`}
                      >
                        {planSeleccionado === plan.id ? 'Seleccionado' : 'Seleccionar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Formulario de pago */}
            {planSeleccionado && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Método de pago</h2>
                
                <div className="flex mb-6 border rounded-md overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMetodoPago('tarjeta')}
                    className={`flex-1 py-3 px-4 text-center flex items-center justify-center ${
                      metodoPago === 'tarjeta'
                        ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                        : 'bg-white text-gray-700'
                    }`}
                  >
                    <FaCreditCard className="mr-2" />
                    <span>Tarjeta de crédito</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMetodoPago('paypal')}
                    className={`flex-1 py-3 px-4 text-center flex items-center justify-center ${
                      metodoPago === 'paypal'
                        ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                        : 'bg-white text-gray-700'
                    }`}
                  >
                    <FaPaypal className="mr-2" />
                    <span>PayPal</span>
                  </button>
                </div>
                
                {metodoPago === 'tarjeta' && (
                  <form onSubmit={procesarPago} className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre en la tarjeta
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                        Número de tarjeta
                      </label>
                      <input
                        type="text"
                        id="numero"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiracion" className="block text-sm font-medium text-gray-700 mb-1">
                          Fecha de expiración
                        </label>
                        <input
                          type="text"
                          id="expiracion"
                          placeholder="MM/AA"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          Código de seguridad
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-6">
                      <input
                        id="guardar"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="guardar" className="ml-2 block text-sm text-gray-700">
                        Guardar esta tarjeta para futuros pagos
                      </label>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        className={`w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                          cargando ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                        disabled={cargando}
                      >
                        {cargando ? 'Procesando...' : `Pagar $${planes.find(p => p.id === planSeleccionado)?.precio.toFixed(2)}`}
                      </button>
                      <p className="mt-2 text-xs text-gray-500 text-center">
                        Tu información de pago está segura y encriptada
                      </p>
                    </div>
                  </form>
                )}
                
                {metodoPago === 'paypal' && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-6">Serás redirigido a PayPal para completar tu pago de manera segura.</p>
                    <button
                      type="button"
                      onClick={procesarPago}
                      className="py-3 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      disabled={cargando}
                    >
                      {cargando ? 'Procesando...' : 'Continuar a PayPal'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex items-center justify-center mb-6 text-green-500">
              <FaUnlock className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Pago completado con éxito!</h2>
            <p className="text-gray-600 mb-6">
              Has desbloqueado con éxito el contenido premium. Ahora tienes acceso a todos los módulos avanzados.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Te estamos redirigiendo a tu ruta personalizada...
            </p>
            <div className="w-24 h-1 bg-gray-200 rounded-full mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-green-500 animate-loadingBar"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 