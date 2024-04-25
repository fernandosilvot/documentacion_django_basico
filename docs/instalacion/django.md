---
sidebar_position: 5
---

# Django

## Instalación

Para instalar Django en tu sistema operativo, puedes seguir los pasos que se describen a continuación.

### Windows

1. Abre el CMD (terminal) y navega hasta la carpeta donde deseas crear tu proyecto Django.
2. Crea un entorno virtual ejecutando el siguiente comando:

```bash
python -m venv nombre_del_entorno
```

3. Una vez creado el entorno virtual, puedes activarlo ejecutando el siguiente comando:

```bash
nombre_del_entorno\Scripts\activate
```

4. Instala Django en tu entorno virtual ejecutando el siguiente comando:

```bash
pip install django
```

5. Crea un nuevo proyecto Django ejecutando el siguiente comando:

```bash
django-admin startproject nombre_del_proyecto
```

6. Navega hasta la carpeta del proyecto y ejecuta el servidor de desarrollo con el siguiente comando:

```bash
python manage.py runserver
```

7. Abre tu navegador web y accede a la dirección [http://localhost:8000](http://localhost:8000) para ver tu proyecto Django en funcionamiento.

### macOS y Linux

1. Abre la Terminal y navega hasta la carpeta donde deseas crear tu proyecto Django.
2. Crea un entorno virtual ejecutando el siguiente comando:

```bash
python3 -m venv nombre_del_entorno
```

3. Una vez creado el entorno virtual, puedes activarlo ejecutando el siguiente comando:

```bash
source nombre_del_entorno/bin/activate
```

4. Instala Django en tu entorno virtual ejecutando el siguiente comando:

```bash
pip install django
```

5. Crea un nuevo proyecto Django ejecutando el siguiente comando:

```bash
django-admin startproject nombre_del_proyecto
```

6. Navega hasta la carpeta del proyecto y ejecuta el servidor de desarrollo con el siguiente comando:

```bash
python manage.py runserver
```

7. Abre tu navegador web y accede a la dirección [http://localhost:8000](http://localhost:8000) para ver tu proyecto Django en funcionamiento.
