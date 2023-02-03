# CodeChallenge - Frontend con ReactJS!

Este proyecto ha sido creado solo para efectos demostrativos.
Desarrollado en ReactJS y TailwindCSS.
Se programaron varios Tests Unitarios con Jest [TDD].
Se usó StoryBook para renderizar componentes en tiempo de desarrollo.
Utiliza las APIs de OpenWeatherMap para obtener datos de Geolocalización y del Clima.

## Objetivo

Crear una pequeña aplicación web que muestre el clima de una ciudad en tiempo real.

## Requerimientos

- Al entrar a la aplicación debe poder ver la temperatura de una ciudad. **_[6 ciudades: Buenos Aires, Caracas, Bogotá, Ciudad de México, Lima y Santiago de Chile]_**
- Debe poder seleccionar ver la temperatura de una ciudad de una lista de al menos 3 ciudades. **_[Incluye un buscador de más de 240 Ciudades en 15 Países]_**
- Debe poder ver el pronóstico de temperatura de los próximos 5 días. **_[API: 5 Day / 3 Hour Forecast]_**
- Debe poder convertir la temperatura entre grados Celsius y grados Fahrenheit, y viceversa. **_[ConvertUnits Package]_**
- La información del clima debe obtenerse en tiempo real. **_[En todo momento!]_**
- Interfaz responsiva **_[Mobile, Tablets y Desktop]_**

## Opcionales

- Debe poder ver la temperatura mínima y máxima de cada día. **_[Y además mostramos la Sensación Térmica]_**
- Debe poder ver la velocidad y dirección del viento. **_[Hecho!]_**
- Debe poder ver el porcentaje de humedad. **_[Hecho!]_**
- Debe poder agregar más ciudades. **_[Utilizamos el buscador y agregamos más ciudades]_**
- Al entrar a la aplicación, por defecto mostrar la información de la ubicación del usuario. **_[Usamos Navigator API para esto]_**

## Despliegue

- La App ha sido desplegada en AWS
- Es un sitio web estático en _S3_
- Se configuró un Certificado SSL en _ACM_ para HTTPS (_navigator api_ requiere un sitio seguro para ejecutarse)
- Por medio de _CloudFront_ se configuró un endpoint para que entregara el sitio web de _S3_ sobre https
- Con _CodePipeline_, se configuró _CI/CD_ con _Webhooks_ de _GitHub_, _CodeBuild_ se encarga de compilar el código y finalmente se despliega en _S3_
- Se realizó la configuración requerida para utilizar un dominio personalizado. (Registros DNS)

## Demo

Para ver el sitio web funcionando, ir a [MyWeatherApp](https://weather.elisarcia.info).
