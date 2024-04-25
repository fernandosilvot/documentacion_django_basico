---
sidebar_position: 4
---

# Configurar aplicación

para que la aplicación que acabas de crear funcione correctamente, debes configurarla en tu proyecto. A continuación, te mostramos cómo hacerlo.

## Crear Templates:

Los templates en Django son archivos HTML que contienen el diseño de tu aplicación. Puedes utilizar etiquetas y filtros de Django en los templates para mostrar datos dinámicos en tu aplicación. Para crear un template en tu aplicación, debes crear un directorio llamado `templates` en el directorio de la aplicación y colocar los archivos HTML dentro de este directorio.

Por ejemplo, si deseas crear un template para mostrar una lista de productos en tu aplicación, puedes hacerlo de la siguiente manera:

```html
<!-- templates/inicio.html -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>
    <h1>Lista de Productos</h1>
    <ul>
        {% for producto in productos %}
            <li>{{ producto.nombre }} - {{ producto.precio }}</li>
        {% endfor %}
    </ul>
</body>
</html>
```

en este ejemplo, se ha creado un template llamado `inicio.html` que muestra una lista de productos. Se utiliza la etiqueta `{% for producto in productos %}` para iterar sobre la lista de productos y mostrar el nombre y precio de cada producto en la lista.

## Crear URLs:

Las URLs en Django son patrones de URL que mapean las solicitudes HTTP a las vistas de tu aplicación. Para crear una URL en tu aplicación, debes definir una lista de rutas en el archivo `urls.py` de la aplicación y asignar cada ruta a una vista específica.

Por ejemplo, si deseas crear una URL para mostrar la lista de productos en tu aplicación, puedes hacerlo de la siguiente manera:

```python
# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'), # ruta para mostrar la lista de productos
]
```

en este ejemplo, se ha definido una ruta vacía que mapea a la vista `inicio`. Cuando un usuario accede a la URL raíz de la aplicación, se mostrará la lista de productos en la página.


ahora con los templates y las URLs creadas, puedes configurar las vistas de tu aplicación para mostrar los datos en el navegador.

el proyecto se debe ver de la siguiente manera:

```plaintext
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
    myapp/
        __init__.py
        admin.py
        apps.py
        migrations/
            __init__.py
        models.py
        tests.py
        views.py
        templates/
            inicio.html
        urls.py
```


## Crear Modelos:

Los modelos en Django son clases que representan tablas en la base de datos. Cada modelo define un conjunto de campos y métodos que Django utiliza para interactuar con la base de datos. Para crear un modelo en tu aplicación, debes definir una clase que herede de `models.Model` y definir los campos que deseas incluir en la tabla.

Por ejemplo, si deseas crear un modelo para almacenar información de usuarios en tu aplicación, puedes hacerlo de la siguiente manera:

```python
# models.py

from django.db import models

class Categoria(models.Model): # clase que representa una tabla en la base de datos
    nombre = models.CharField(max_length=100) # campo de texto con un máximo de 100 caracteres
    descripcion = models.TextField() # campo de texto largo
    fecha_creacion = models.DateTimeField(auto_now_add=True) # campo de fecha y hora con valor predeterminado de la fecha y hora actual

    def __str__(self): # método para representar el objeto como una cadena
        return self.nombre # devuelve el nombre de la categoría

class Producto(models.Model): # clase que representa una tabla en la base de datos
    nombre = models.CharField(max_length=100) # campo de texto con un máximo de 100 caracteres
    descripcion = models.TextField() # campo de texto largo
    precio = models.DecimalField(max_digits=10, decimal_places=2) # campo de número decimal con un máximo de 10 dígitos y 2 decimales
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE) # campo de clave foránea que hace referencia a la tabla de categoria y se elimina en cascada
    fecha_creacion = models.DateTimeField(auto_now_add=True) # campo de fecha y hora con valor predeterminado de la fecha y hora actual

    def __str__(self): # método para representar el objeto como una cadena
        return self.nombre, self.precio # devuelve el nombre y precio del producto
```

en este ejemplo, se han definido dos modelos: `Categoria` y `Producto`. El modelo `Categoria` tiene tres campos: `nombre`, `descripcion` y `fecha_creacion`. El modelo `Producto` tiene cinco campos: `nombre`, `descripcion`, `precio`, `categoria` y `fecha_creacion`. El campo `categoria` en el modelo `Producto` es una clave foránea que hace referencia al modelo `Categoria`.
 
### Registrar los modelos en la aplicación 
después de definir los modelos, debes crear las migraciones para aplicar los cambios en la base de datos. Para ello, ejecuta el siguiente comando en tu terminal:

```bash
python manage.py makemigrations
```

este comando creará un archivo de migración en el directorio `migrations` de cada aplicación que contenga los cambios en los modelos. Para aplicar las migraciones y crear las tablas en la base de datos, ejecuta el siguiente comando:

```bash
python manage.py migrate
```

este comando aplicará las migraciones pendientes y creará las tablas en la base de datos.

## Crear Vistas:

Las vistas en Django son funciones o clases que procesan las solicitudes HTTP y devuelven una respuesta al navegador. Para crear una vista en tu aplicación, debes definir una función o clase que maneje la lógica de la solicitud y devuelva una respuesta al navegador.

Por ejemplo, si deseas crear una vista para mostrar una lista de productos en tu aplicación, puedes hacerlo de la siguiente manera:

```python
# views.py

from django.shortcuts import render
from .models import Producto, Categoria

def inicio(request): # función que maneja la solicitud y devuelve una respuesta
    productos = Producto.objects.all() # consulta todos los productos en la base de datos
    categorias = Categoria.objects.all() # consulta todas las categorías en la base de datos
    contexto = {
        'productos': productos, # datos que se pasan a la plantilla
        'categorias': categorias, # datos que se pasan a la plantilla
    }
    return render(request, 'inicio.html', contexto) # renderiza la plantilla 'inicio.html' con los datos del contexto

```