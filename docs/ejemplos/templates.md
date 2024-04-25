---
sidebar_position: 1
---

# Templates 

dejare unos ejemplos de como trabajar con templates en Django.


## Crear un template

Para crear un template en Django, puedes crear un `Template` base en la carpeta `templates` de tu aplicación. A continuación se muestra un ejemplo de cómo crear un template base en Django:

```html
<!-- base.html -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Mi Sitio Web{% endblock %}</title> <!-- Título de la página -->
</head>

<body>
    <header>
        <h1>Mi Sitio Web</h1>
    </header>

    <nav>
        <ul>
            <li><a href="{% url 'home' %}">Inicio</a></li> <!-- Enlace a la página de inicio -->
            <li><a href="{% url 'about' %}">Acerca de</a></li> <!-- Enlace a la página acerca de -->
            <li><a href="{% url 'contact' %}">Contacto</a></li> <!-- Enlace a la página de contacto -->
        </ul>
    </nav>

    <main>
        {% block content %} <!-- Contenido de la página -->
        {% endblock %} <!-- Fin del bloque de contenido -->
    </main>

    <footer>
        <p>&copy; 2021 Mi Sitio Web</p>
    </footer> 
        {% block scripts %} <!-- Scripts de la página -->
        {% endblock %} <!-- Fin del bloque de scripts -->
</body>
</html>
```

En este ejemplo, hemos creado un template base llamado `base.html` que define la estructura básica de nuestro sitio web. El template base contiene un encabezado con el título del sitio web, una barra de navegación con enlaces a las páginas de inicio, acerca de y contacto, un área principal para el contenido de la página y un pie de página con los derechos de autor del sitio web.

## Extender un template

Para extender un template en Django, puedes crear un `Template` que herede del template base y sobrescriba los bloques de contenido necesarios. A continuación se muestra un ejemplo de cómo extender un template en Django:

```html

<!-- home.html -->

{% extends 'base.html' %} <!-- Extender del template base -->

{% block title %}Inicio - Mi Sitio Web{% endblock %} <!-- Título de la página -->

{% block content %} <!-- Contenido de la página -->
    <h2>Bienvenido a la página de inicio</h2>
    <p>Esta es la página de inicio de mi sitio web. ¡Espero que disfrutes tu visita!</p>
{% endblock %} <!-- Fin del bloque de contenido -->
```

En este ejemplo, hemos creado un template llamado `home.html` que extiende del template base `base.html`. Hemos sobrescrito los bloques `title` y `content` para personalizar el título de la página y el contenido de la página de inicio.

## Incluir archivos estáticos

Para incluir archivos estáticos en un template en Django, puedes utilizar la etiqueta `static` para hacer referencia a los archivos estáticos en tu aplicación. A continuación se muestra un ejemplo de cómo incluir archivos estáticos en un template en Django:

```html
<!-- home.html -->

{% extends 'base.html' %}

{% load static %} <!-- Cargar archivos estáticos -->

{% block title %}Inicio - Mi Sitio Web{% endblock %} <!-- Título de la página -->

{% block content %} <!-- Contenido de la página -->
    <h2>Bienvenido a la página de inicio</h2>
    <p>Esta es la página de inicio de mi sitio web. ¡Espero que disfrutes tu visita!</p>
    <img src="{% static 'img/logo.png' %}" alt="Logo de Mi Sitio Web"> <!-- Incluir una imagen estática -->
{% endblock %} <!-- Fin del bloque de contenido -->
```

En este ejemplo, hemos utilizado la etiqueta `load static` para cargar archivos estáticos en el template `home.html`. Hemos incluido una imagen estática llamada `logo.png` en la página de inicio de nuestro sitio web.

# Templates con condicionales

## Utilizar condicionales

Para utilizar condicionales en un template en Django, puedes utilizar la etiqueta `if` para evaluar una condición y mostrar contenido condicionalmente en tu página. A continuación se muestra un ejemplo de cómo utilizar condicionales en un template en Django:

```html

<!-- home.html -->

{% extends 'base.html' %}

{% load static %} <!-- Cargar archivos estáticos -->

{% block title %}Inicio - Mi Sitio Web{% endblock %}

{% block content %}
    <h2>Bienvenido a la página de inicio</h2>
    <p>Esta es la página de inicio de mi sitio web. ¡Espero que disfrutes tu visita!</p>
    {% if user.is_authenticated %} <!-- Evaluar si el usuario está autenticado -->
        <p>Bienvenido, {{ user.username }}!</p>
    {% else %} <!-- Si el usuario no está autenticado -->
        <p>Inicia sesión para acceder a contenido exclusivo.</p>
    {% endif %} <!-- Fin del condicional -->
{% endblock %}
```

En este ejemplo, hemos utilizado la etiqueta `if` para evaluar si el usuario está autenticado y mostrar un mensaje de bienvenida personalizado si el usuario está autenticado. Si el usuario no está autenticado, se mostrará un mensaje para iniciar sesión.

# Templates con bucles

## Utilizar bucles

Para utilizar bucles en un template en Django, puedes utilizar la etiqueta `for` para iterar sobre una lista de elementos y mostrar contenido repetitivo en tu página. A continuación se muestra un ejemplo de cómo utilizar bucles en un template en Django:

```html

<!-- blog.html -->

{% extends 'base.html' %}

{% load static %} <!-- Cargar archivos estáticos -->

{% block title %}Blog - Mi Sitio Web{% endblock %}

{% block content %}
    <h2>Blog</h2>
    <ul>
        {% for post in posts %} <!-- Iterar sobre la lista de publicaciones -->
            <li>
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </li>
        {% endfor %} <!-- Fin del bucle -->
    </ul>
{% endblock %}
```

En este ejemplo, hemos utilizado la etiqueta `for` para iterar sobre una lista de publicaciones y mostrar el título y el contenido de cada publicación en una lista. Cada elemento de la lista de publicaciones se representa como un objeto `post` que contiene un título y un contenido.

## Utilizar bucles while

Para utilizar bucles `while` en un template en Django, puedes utilizar la etiqueta `for` con un filtro `slice` para iterar sobre una lista de elementos y mostrar contenido repetitivo en tu página. A continuación se muestra un ejemplo de cómo utilizar bucles `while` en un template en Django:

```html

<!-- blog.html -->

{% extends 'base.html' %}

{% load static %} <!-- Cargar archivos estáticos -->

{% block title %}Blog - Mi Sitio Web{% endblock %}

{% block content %}
    <h2>Blog</h2>
    <ul>
        {% for post in posts|slice:":5" %} <!-- Iterar sobre los primeros 5 elementos de la lista de publicaciones -->
            <li>
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </li>
        {% endfor %} <!-- Fin del bucle -->
    </ul>
{% endblock %}
```

En este ejemplo, hemos utilizado la etiqueta `for` con un filtro `slice` para iterar sobre los primeros 5 elementos de una lista de publicaciones y mostrar el título y el contenido de cada publicación en una lista. El filtro `slice` se utiliza para limitar el número de elementos que se muestran en la lista.
