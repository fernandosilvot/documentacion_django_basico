---
sidebar_position: 1
---

# Introducción

Vamos a empezar con esta Documentacion **Django**.

## Empezemos con Django 

## ¿Qué es Django?
Django es un framework web de alto nivel escrito en Python que fomenta el desarrollo rápido y limpio. Diseñado por desarrolladores experimentados, Django se encarga de gran parte de la molestia del desarrollo web, por lo que puedes concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda. Es gratuito y de código abierto, tiene una comunidad activa y amigable, y se utiliza en todo el mundo por todo tipo de desarrolladores, desde principiantes hasta expertos.

## ¿Como funciona Django?

Django sigue el principio de DRY (Don't Repeat Yourself) y se basa en el patrón de diseño MVC (Model-View-Controller). Django se encarga de la parte de la vista y el controlador, mientras que el desarrollador se encarga de la parte del modelo. Django también proporciona una API para que los desarrolladores puedan crear sus propias aplicaciones y extensiones.
### Modelo
El modelo es la parte de la aplicación que se encarga de la lógica de negocio y la interacción con la base de datos. Django proporciona una API para que los desarrolladores puedan definir sus modelos y trabajar con la base de datos de forma sencilla.<br />Estos se ubican en los archivos `models.py`
### Vista
La vista es la parte de la aplicación que se encarga de la presentación de los datos al usuario. Django proporciona una API para que los desarrolladores puedan definir sus vistas y trabajar con las plantillas de forma sencilla.<br />Estos se ubican en los archivos `views.py` 
### Template
El template es la parte de la aplicación que se encarga de la presentación de los datos al usuario. Django proporciona una API para que los desarrolladores puedan definir sus templates y trabajar con ellas de forma sencilla. <br />Los archivos de templates se diferencian al HTML por algunas extensiones especiales de Django, como por ejemplo:<br /><code>`<h1>Hola Mundo</h1>` <br /> `<p>Mi nombre es {{ Nombre }}</p>`</code>
### URL
Las URL son las direcciones que se utilizan para acceder a las diferentes partes de la aplicación. Django proporciona una API para que los desarrolladores puedan definir sus URLs y trabajar con ellas de forma sencilla. <br />Estos se ubican en los archivos `urls.py`