![image](https://github.com/JorgeFragaCal/prueba-tecnica-zara-challenge/assets/miniatura)

![image](https://github.com/JorgeFragaCal/prueba-tecnica-zara-challenge/assets/performance)

![image](https://github.com/JorgeFragaCal/prueba-tecnica-zara-challenge/assets/test)


# DESPLEGADO 
[Prueba Técnica Zara Challenge](https://prueba-tecnica-zara-challenge.vercel.app/)

## INTRODUCCIÓN
El objetivo de esta prueba es la creación de una aplicación web enfocada en la visualización,
búsqueda y gestión de un catálogo de teléfonos móviles. La aplicación debe permitir a los
usuarios consultar detalles específicos de cada dispositivo, así como gestionar un carrito de
compras de manera eficiente.


## Tech stack
Se ha seguido un patrón de diseño basado en DDD

- Vite

- Vitest / React Testing Library

- React

- TypeScript

- Wouter

- CSS Modules



## Code architecture

```
src/
│
├── application/                # Casos de uso y lógica de aplicación
│   └── usecases/               # Operaciones principales (añadir al carrito, buscar, etc.)
│
│
├── assets/                     # imagenes
│
├── context/                    # Context API para carrito, etc.
│   └── CartContext.tsx
|
├── domain/                     # Dominio puro (sin React)
│   └── models/                 # Entidades principales (Phone, CartItem)
│
├── hooks/                      # Hooks personalizados
|
├── infrastructure/             # Implementaciones reales (API, localStorage)
│   ├── api/                    # Llamadas a la API REST
│   └── persistence/            # Implementación concreta del carrito con localStorage
|   └── cache/                  # Cache para las peticiones a la API
|   └── adapters/               # Normalización de datos a API a modelos
│
├── styles/                     # Variables CSS, estilos globales, etc
│
├── test/                       # configuración de test
|
├── ui/                         # Parte visual
│   ├── components/             # Componentes pequeños y reutilizables
│   └── pages/                  # Vistas (Listado, Detalle, Carrito)
|        └── components/         # Componentes grandes específicos de cada vista
│
├── utils/                      # Funciones auxiliares
│
├── App.tsx
└── main.tsx
```

## Run Locally

Es necesario tener instalado Node y añadir el archivo .env con la variable VITE_APP_API_KEY_AUTH donde pondrás la 'x-api-key' para el acceso a la API.

Luego, todo lo que tienes que hacer es:

pnpm install

pnpm run dev

Y abrir http://localhost:5173/ en tu navegador.

para validar el testing

pnpm run test

## Mejoras

- Se ha añadido un debounce y un cacheado en el buscador para mejorar el rendimiento y reducir considerablemente las peticiones a la API
- Se ha añadido una variable de cantidad para agrupar los productos que sean exactamente iguales en el carrito para reducir el tamaño de la vista y también el tamaño de almacenamiento en localStorage
- Se han añadido mejoras de UX como una sugerencia por marcas en el buscador, transiciones entre páginas y un scroll automático al cambiar de producto.


