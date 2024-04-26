"use strict";(self.webpackChunkdocumentacion_django_basico=self.webpackChunkdocumentacion_django_basico||[]).push([[155],{2755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=i(4848),t=i(8453);const o={sidebar_position:1},l="Templates",r={id:"ejemplos/templates",title:"Templates",description:"dejare unos ejemplos de como trabajar con templates en Django.",source:"@site/docs/ejemplos/templates.md",sourceDirName:"ejemplos",slug:"/ejemplos/templates",permalink:"/documentacion_django_basico/docs/ejemplos/templates",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ejemplos",permalink:"/documentacion_django_basico/docs/category/ejemplos"},next:{title:"Conclusi\xf3n",permalink:"/documentacion_django_basico/docs/conclusion"}},c={},s=[{value:"Crear un template",id:"crear-un-template",level:2},{value:"Extender un template",id:"extender-un-template",level:2},{value:"Incluir archivos est\xe1ticos",id:"incluir-archivos-est\xe1ticos",level:2},{value:"Utilizar condicionales",id:"utilizar-condicionales",level:2},{value:"Utilizar bucles",id:"utilizar-bucles",level:2},{value:"Utilizar bucles while",id:"utilizar-bucles-while",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"templates",children:"Templates"}),"\n",(0,a.jsx)(n.p,{children:"dejare unos ejemplos de como trabajar con templates en Django."}),"\n",(0,a.jsx)(n.h2,{id:"crear-un-template",children:"Crear un template"}),"\n",(0,a.jsxs)(n.p,{children:["Para crear un template en Django, puedes crear un ",(0,a.jsx)(n.code,{children:"Template"})," base en la carpeta ",(0,a.jsx)(n.code,{children:"templates"})," de tu aplicaci\xf3n. A continuaci\xf3n se muestra un ejemplo de c\xf3mo crear un template base en Django:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'\x3c!-- base.html --\x3e\r\n\r\n<!DOCTYPE html>\r\n<html lang="es">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>{% block title %}Mi Sitio Web{% endblock %}</title> \x3c!-- T\xedtulo de la p\xe1gina --\x3e\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <h1>Mi Sitio Web</h1>\r\n    </header>\r\n\r\n    <nav>\r\n        <ul>\r\n            <li><a href="{% url \'home\' %}">Inicio</a></li> \x3c!-- Enlace a la p\xe1gina de inicio --\x3e\r\n            <li><a href="{% url \'about\' %}">Acerca de</a></li> \x3c!-- Enlace a la p\xe1gina acerca de --\x3e\r\n            <li><a href="{% url \'contact\' %}">Contacto</a></li> \x3c!-- Enlace a la p\xe1gina de contacto --\x3e\r\n        </ul>\r\n    </nav>\r\n\r\n    <main>\r\n        {% block content %} \x3c!-- Contenido de la p\xe1gina --\x3e\r\n        {% endblock %} \x3c!-- Fin del bloque de contenido --\x3e\r\n    </main>\r\n\r\n    <footer>\r\n        <p>&copy; 2021 Mi Sitio Web</p>\r\n    </footer> \r\n        {% block scripts %} \x3c!-- Scripts de la p\xe1gina --\x3e\r\n        {% endblock %} \x3c!-- Fin del bloque de scripts --\x3e\r\n</body>\r\n</html>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, hemos creado un template base llamado ",(0,a.jsx)(n.code,{children:"base.html"})," que define la estructura b\xe1sica de nuestro sitio web. El template base contiene un encabezado con el t\xedtulo del sitio web, una barra de navegaci\xf3n con enlaces a las p\xe1ginas de inicio, acerca de y contacto, un \xe1rea principal para el contenido de la p\xe1gina y un pie de p\xe1gina con los derechos de autor del sitio web."]}),"\n",(0,a.jsx)(n.h2,{id:"extender-un-template",children:"Extender un template"}),"\n",(0,a.jsxs)(n.p,{children:["Para extender un template en Django, puedes crear un ",(0,a.jsx)(n.code,{children:"Template"})," que herede del template base y sobrescriba los bloques de contenido necesarios. A continuaci\xf3n se muestra un ejemplo de c\xf3mo extender un template en Django:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"\r\n\x3c!-- home.html --\x3e\r\n\r\n{% extends 'base.html' %} \x3c!-- Extender del template base --\x3e\r\n\r\n{% block title %}Inicio - Mi Sitio Web{% endblock %} \x3c!-- T\xedtulo de la p\xe1gina --\x3e\r\n\r\n{% block content %} \x3c!-- Contenido de la p\xe1gina --\x3e\r\n    <h2>Bienvenido a la p\xe1gina de inicio</h2>\r\n    <p>Esta es la p\xe1gina de inicio de mi sitio web. \xa1Espero que disfrutes tu visita!</p>\r\n{% endblock %} \x3c!-- Fin del bloque de contenido --\x3e\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, hemos creado un template llamado ",(0,a.jsx)(n.code,{children:"home.html"})," que extiende del template base ",(0,a.jsx)(n.code,{children:"base.html"}),". Hemos sobrescrito los bloques ",(0,a.jsx)(n.code,{children:"title"})," y ",(0,a.jsx)(n.code,{children:"content"})," para personalizar el t\xedtulo de la p\xe1gina y el contenido de la p\xe1gina de inicio."]}),"\n",(0,a.jsx)(n.h2,{id:"incluir-archivos-est\xe1ticos",children:"Incluir archivos est\xe1ticos"}),"\n",(0,a.jsxs)(n.p,{children:["Para incluir archivos est\xe1ticos en un template en Django, puedes utilizar la etiqueta ",(0,a.jsx)(n.code,{children:"static"})," para hacer referencia a los archivos est\xe1ticos en tu aplicaci\xf3n. A continuaci\xf3n se muestra un ejemplo de c\xf3mo incluir archivos est\xe1ticos en un template en Django:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"\x3c!-- home.html --\x3e\r\n\r\n{% extends 'base.html' %}\r\n\r\n{% load static %} \x3c!-- Cargar archivos est\xe1ticos --\x3e\r\n\r\n{% block title %}Inicio - Mi Sitio Web{% endblock %} \x3c!-- T\xedtulo de la p\xe1gina --\x3e\r\n\r\n{% block content %} \x3c!-- Contenido de la p\xe1gina --\x3e\r\n    <h2>Bienvenido a la p\xe1gina de inicio</h2>\r\n    <p>Esta es la p\xe1gina de inicio de mi sitio web. \xa1Espero que disfrutes tu visita!</p>\r\n    <img src=\"{% static 'img/logo.png' %}\" alt=\"Logo de Mi Sitio Web\"> \x3c!-- Incluir una imagen est\xe1tica --\x3e\r\n{% endblock %} \x3c!-- Fin del bloque de contenido --\x3e\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, hemos utilizado la etiqueta ",(0,a.jsx)(n.code,{children:"load static"})," para cargar archivos est\xe1ticos en el template ",(0,a.jsx)(n.code,{children:"home.html"}),". Hemos incluido una imagen est\xe1tica llamada ",(0,a.jsx)(n.code,{children:"logo.png"})," en la p\xe1gina de inicio de nuestro sitio web."]}),"\n",(0,a.jsx)(n.h1,{id:"templates-con-condicionales",children:"Templates con condicionales"}),"\n",(0,a.jsx)(n.h2,{id:"utilizar-condicionales",children:"Utilizar condicionales"}),"\n",(0,a.jsxs)(n.p,{children:["Para utilizar condicionales en un template en Django, puedes utilizar la etiqueta ",(0,a.jsx)(n.code,{children:"if"})," para evaluar una condici\xf3n y mostrar contenido condicionalmente en tu p\xe1gina. A continuaci\xf3n se muestra un ejemplo de c\xf3mo utilizar condicionales en un template en Django:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"\r\n\x3c!-- home.html --\x3e\r\n\r\n{% extends 'base.html' %}\r\n\r\n{% load static %} \x3c!-- Cargar archivos est\xe1ticos --\x3e\r\n\r\n{% block title %}Inicio - Mi Sitio Web{% endblock %}\r\n\r\n{% block content %}\r\n    <h2>Bienvenido a la p\xe1gina de inicio</h2>\r\n    <p>Esta es la p\xe1gina de inicio de mi sitio web. \xa1Espero que disfrutes tu visita!</p>\r\n    {% if user.is_authenticated %} \x3c!-- Evaluar si el usuario est\xe1 autenticado --\x3e\r\n        <p>Bienvenido, {{ user.username }}!</p>\r\n    {% else %} \x3c!-- Si el usuario no est\xe1 autenticado --\x3e\r\n        <p>Inicia sesi\xf3n para acceder a contenido exclusivo.</p>\r\n    {% endif %} \x3c!-- Fin del condicional --\x3e\r\n{% endblock %}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, hemos utilizado la etiqueta ",(0,a.jsx)(n.code,{children:"if"})," para evaluar si el usuario est\xe1 autenticado y mostrar un mensaje de bienvenida personalizado si el usuario est\xe1 autenticado. Si el usuario no est\xe1 autenticado, se mostrar\xe1 un mensaje para iniciar sesi\xf3n."]}),"\n",(0,a.jsx)(n.h1,{id:"templates-con-bucles",children:"Templates con bucles"}),"\n",(0,a.jsx)(n.h2,{id:"utilizar-bucles",children:"Utilizar bucles"}),"\n",(0,a.jsxs)(n.p,{children:["Para utilizar bucles en un template en Django, puedes utilizar la etiqueta ",(0,a.jsx)(n.code,{children:"for"})," para iterar sobre una lista de elementos y mostrar contenido repetitivo en tu p\xe1gina. A continuaci\xf3n se muestra un ejemplo de c\xf3mo utilizar bucles en un template en Django:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"\r\n\x3c!-- blog.html --\x3e\r\n\r\n{% extends 'base.html' %}\r\n\r\n{% load static %} \x3c!-- Cargar archivos est\xe1ticos --\x3e\r\n\r\n{% block title %}Blog - Mi Sitio Web{% endblock %}\r\n\r\n{% block content %}\r\n    <h2>Blog</h2>\r\n    <ul>\r\n        {% for post in posts %} \x3c!-- Iterar sobre la lista de publicaciones --\x3e\r\n            <li>\r\n                <h3>{{ post.title }}</h3>\r\n                <p>{{ post.content }}</p>\r\n            </li>\r\n        {% endfor %} \x3c!-- Fin del bucle --\x3e\r\n    </ul>\r\n{% endblock %}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, hemos utilizado la etiqueta ",(0,a.jsx)(n.code,{children:"for"})," para iterar sobre una lista de publicaciones y mostrar el t\xedtulo y el contenido de cada publicaci\xf3n en una lista. Cada elemento de la lista de publicaciones se representa como un objeto ",(0,a.jsx)(n.code,{children:"post"})," que contiene un t\xedtulo y un contenido."]}),"\n",(0,a.jsx)(n.h2,{id:"utilizar-bucles-while",children:"Utilizar bucles while"}),"\n",(0,a.jsxs)(n.p,{children:["Para utilizar bucles ",(0,a.jsx)(n.code,{children:"while"})," en un template en Django, puedes utilizar la etiqueta ",(0,a.jsx)(n.code,{children:"for"})," con un filtro ",(0,a.jsx)(n.code,{children:"slice"})," para iterar sobre una lista de elementos y mostrar contenido repetitivo en tu p\xe1gina. A continuaci\xf3n se muestra un ejemplo de c\xf3mo utilizar bucles ",(0,a.jsx)(n.code,{children:"while"})," en un template en Django:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"\r\n\x3c!-- blog.html --\x3e\r\n\r\n{% extends 'base.html' %}\r\n\r\n{% load static %} \x3c!-- Cargar archivos est\xe1ticos --\x3e\r\n\r\n{% block title %}Blog - Mi Sitio Web{% endblock %}\r\n\r\n{% block content %}\r\n    <h2>Blog</h2>\r\n    <ul>\r\n        {% for post in posts|slice:\":5\" %} \x3c!-- Iterar sobre los primeros 5 elementos de la lista de publicaciones --\x3e\r\n            <li>\r\n                <h3>{{ post.title }}</h3>\r\n                <p>{{ post.content }}</p>\r\n            </li>\r\n        {% endfor %} \x3c!-- Fin del bucle --\x3e\r\n    </ul>\r\n{% endblock %}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, hemos utilizado la etiqueta ",(0,a.jsx)(n.code,{children:"for"})," con un filtro ",(0,a.jsx)(n.code,{children:"slice"})," para iterar sobre los primeros 5 elementos de una lista de publicaciones y mostrar el t\xedtulo y el contenido de cada publicaci\xf3n en una lista. El filtro ",(0,a.jsx)(n.code,{children:"slice"})," se utiliza para limitar el n\xfamero de elementos que se muestran en la lista."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var a=i(6540);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);