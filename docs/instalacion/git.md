---
sidebar_position: 3
---

# Git

Git es un sistema de control de versiones distribuido que se utiliza para rastrear los cambios en los archivos de un proyecto y coordinar el trabajo entre múltiples personas. Es una herramienta esencial para cualquier desarrollador, ya que permite mantener un historial de los cambios realizados en el código, colaborar con otros programadores y revertir los cambios en caso de ser necesario.

En esta guía aprenderás cómo instalar Git en tu sistema operativo y cómo utilizarlo para gestionar tus proyectos de programación.

## Instalación

Para instalar Git en tu sistema operativo, puedes seguir los pasos que se describen a continuación.

### Windows

1. Descarga el instalador de Git desde la página oficial [git-scm.com](https://git-scm.com/download/win).
2. Ejecuta el instalador y sigue las instrucciones del asistente de instalación.
3. Durante la instalación, asegúrate de marcar la casilla "Use Git from the Windows Command Prompt" para poder utilizar Git desde la línea de comandos.
4. Una vez finalizada la instalación, abre la línea de comandos (Command Prompt) y verifica que Git se ha instalado correctamente ejecutando el comando `git --version`.

### macOS

1. Descarga el instalador de Git desde la página oficial [git-scm.com](https://git-scm.com/download/mac).
2. Ejecuta el instalador y sigue las instrucciones del asistente de instalación.
3. Abre la Terminal y verifica que Git se ha instalado correctamente ejecutando el comando `git --version`.

### Linux

En la mayoría de las distribuciones de Linux, Git ya viene preinstalado. Puedes verificar la versión de Git ejecutando el comando `git --version` en la Terminal.

Si Git no está instalado en tu sistema, puedes instalarlo utilizando el gestor de paquetes de tu distribución. Por ejemplo, en Ubuntu puedes instalar Git ejecutando el siguiente comando:

```bash
sudo apt-get update
sudo apt-get install git
```

## Configuración

Una vez que hayas instalado Git en tu sistema, es recomendable configurar tu nombre de usuario y dirección de correo electrónico para que los commits que realices en tus proyectos tengan la información correcta.

Puedes configurar tu nombre de usuario y dirección de correo electrónico en Git ejecutando los siguientes comandos en la línea de comandos:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "Tu Correo Electrónico"
```

Reemplaza `"Tu Nombre"` con tu nombre real y `"Tu Correo Electrónico"` con tu dirección de correo electrónico. Estos valores se utilizarán en los commits que realices en tus proyectos.

## Verificación

Para verificar que Git se ha instalado correctamente en tu sistema, puedes abrir la línea de comandos (Command Prompt en Windows o Terminal en macOS y Linux) y ejecutar el comando `git --version`. Si Git se ha instalado correctamente, verás la versión de Git que se ha instalado en tu sistema.

Además, puedes verificar que la configuración de tu nombre de usuario y dirección de correo electrónico se ha realizado correctamente ejecutando los siguientes comandos:

```bash
git config --global user.name
git config --global user.email
```

Estos comandos mostrarán tu nombre de usuario y dirección de correo electrónico configurados en Git. Si los valores son los que has establecido previamente, significa que la configuración se ha realizado correctamente.

Con Git instalado y configurado en tu sistema, estás listo para comenzar a utilizar esta poderosa herramienta para gestionar tus proyectos de programación. En las siguientes secciones aprenderás cómo utilizar Git para rastrear los cambios en tus proyectos, colaborar con otros programadores y mucho más. ¡Vamos a empezar!
