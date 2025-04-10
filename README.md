![image](https://github.com/JorgeFragaCal/films-searcher/assets/54991337/e5f005c9-833c-4351-9e80-f7dd5da730b5)

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

- React Router V6

- CSS Modules



## Code architecture

```
src/
│
├── domain/                     # Dominio puro (sin React)
│   ├── models/                 # Entidades principales (Phone, CartItem)
│   ├── services/               # Lógica del negocio (ej: calcular precios)
│   └── repositories/           # Interfaces abstractas (ej: CartRepository)
│
├── infrastructure/             # Implementaciones reales (API, localStorage)
│   ├── api/                    # Llamadas a la API REST
│   └── persistence/            # Implementación concreta del carrito con localStorage
│
├── application/                # Casos de uso y lógica de aplicación
│   └── usecases/               # Operaciones principales (añadir al carrito, buscar, etc.)
│
├── context/                    # Context API para carrito, etc.
│   └── CartContext.tsx
│
├── ui/                         # Parte visual
│   ├── components/             # Componentes pequeños y reutilizables
│   └── pages/                  # Vistas (Listado, Detalle, Carrito)
│
├── hooks/                      # Hooks personalizados
│
├── styles/                     # Variables CSS, estilos globales, etc.
│
├── utils/                      # Funciones auxiliares
│
├── App.tsx
└── main.tsx
```

## Run Locally

Es necesario tener instalado Node y añadir el archivo .env con la variable VITE_APP_API_KEY_AUTH donde pondrás la 'x-api-key' para el acceso a la API.

Luego, todo lo que tienes que hacer es:

npm install

npm run dev

Y abrir http://127.0.0.1:5173/ en tu navegador.

## Deployment

Se ha desplegado el proyecto usando Vercel, puedes acceder en [/](/)

