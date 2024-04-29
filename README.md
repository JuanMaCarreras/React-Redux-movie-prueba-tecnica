# CHALLENGE - PAGINATE

## Crear App de películas con paginación dinámica en React y Redux

### Objetivo

Crear una pequeña aplicación utilizando React y Redux que muestre películas con paginación controlada desde Redux y con la capacidad de ajustar dinámicamente la cantidad de películas por página.

### Instrucciones

1. Crea una nueva aplicación de React.

2. Configura y aplica Redux en tu aplicación.

3. Crea un componente MovieCard.jsx que renderice la información de una película, como el título, el año y la imágen como mínimo.

4. Crea un componente principal llamado MovieList.jsx que sea responsable de mostrar una lista de películas. Este componente debe recibir los datos de las películas desde Redux y renderizar varios componentes MovieCard en función de la configuración de paginación.

5. Implementa la funcionalidad de paginación utilizando Redux. Debes tener un estado en Redux que almacene la cantidad de películas que se deben mostrar por página.

6. Agrega botones en la interfaz de usuario que permitan incrementar y decrementar la cantidad de películas por página. Al hacer clic en estos botones, se debe actualizar el estado de Redux y la lista de películas debe reaccionar dinámicamente a este cambio.

7. Utiliza Redux para administrar el estado de la paginación y la lista de películas.

###

-   Implementa el diseño que desees.
-   Adjuntamos al final de este documento un objeto "moviesDb" de películas para que lo uses en esta aplicación.

### Recursos adicionales

-   Utiliza la biblioteca "react-redux" para conectar tus componentes de React con el estado de Redux.
-   Utiliza hooks.
-   Crea una vista de detalle de la película en caso de que sea seleccionada, la cual debe contener información detallada. El componente se debe llamar Detail.jsx.
