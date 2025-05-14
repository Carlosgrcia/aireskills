'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Cargando() {
  const router = useRouter();

  // Simular el tiempo de carga y redireccionar a la página de ruta
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/ruta');
    }, 5000); // 5 segundos de animación de carga

    return () => clearTimeout(timer);
  }, [router]);

  // Variantes para las animaciones
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animación del punto de carga
  const loadingDotVariants = {
    initial: { scale: 0.8, opacity: 0.4 },
    animate: { 
      scale: 1.2, 
      opacity: 1,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        duration: 0.6 
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <motion.div 
        className="text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className="text-3xl font-bold mb-6 text-gray-800"
          variants={itemVariants}
        >
          Generando tu Ruta de Aprendizaje
        </motion.h1>
        
        <motion.div 
          className="w-24 h-24 mb-8 mx-auto relative"
          variants={itemVariants}
        >
          <motion.div 
            className="w-24 h-24 border-t-4 border-blue-600 border-solid rounded-full absolute"
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "linear" 
            }}
          />
        </motion.div>
        
        <motion.p 
          className="text-lg text-gray-600 mb-2"
          variants={itemVariants}
        >
          Estamos analizando tu perfil y preparando el contenido personalizado
        </motion.p>
        
        <motion.div 
          className="flex space-x-2 justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="w-3 h-3 bg-blue-600 rounded-full"
            variants={loadingDotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0 }}
          />
          <motion.div 
            className="w-3 h-3 bg-blue-600 rounded-full"
            variants={loadingDotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          />
          <motion.div 
            className="w-3 h-3 bg-blue-600 rounded-full"
            variants={loadingDotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          />
        </motion.div>
        
        <motion.div
          className="mt-12 p-4 bg-gray-100 rounded-lg max-w-md mx-auto"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-600 italic">
            "La inteligencia artificial no es un reemplazo para los humanos, sino una herramienta que potencia nuestras capacidades."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
} 