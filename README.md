# Portafolio de e-learning — David Moreno Abril

Repositorio de demos interactivos de Learning & Development, pensado para reclutadores y agencias en EE. UU.

**Sitio publicado:** https://deivblack.github.io/elearning-demos/

## Qué incluye

| Demo | Carpeta / enlace | Notas |
|------|------------------|--------|
| Onboarding Academy (HTML/CSS/JS gamificado) | `onboarding-demo/` | Selector EN \| ES |
| Manual de Usuario — Actores del proceso (SCORM / Storyline) | `demo-manual-usuario/` | Muestra en español; no editar archivos generados por Storyline |
| Prime Choice — Outbound (piloto warehouse) | `demos/prime-choice/` | ES / EN / 简体 dentro del demo |
| New Hire Orientation (Articulate Rise) | Variable `RISE_DEMO_URL` en `index.html` | Botón desactivado hasta pegar el enlace |

## Cómo agregar un demo nuevo

1. Crea una carpeta en la raíz del repo (por ejemplo `mi-nuevo-demo/`).
2. Coloca ahí el contenido publicado (HTML o paquete SCORM/HTML5).
3. En `index.html`, añade una ficha (tarjeta) con título, reto, audiencia, rol, herramientas, características y un botón que apunte a esa carpeta.
4. Si el demo tiene textos bilingües, sigue el mismo patrón EN \| ES (objeto de textos + `textContent`).
5. Haz un commit y, cuando lo confirmes, un `git push` a la rama que publica GitHub Pages (ahora: `manual-demo`).

## Dónde va el enlace de la muestra de Rise

Abre `index.html` y busca al inicio del `<script>` la variable:

```js
const RISE_DEMO_URL = '';
```

Pega la URL completa de Articulate Rise entre las comillas. Al guardar, el botón "View demo" de esa tarjeta se activa solo.

## Tecnología

Solo HTML, CSS y JavaScript (más Google Fonts). Sin frameworks, sin npm y sin build.

## Autor

David Moreno Abril · Learning & Development · Bilingüe (EN/ES) · Houston, TX  
LinkedIn: https://www.linkedin.com/in/dmorenoabril/  
Correo: dmorenoabril@gmail.com
