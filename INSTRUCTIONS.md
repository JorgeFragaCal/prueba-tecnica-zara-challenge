## FUNCIONALIDADES Y ESTRUCTURA
La aplicación deberá contener tres vistas principales:

### 1. Vista Listado de Teléfonos

Requerimientos:

- Implementar una cuadrícula con tarjetas que muestren los primeros 20 teléfonos
provenientes de la API.
- Cada tarjeta deberá incluir imagen, nombre, marca y precio base.
- Implementar un buscador en tiempo real que filtre los teléfonos por nombre o marca (Usar filtrado por API).
- El buscador debe incluir un indicador con el número de resultados encontrados.
- Implementar una barra de navegación que contenga:
  - Un icono con un enlace al panel de inicio.
  - Un icono que muestre la cantidad de teléfonos en el carrito.
   - El carrito debe de ser persistente, se puede manejar su estado haciendo uso de localStorage.
- Al hacer clic en un teléfono, deberá redirigir a la vista de detalle del mismo.
  
### 2. Vista Detalle de Teléfono

Requerimientos:

- Mostrar detalles del teléfono seleccionado, incluyendo:
- Nombre y marca del dispositivo.
- Imagen grande del móvil, con capacidad de cambiar dinámicamente según el color seleccionado.
- Selectores para almacenamiento y color, con actualización en tiempo real del precio.
- Especificaciones técnicas detalladas, precio base y variaciones según almacenamiento.
- Un botón "Añadir al carrito" que solo se activará cuando se hayan seleccionado color y almacenamiento.
- Una sección de "Productos similares" en la parte inferior.
  
### 3. Vista de Carrito

Requerimientos:

- Mostrar los teléfonos añadidos al carrito, con:
- Imagen, nombre, especificaciones seleccionadas (almacenamiento / color) y precio individual.
- Implementar un botón para eliminar productos individuales del carrito.
- Mostrar el precio total de la compra.
- Un botón de "Continuar comprando" que redirija a la vista principal.