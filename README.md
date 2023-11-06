# Proyecto final

### La página principal del cotizador cuenta con al menos tres componentes básicos, seleccionables o a cargar con información por parte del usuario. Dispone también de un botón para visualizar la cotización, la cual se muestra en pantalla.

### Cuenta con validaciones de carga de datos, las cuales previenen y notifican al usuario ante la ausencia de información necesaria.
Además cuenta con un apartado donde el mismo usuario podrá visualizar el historial de cotizaciones realizadas previamente.

## En el apartado Historial, encontraremos una tabla o grilla donde visualizar el historial de cotizaciones realizadas por el usuario. Como información, debemos guardar:
● fecha y hora de la cotización
● Valores seleccionados o cargados por el usuario
● El importe de la póliza mensual
● También debe contar con un botón o hipervínculo que permite al usuario volver a la página principal del proyecto.


## Consigna técnica
### La aplicación web debe estar construída utilizando React, y debe ser una SPA. En la misma se deben aplicar la mayoría de los conceptos vistos durante la cursada de especialización en JavaScript.
● Puedes consultar una API remota como el servicio de MOCKAPI, o crear tu propio archivo JSON consumiendo el mismo con la tecnología AJAX.
● Debes renderizar los datos en pantalla. Utiliza el framework CSS o Vanilla CSS para construir la interfaz de acuerdo a tu parecer.
● Tomando como modelo el cotizador de seguros de hogar, los datos visualizados en los combo SELECT, deben venir de un archivo JSONo de una API consultada mediante un endpoint.
● Integra el manejo de estados ocn useState, useContext ó Redux, de acuerdo a tu conveniencia.
● Construye su interfaz basada en componentes e integra el uso de Routing para crear sus diferentes secciones (home -historial), más cualquier otra que consideres necesario agregar.
● El historial de cotizaciones, debe persistir. El usuario puede salir del proyecto y volver a ingresar en otro momento, y seguir visualizando dicho historial.