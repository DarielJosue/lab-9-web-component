# Lab 9 - Web Components

Proyecto de laboratorio que implementa Web Components personalizados para la Sede Guanacaste de la Universidad de Costa Rica (UCR).

## Descripción

Este proyecto desarrolla componentes web reutilizables para mostrar información de la sede, incluyendo:

- **PosterAulas**: Componente que muestra un directorio/señalética del campus con información de aulas y departamentos
- **PosterAcoso**: Componente para la campaña de concienciación contra el acoso en la sede

## Estructura del Proyecto

```
src/
├── index.html              # Página principal
├── main.js                 # Punto de entrada de módulos
├── components/
│   ├── PosterAulas.js      # Web Component para señalética de aulas
│   └── PosterAcoso.js      # Web Component para campaña anti-acoso
├── css/
│   └── global.css          # Estilos globales
├── assets/
│   └── images/             # Imágenes del proyecto
└── modules/                # Módulos adicionales
```

## Instalación y Uso

### Requisitos

- Node.js (con pnpm como gestor de paquetes)

### Instalación

```bash
pnpm install
```

### Desarrollo

```bash
pnpm run dev
```

Inicia un servidor local en `http://localhost:1234` con recarga automática.

### Build

```bash
pnpm run build
```

### Deploy

```bash
pnpm run deploy
```

Despliega el proyecto en GitHub Pages.

## Componentes

### PosterAulas

Web Component que muestra un panel de signos con información de aulas y departamentos.

**Uso:**

```html
<poster-aulas id="mi-poster"></poster-aulas>

<script>
  const poster = document.getElementById("mi-poster");
  poster.aulasData = [
    "Aulas 1, 2, 3",
    "Apoyo informático",
    "Servidores",
    "Lab 1 y 2",
    "Coordinación",
    "Informática Empresarial",
    "UCR",
  ];
</script>
```

### PosterAcoso

Web Component para la campaña de concienciación contra el acoso.

## Dependencias

- **servor**: Servidor web liviano para desarrollo

## Licencia

ISC

## Autor

Multimedios - UCR Sede Guanacaste
