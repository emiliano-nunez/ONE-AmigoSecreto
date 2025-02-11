<h1 style ="text-align: center;">AMIGO SECRETO</h1>

Proyecto integrador del programa ONE de Oracle y ALURA llamado "El Amigo Secreto". Consiste en crear una lista personalizada de amigos que serán sorteados aleatoriamente para elegir un ganador.


<h2>Funcionalidades</h2>

- Añadir amigos.
- Almacenar amigos en una lista.
- Reconocer valores inválidos.
- Informe de errores en pantalla.
- Sorteo aleatorio.
- Presentación de ganador.

<h3>Información posible</h3>

#1 - Campo vacío o nulo:
"Debes escribir un nombre"

#2 - Ingreso válido:
"Añade otro amigo!"

#3 - Amigos insuficientes:
"Debe haber al menos dos amigos para sortear!"

#4 - Ganador:
"Ganó (Nombre del ganador)"


---

<h2>Info para desarrolladores</h2>

<h3>Variables</h3>

- **input**: Valor detectado de la etiqueta "input".
- **info**: Texto informativo del "input" para reconocer un amigo válido o no.
- **info2**: Texto informativo para el sorteo (2 o más amigos).
- **list**: Valor de la etiqueta "ul".
- **amigos**: Array que almacena los amigos.
- **amigo**: Valor temporal del amigo actual.

<h3>Funciones</h3>

- **validarEntrada()**: Valida el texto del "input" e informa al usuario con textos personalizados. Devuelve *true* o *false* para que la funcin *agregar()* confirme el almacenamiento del amigo.

- **agregar()**: Asociada al *button* "Añadir". Si el texto es válido guarda el amigo y reinicia el "input". Al finalizar utiliza la función *mostrar()*.

- **mostrar()**: Reinicia la etiqueta "ul" y mediante un ciclo añade uno por uno cada amigo como etiqueta "li".

- **sortear()**: Asociada al *button* "Sortear". Valida la cantidad de amigos para al iniciar. Si **no son** al menos 2 amigos no realiza el sorteo e informa de ello al usuario. Si **son** al menos 2 amigos reinicia el texto informativo por si antes fue inválido el sorteo y genera un número aleatorio correspondiente a la cantidad de amigos guardados. Al establecer un número ganador se pasa el valor del amigo en la lista a la función *limpiarYMostrarGanador()*

- **limpiarYMostrarGanador()**: Recibe como *ganador* un string. Limpia la lista para mostrar en pantalla sólo el texto del ganador.

<h2>Créditos</h2>

Este proyecto fue desarrollado como parte del programa ONE de Oracle y ALURA.

<h3>Autor</h3>
Proyecto realizado por Emiliano Núñez 🇦🇷.

