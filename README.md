# CodeChallenge - Frontend con ReactJS!
Este proyecto ha sido creado solo para efectos demostrativos. 
Desarrollado en ReactJS y TailwindCSS.
Se programaron varios Tests Automáticos con Jest.
Se usó StoryBook para renderizar componentes en tiempo de desarrollo. 
Utiliza las APIs de OpenWeatherMap para obtener datos de Geolocalización y del Clima.

## Objetivo
Crear una pequeña aplicación web que muestre el clima de una ciudad en tiempo real.

## Requerimientos 
- Al entrar a la aplicación debe poder ver la temperatura de una ciudad. ***[6 ciudades: Buenos Aires, Caracas, Bogotá, Ciudad de México, Lima y Santiago de Chile]***
- Debe poder seleccionar ver la temperatura de una ciudad de una lista de al menos 3 ciudades. ***[Incluye un buscador de más de 240 Ciudades en 15 Países]***
- Debe poder ver el pronóstico de temperatura de los próximos 5 días. ***[API: 5 Day / 3 Hour Forecast]***
- Debe poder convertir la temperatura entre grados Celsius y grados Fahrenheit, y viceversa. ***[ConvertUnits Package]***
- La información del clima debe obtenerse en tiempo real. ***[En todo momento!]***
- Interfaz responsiva ***[Mobile, Tablets y Desktop]***

## Opcionales
-   Debe poder ver la temperatura mínima y máxima de cada día. ***[Y además mostramos la Sensación Térmica]***
-   Debe poder ver la velocidad y dirección del viento.  ***[Hecho!]***  
-   Debe poder ver el porcentaje de humedad. ***[Hecho!]***
-   Debe poder agregar más ciudades.  ***[Utilizamos el buscador y agregamos más ciudades]***  
-   Al entrar a la aplicación, por defecto mostrar la información de la ubicación del usuario. ***[Usamos Navigator API para esto]***

## Despliegue
- La App ha sido desplegada en AWS
- Es un sitio web estático en *S3*
- Se configuró un Certificado SSL en *ACM* para HTTPS (*navigator api* requiere un sitio seguro para ejecutarse)
- Por medio de *CloudFront* se configuró un endpoint para que entregara el sitio web de *S3* sobre https
- Con *CodePipeline*, se configuró *CI/CD* con *Webhooks* de *GitHub*, *CodeBuild* se encarga de compilar el código y finalmente se despliega en *S3*
- Se realizó la configuración requerida para utilizar un dominio personalizado. (Registros DNS)

## Demo

Para ver el sitio web funcionando, ir a [MyWeatherApp](https://weather.elisarcia.info).  
 
