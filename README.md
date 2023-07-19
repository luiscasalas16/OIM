# OIM

tareas:

- Se genera la plantilla de aplicación utilizando 'npm create vite@latest'.
  - Project name: ... oim
  - Select a framework: » React
  - Select a variant: » TypeScript
- Se publica la aplicación en GitHub Pages.
  - Cambio de carpeta de output del build a 'docs', para compatibilidad con github docs.
  - Cambio de url base a 'OIM', para compatibilidad con github docs.
- Se habilita el uso de Carbon.
  - npm install @carbon/react
  - npm install sass
  - referencias
    - https://carbondesignsystem.com/components/overview
    - https://react.carbondesignsystem.com/?path=/docs/getting-started-welcome--welcome
    - https://github.com/carbon-design-system/carbon-tutorial/tree/v11-react-step-5
- Se habilita el uso del mapa.
  - npm install --save react-simple-maps
  - referencias
    - https://www.react-simple-maps.io/docs/getting-started
    - https://github.com/topojson/world-atlas
- Se habilita el uso de datos con API público.
  - https://restcountries.com/
- Se avanzan en la contrucción de la interfaz gráfica.

notas:

- Se intentó utilizar TypeScript sin embargo existen algunos tipos en Carbon que no están definidos y se genera un error, por lo que se optó por utilizar JavaScript.

comandos:

- `npm install` : completar depedencias.
- `npm run dev` : iniciar en desarrollo.
- `npm run build` : construir la publicación para producción.
