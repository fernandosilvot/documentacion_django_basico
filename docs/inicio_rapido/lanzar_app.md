---
sidebar_position: 5
---

# Lanzar aplicación

después de configurar tu aplicación, puedes lanzarla en tu servidor de desarrollo para ver cómo se ve en el navegador. A continuación, te mostramos cómo hacerlo.

## Iniciar servidor de desarrollo

para lanzar tu aplicación en el servidor de desarrollo, ejecuta el siguiente comando en tu terminal:

```bash
python manage.py runserver
```

este comando iniciará el servidor de desarrollo y mostrará la dirección en la que puedes acceder a tu aplicación. Por defecto, la dirección es `http://localhost:8000/`.


ahora debe estar vacia la lista de productos, ya que no se ha creado ninguno. Para crear un producto, puedes acceder al panel de administración de Django y agregar un nuevo producto.

## Acceder al panel de administración


### Modificar el archivo `admin.py`
antes de poder seguir necesitamos modificar el archivo `admin.py` de la aplicación `productos` y `Categoria` para que los modelos `Producto` y `Categoria` sea visible en el panel de administración de Django.

```python
# admin.py

from django.contrib import admin
from .models import Producto, Categoria

admin.site.register(Producto)
admin.site.register(Categoria)
```

### Crear un superusuario

para acceder al panel de administración, necesitas crear un superusuario. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
python manage.py createsuperuser
```

este comando te pedirá que ingreses un nombre de usuario, una dirección de correo electrónico y una contraseña para el superusuario. Una vez que hayas creado el superusuario, puedes acceder al panel de administración de Django en la dirección `http://localhost:8000/admin/` e iniciar sesión con las credenciales del superusuario.

### Agregar un nuevo producto

una vez que hayas iniciado sesión en el panel de administración, puedes agregar un nuevo producto haciendo clic en el enlace "Productos" y luego en el botón "Agregar producto". Completa el formulario con la información del producto y haz clic en el botón "Guardar" para agregar el producto a la base de datos.

### Ver la lista de productos

después de agregar un nuevo producto, puedes ver la lista de productos en la página principal de tu aplicación. Accede a la dirección `http://localhost:8000/` en tu navegador y verás la lista de productos que has agregado en el panel de administración.

