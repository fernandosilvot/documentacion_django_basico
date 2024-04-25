---
sidebar_position: 4
---

# Entorno Virtual (env)

Esto es una recomendación para que puedas trabajar con diferentes versiones de Python y paquetes en un mismo sistema operativo.

El entorno virtual es una herramienta que te permite crear un entorno de desarrollo aislado para tus proyectos de Python. Esto significa que puedes instalar paquetes y dependencias específicas para cada proyecto sin afectar a otros proyectos o al sistema operativo en general.

## Creación de un entorno virtual

Para crear un entorno virtual en Python, puedes utilizar la herramienta `venv` que viene incluida en la instalación estándar de Python. A continuación se describen los pasos para crear un entorno virtual en tu sistema operativo.

### Windows

1. Abre el CMD (terminal) y navega hasta la carpeta donde deseas crear el entorno virtual.
2. Ejecuta el siguiente comando para crear un nuevo entorno virtual:

```bash
python -m venv nombre_del_entorno
```

3. Una vez creado el entorno virtual, puedes activarlo ejecutando el siguiente comando:

```bash
nombre_del_entorno\Scripts\activate
```

### macOS y Linux

1. Abre la Terminal y navega hasta la carpeta donde deseas crear el entorno virtual.
2. Ejecuta el siguiente comando para crear un nuevo entorno virtual:

```bash
python3 -m venv nombre_del_entorno
```

3. Una vez creado el entorno virtual, puedes activarlo ejecutando el siguiente comando:

```bash
source nombre_del_entorno/bin/activate
```

## Activación del entorno virtual

Una vez que hayas creado un entorno virtual, puedes activarlo para comenzar a trabajar en él. La activación del entorno virtual te permite utilizar la versión de Python y los paquetes instalados en ese entorno de forma aislada.

### Windows

Para activar un entorno virtual en Windows, ejecuta el siguiente comando en el CMD:

```bash
nombre_del_entorno\Scripts\activate
```

### macOS y Linux

Para activar un entorno virtual en macOS y Linux, ejecuta el siguiente comando en la Terminal:

```bash
source nombre_del_entorno/bin/activate
```

## Desactivación del entorno virtual

Una vez que hayas terminado de trabajar en un entorno virtual, puedes desactivarlo para volver al entorno de Python global de tu sistema operativo.

### Windows, macOS y Linux

Para desactivar un entorno virtual en Windows, macOS y Linux, ejecuta el siguiente comando en la Terminal o CMD:

```bash
deactivate
```

## Eliminación del entorno virtual

Si ya no necesitas un entorno virtual y deseas eliminarlo, puedes hacerlo eliminando la carpeta del entorno virtual.

### Windows

Para eliminar un entorno virtual en Windows, puedes eliminar la carpeta del entorno virtual manualmente.

### macOS y Linux

Para eliminar un entorno virtual en macOS y Linux, puedes eliminar la carpeta del entorno virtual manualmente o ejecutar el siguiente comando:

```bash
rm -rf nombre_del_entorno
```
