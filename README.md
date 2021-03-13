# jaque-angular
Versión de Node: 14.16.0
Versión de Angular:

@angular-devkit/architect       0.1102.4
@angular-devkit/build-angular   0.1102.4
@angular-devkit/core            11.2.4
@angular-devkit/schematics      11.2.4
@angular/cdk                    11.2.4
@angular/cli                    11.2.4
@angular/material               11.2.4
@schematics/angular             11.2.4
@schematics/update              0.1102.4
rxjs                            6.6.6
typescript                      4.1.5

- - - - - - - - - - - - - - - - - - - - - - - - 

Pasos para correr el proyecto:

1.- Clonar el repositorio

2.- Correr el comando "npm install" en el directorio generado.

3.- Correr el comando "ng serve"


Usuarios disponibles:

    1.- 
        email: admin@mail.com
        pass: 123456
    
    2.- 
        email: user@mail.com
        pass: 123456

- - - - - - - - - - - - - - - - - - - - - - - - - 

Rutas públicas (Accesible solo si no se ha identificado el usuario): 

    /login
    
Rutas privadas (Solo accesibles una vez identificado el usuario):

    /private/admon          --> Listado de usuarios
    /private/analytics      --> Gráfica de ventas

Cualquier otra ruta enviará a una página de error 404.

- - - - - - - - - - - - - - - - - - - - - - - - - - 

Hice una "simulación" de un servicio simple para hacer login; el listado de usuarios así como la función que simula ser el "backend" se encuentran dentro de la carpeta "app/dummy".

La sección privada "private" se carga con "lazy load" una vez que el usuario hace login en el sitio.