# RutaIA - Plataforma de Capacitación en IA

RutaIA es una aplicación web construida con Next.js que ofrece capacitación personalizada en Inteligencia Artificial para trabajadores y profesionales desplazados de sus empleos a causa de la implementación de IA en sus empresas.

## Características principales

- **Quiz diagnóstico inicial**: Recopila información sobre el perfil profesional, objetivos y presupuesto del usuario.
- **Rutas personalizadas**: Genera un plan de aprendizaje adaptado a las necesidades específicas de cada usuario.
- **Contenido diverso**: Incluye módulos con videos, lecturas y ejercicios interactivos.
- **Sistema de validación**: Permite marcar contenido gratuito como completado o subir certificados de plataformas externas.
- **Proyecto final**: Los usuarios culminan su capacitación con un proyecto práctico revisado por pares.
- **Certificación**: Al finalizar satisfactoriamente, se otorga un certificado de capacitación en IA.

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/) - Framework de React con enrutamiento y herramientas de construcción
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animaciones en React
- [React Icons](https://react-icons.github.io/react-icons/) - Colección de iconos para React

## Estructura del proyecto

- `/src/app/` - Componentes principales de la aplicación usando el App Router de Next.js
- `/src/app/diagnostico/` - Quiz diagnóstico inicial
- `/src/app/cargando/` - Pantalla de carga mientras se genera la ruta
- `/src/app/ruta/` - Visualización de la ruta personalizada y módulos
- `/src/app/modulos/` - Contenido de los diferentes módulos de aprendizaje
- `/src/app/proyecto/` - Implementación del proyecto final y revisión por pares
- `/src/app/pagar/` - Sistema de pago para desbloquear contenido premium

## Cómo ejecutar localmente

1. Clona este repositorio

   ```bash
   git clone https://github.com/tu-usuario/ruta-ia-app.git
   cd ruta-ia-app
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Requisitos del sistema

- Node.js 18.0 o superior
- npm 9.0 o superior

## Implementación en producción

Esta aplicación está optimizada para despliegue en Vercel, pero puede ser desplegada en cualquier plataforma que soporte Next.js.

Para desplegar en Vercel:

```bash
npm install -g vercel
vercel
```

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarnos:

- Correo: info@rutaia.com
- Twitter: [@RutaIA](https://twitter.com/RutaIA)
