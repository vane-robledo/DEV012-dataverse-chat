Dataverse -Chat

Índice

[1. Preámbulo del desarrollo]

[2. Creación de la data mediante uso de IA]

[3. Historias de usuarias]

[4. Diseño de la página]

[5. Problemas detectados en tests de usabilidad]

[6. Funcionalidades]

[7. ApiKey ]

[8. Consideraciones técnicas]

[9. Prueba unitarias y Test]

[10.Despliegue en Vercel]

## 1. Preámbulo

Este proyecto que es la continuacion del proyecto anterior, llamado dataVerse, la cual pudimos reutilizar la data obtenida por la inteligencia artificial y poder contruir una página SPA. Este proyecto esta diseñado para que el usario pueda filtrar y ordenar sus personajes , conocer la estadistica de recompensa y tiene la posibilidad de interactuar con sus personajes preferidos.

## 2. Creación de la data mediante el uso de IA.

Estamos en una etapa donde la inteligencia artificial nos permite obtener información rápida y precisa, a travez de un prompting se solicitó que se creara un objeto de 24 personajes de One Piece y que cada una tuviera un arreglo con unos valores.

## 3.Historias de usuarias

One Piece, ha cautivado a innumerables fanáticos con sus personajes fascinantes y sus historias envolventes. Como equipo de desarrollo, reconocemos la pasión y el interés de nuestros usuarios por explorar a fondo a los personajes que han llegado a amar. Con el objetivo de proporcionar una experiencia más enriquecedora y satisfactoria, nos proponemos implementar la funcionalidad de "Visualizar a detalle su personaje preferido" y asi como también permitirle la interacción con ellos a traves de la IA. Para eso nos hicimos las siguientes preguntas: Como usario quiero poder filtrar los personajes para conocer su origen y tripulación. Como usuario quiero poder ordenar los personajes de manera ascendente y descendente. Como usario quiero poder ordenar los personajes por recompesa mas baja y mas alta para poder visualizarla y compararlas con otros personajes. Como usuario quiero ingresar la apiKey para poder chatear con todos los personajes. Como usuario quiero un botón para poder ingresar la apiKey y que este quede almacenada y me permita chatear tanto con el personaje individual como el grupal.

## 4. Diseño de la página

En este proyecto se pudo realizar el diseño de alta fidelidad a través de Figma y que pudiera ser de manera responsiva para moviles.

<<<<<<< HEAD

Imagen#1 Prototipo diseño de escritorio.

![Prototipo #1 diseño de escritorio](/src/img/imagen%20_1.png)


Imagen#2 Prototipo diseño de escritorio chat individual.

![Prototipo #2 diseño de escritorio chat individual](/src/img/imagen%20_2.png)


Imagen#3 Prototipo diseño de escritorio chat grupal.

![Prototipo #3 diseño de escritorio chat grupal](/src/img/chat%20_grupal.png)

## 5. Problemas detectados en tests de usabilidad

## 6. Funcionalidades

El objetivo de este proyecto, se requeria construir una pagina SPA que tuviera las mismas funcionalidades del proyecto anterior de filtar, ordenar y un boton para volver a la página principal Y se incorporó que se pudiera interactuar con los personajes a través de la IA. Para esto es requerido un ApiKey para que las conversaciónes con los personajes se pueda ejecutar.

## 7.Consideraciones técnicas

El proyecto tiene esta estructura detalladas y requeridas para poder tener todo segmentado y poder reutilizar los componentes para la vista de las paginas diseñadas para los personajes y la estadistica.


![Diseño del proyecto](/src/img/diseño_%20del_%20proyecto.png)

## 8. ApiKey

Incorporamos un botón llamado Api Key , que a través de un input solicita la apiKey, esto le va a permitir al usuario interactual con cualquier personaje de manera individual o grupal. De no colocarse la apiKey no podrá comunicarse con su personaje y le arrojara un error.

## 9.Prueba unitarias y Test


## 10. Despliegue en Vercel
=======
Imagen#1 Prototipo diseño de escritorio.

![Prototipo #1 diseño de escritorio](/src/img/imagen_%20todos%20.png)

Imagen#2 Prototipo diseño de escritorio chat individual.

![Prototipo #2 diseño de escritorio chat individual](/src/img/imagen%202%20chat%20individual.png)

Imagen#3 Prototipo diseño de escritorio chat grupal.

![Prototipo #3 diseño de escritorio chat grupal](/src/img/chat%20_grupal.png)

## 5. Problemas detectados en tests de usabilidad

## 6. Funcionalidades

El objetivo de este proyecto, se requeria construir una pagina SPA que tuviera las mismas funcionalidades del proyecto anterior de filtar, ordenar y un boton para volver a la página principal Y se incorporó que se pudiera interactuar con los personajes a través de la IA. Para esto es requerido un ApiKey para que las conversaciónes con los personajes se pueda ejecutar.

## 7.Consideraciones técnicas

El proyecto tiene esta estructura detalladas y requeridas para poder tener todo segmentado y poder reutilizar los componentes para la vista de las paginas diseñadas para los personajes y la estadistica.

![Diseño del proyecto](/src/img/diseño_%20del_%20proyecto.png)

## 8. ApiKey

Incorporamos un botón llamado Api Key , que a través de un input solicita la apiKey, esto le va a permitir al usuario interactual con cualquier personaje de manera individual o grupal. De no colocarse la apiKey no podrá comunicarse con su personaje y le arrojara un error.

## 9.Prueba unitarias y Test

## 10. Despliegue en Vercel
>>>>>>> main
