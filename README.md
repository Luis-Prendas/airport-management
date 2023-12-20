# Compañía Aeroportuaria API

Bienvenido a la documentación de la API para la Compañía Aeroportuaria. Esta API proporciona servicios para gestionar información sobre aeropuertos, aerolíneas, vuelos y pasajeros.

## Instalación

1. **Clona este repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/compania-aeroportuaria-api.git
    cd compania-aeroportuaria-api
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Inicia la aplicación:**

    ```bash
    npm start
    ```

Estas instrucciones te permitirán obtener una copia de la API en tu máquina local y ejecutarla. Asegúrate de tener [Node.js](https://nodejs.org/) instalado antes de seguir estas instrucciones. Además, si aún no tienes `git`, puedes descargar el repositorio manualmente desde [aquí](https://github.com/tu-usuario/compania-aeroportuaria-api) y luego seguir con los pasos 2 y 3.

Si encuentras algún problema durante la instalación, asegúrate de revisar los mensajes de error y verificar que todas las dependencias estén instaladas correctamente.

## Endpoints

### Aeropuertos

#### 1. Crear un nuevo aeropuerto

- **Endpoint:** `POST /api/airports`

- **Body:**
  ```json
  {
    "name": "Nombre del Aeropuerto",
    "city": "Ciudad",
    "country": "País",
    "isPrivate": true,
    "sponsors": ["Empresa1", "Empresa2"]
  }

- **Respuesta Exitosa:**
  ```json
    {
    "message": "Airport created successfully"
    }

#### 2. Obtener todos los aeropuertos

- **Endpoint:** `GET /api/airports`

- **Respuesta Exitosa:**
  ```json
    [
        {
            "name": "Nombre del Aeropuerto",
            "city": "Ciudad",
            "country": "País",
            "isPrivate": true,
            "sponsors": ["Empresa1", "Empresa2"]
        },
        // Otros aeropuertos...
    ]

#### 3. Obtener aerolíneas que operan en un aeropuerto

- **Endpoint:** `GET /api/airports/:name/airlines`

- **Parámetros:**
    - **`:name` Nombre del aeropuerto**

- **Respuesta Exitosa:**
  ```json
    [
        {
            "name": "Nombre de la Aerolínea",
            "flights": ["IDVuelo1", "IDVuelo2"]
        },
        // Otras aerolíneas...
    ]

### Aeropuertos

#### 1. Crear una nueva aerolínea

- **Endpoint:** `POST /api/airlines`

- **Body:**
  ```json
  {
    "name": "Nombre de la Aerolínea"
  }

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Airline created successfully"
  }

#### 2. Obtener todas las aerolíneas

- **Endpoint:** `GET /api/airlines`

- **Respuesta Exitosa:**
  ```json
  [
    {
      "name": "Nombre de la Aerolínea",
      "flights": ["IDVuelo1", "IDVuelo2"]
    },
    // Otras aerolíneas...
  ]

#### 3. Obtener detalles de una aerolínea

- **Endpoint:** `GET /api/airlines/:name`

- **Parámetros:**
    - **`:name` Nombre de la aerolínea**

- **Respuesta Exitosa:**
  ```json
  {
    "name": "Nombre de la Aerolínea",
    "flights": ["IDVuelo1", "IDVuelo2"]
  }

#### 4. Asociar un vuelo a una aerolínea

- **Endpoint:** `POST /api/airlines/:name/flights/:flightId`

- **Parámetros:**
    - **`:name` Nombre de la aerolínea**
    - **`:flightId` ID del vuelo**

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Flight added to airline successfully"
  }