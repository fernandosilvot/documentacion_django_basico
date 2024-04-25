---
sidebar_position: 1
---

# Inicio rápido con Django

Bienvenido al inicio rápido con Django. Aquí te mostramos cómo comenzar a trabajar en tu proyecto de forma rápida y sencilla.

## Crear un nuevo proyecto

Para iniciar un nuevo proyecto de Django, ejecuta el siguiente comando en tu terminal:

```bash
django-admin startproject mysite
```

Este comando creará un nuevo directorio llamado `mysite` con la siguiente estructura:

```
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

## Iniciar el servidor de desarrollo

Para iniciar el servidor de desarrollo y comenzar a trabajar en tu proyecto, ejecuta el siguiente comando:

```bash
python manage.py runserver
```

Después de ejecutar este comando, podrás acceder a tu proyecto en la dirección `http://localhost:8000/`.

## Crear una nueva aplicación

Las aplicaciones en Django son módulos web reutilizables que se pueden conectar a un proyecto. Para crear una nueva aplicación, ejecuta el siguiente comando:

```bash
python manage.py startapp myapp
```

Este comando creará un nuevo directorio llamado `myapp` dentro de tu proyecto, con la siguiente estructura:

```
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

Y la estructura de tu proyecto se verá así:

```
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

¡Listo! Ahora estás listo para empezar a desarrollar tu proyecto con Django. Si necesitas ayuda adicional, consulta la [documentación oficial de Django](https://docs.djangoproject.com/en/stable/).
```
