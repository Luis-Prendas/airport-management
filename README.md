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

### Vuelos

#### 1. Crear un nuevo vuelo

- **Endpoint:** `POST /api/flights`

- **Body:**
  ```json
  {
    "id": "IDVuelo",
    "origin": "Ciudad de Origen",
    "destination": "Ciudad de Destino",
    "price": 100.0,
    "maxPassengers": 150,
    "currentPassengers": []
  }

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Flight created successfully"
  }

#### 2. Obtener todos los vuelos

- **Endpoint:** `GET /api/flights`

- **Respuesta Exitosa:**
  ```json
  [
    {
      "id": "IDVuelo",
      "origin": "Ciudad de Origen",
      "destination": "Ciudad de Destino",
      "price": 100.0,
      "maxPassengers": 150,
      "currentPassengers": []
    },
    // Otros vuelos...
  ]

#### 3. Obtener detalles de un vuelo

- **Endpoint:** `GET /api/flights/:id`

- **Parámetros:**
    - **`:id` ID del vuelo**

- **Respuesta Exitosa:**
  ```json
  {
    "id": "IDVuelo",
    "origin": "Ciudad de Origen",
    "destination": "Ciudad de Destino",
    "price": 100.0,
    "maxPassengers": 150,
    "currentPassengers": []
  }

#### 4. Reservar un asiento en un vuelo

- **Endpoint:** `POST /api/flights/:id/book`

- **Parámetros:**
    - **`:id` ID del vuelo**

- **Body:**
  ```json
  {
    "name": "Nombre del Pasajero",
    "passportNumber": "Número de Pasaporte",
    "nationality": "Nacionalidad"
  }

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Seat booked successfully"
  }

### Pasajeros

#### 1. Crear un nuevo pasajero

- **Endpoint:** `POST /api/passengers`

- **Body:**
  ```json
  {
    "name": "Nombre del Pasajero",
    "passportNumber": "Número de Pasaporte",
    "nationality": "Nacionalidad"
  }

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Passenger created successfully"
  }

#### 2. Obtener todos los pasajeros

- **Endpoint:** `GET /api/passengers`

- **Respuesta Exitosa:**
  ```json
  [
    {
      "name": "Nombre del Pasajero",
      "passportNumber": "Número de Pasaporte",
      "nationality": "Nacionalidad"
    },
    // Otros pasajeros...
  ]

#### 3. Obtener detalles de un pasajero

- **Endpoint:** `GET /api/passengers/:passportNumber`

- **Parámetros:**
    - **`:passportNumber` Número de pasaporte del pasajero**

- **Respuesta Exitosa:**
  ```json
  {
    "name": "Nombre del Pasajero",
    "passportNumber": "Número de Pasaporte",
    "nationality": "Nacionalidad"
  }

#### 4. Actualizar información de un pasajero

- **Endpoint:** `PUT /api/passengers/:passportNumber`

- **Parámetros:**
    - **`:passportNumber` Número de pasaporte del pasajero**

- **Body:**
  ```json
  {
    "name": "Nuevo Nombre",
    "nationality": "Nueva Nacionalidad"
  }

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Passenger updated successfully"
  }

#### 5. Eliminar un pasajero

- **Endpoint:** `DELETE /api/passengers/:passportNumber`

- **Parámetros:**
    - **`:passportNumber` Número de pasaporte del pasajero**

- **Respuesta Exitosa:**
  ```json
  {
    "message": "Passenger deleted successfully"
  }
