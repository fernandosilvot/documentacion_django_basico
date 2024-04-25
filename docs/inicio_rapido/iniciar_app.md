---
sidebar_position: 3
---

# Iniciar aplicación

## ¿Qué es una aplicación en Django?

las aplicaciones en Django son módulos que contienen código para manejar una parte específica de la funcionalidad de un proyecto. Por ejemplo, una aplicación puede manejar la autenticación de usuarios, otra puede manejar la administración de contenido, etc.

## Crear una aplicación

para crear una aplicación en Django, ejecuta el siguiente comando:

```bash
python manage.py startapp myapp
```

lo que realizará el comando es crear un nuevo directorio llamado `myapp` con la siguiente estructura:

```plaintext
myapp/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```
a lo que se suma el paso anterior de crear un proyecto, la estructura de tu proyecto se verá de la siguiente manera:

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
```

### Registrar la aplicación en el proyecto

para que Django reconozca la aplicación que acabas de crear, debes registrarla en el archivo `INSTALLED_APPS` en el archivo `settings.py` de tu proyecto:

```python
# settings.py

INSTALLED_APPS = [
    ...
    'myapp',
]
```

También recomiendo que importes la librería `os` para usar media y static files:

```python
# settings.py

import os
Static_URL = '/static/' # URL para archivos estáticos
Media_URL = '/media/' # URL para archivos multimedia
Media_ROOT = os.path.join(BASE_DIR, 'media') # Directorio donde se guardarán los archivos multimedia
```

otra configuracion que recomiendo es aplicar la librería `dotenv` para manejar las variables de entorno:

```bash
pip install python-dotenv
```

```python
# settings.py

from dotenv import load_dotenv
load_dotenv()

SECRET_KEY = os.getenv('SECRET_KEY') # Variable de entorno para la clave secreta
```
esta clave estara en un archivo `.env` en la raiz de tu proyecto:

```plaintext
SECRET_KEY=clave_secreta
```
asi se veria tu proyecto con la configuracion de las variables de entorno:

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
    .env
```
### Configurar urls de la aplicación

para que Django pueda acceder a las vistas de tu aplicación, debes configurar las urls de la aplicación en el archivo `urls.py` de tu proyecto:

```python

# urls.py

from django.contrib import admin
from django.urls import path, include # Importar include
from django.conf import settings # Importar settings
from django.conf.urls.static import static # Importar static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')), # Incluir las urls de la aplicación
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # agregar la configuración de archivos multimedia
```

ahora podemos pasar al siguiente paso que es crear los modelos y vistas de la aplicación.
