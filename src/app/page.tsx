import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          RutaIA: Tu camino hacia nuevas oportunidades
        </h1>
        
        <div className="bg-white/30 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="text-xl mb-6 text-center">
            Capacitación personalizada en Inteligencia Artificial para profesionales que buscan 
            adaptarse al nuevo mercado laboral
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-300 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">¿Por qué RutaIA?</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contenido personalizado según tu perfil profesional</li>
                <li>Opciones para todos los presupuestos</li>
                <li>Certificación reconocida por la industria</li>
                <li>Mentorías y revisión por pares</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Completa el diagnóstico inicial</li>
                <li>Recibe tu ruta personalizada</li>
                <li>Completa los módulos a tu ritmo</li>
                <li>Desarrolla un proyecto final</li>
                <li>Obtén tu certificación</li>
              </ol>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/diagnostico"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Comenzar mi diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
