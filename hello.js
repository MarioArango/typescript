console.log("Hola");
console.log("Hola 2");
//TODO: tsc es el compilador de typescript
//tsc hellor.ts -> compila y transforma a JS
//creara un archivo hello.js -> lo ejecutamos con node hello.js
//watch -> ejecuta un servicio para ver los cambios en el archivo, su nodemon hot reloading
//tsc --watch hello.ts -> transpila los cambios en ese archivo
//tsc --watch -> tanspila todos los archivos que realicen cambios
//permite configurar las opciones para el compilador ts
//personaliza las opciones de compilacion
//tsc --init -> crea el archivo de configuracion. tsconfig.json
//target -> indica a que ES se compilara
//modulo -> configuracion para la generacion de modulos, none, commonjs, amd, system...
//stric -> verificacion estricta de tipos
//removeComments -> elimina los comentarios en el proceso de compilacion
//tambien podemos poner configuraciones adicionales
//include -> una lista de directorios que se compilaram
//exclude -> una lista para excluir directorios que no se compilaram
//extends -> podemos heredar configuraciones de otro proyecto
//compileOnSave -> para que el editor compile de forma automatica al hacer ctrl + S, --watch
//tsc -> busca el archivo de configuracion para saber como va compilar, compila todo por default
//tsc --micarpeta mirpoyecto -> especifica un directorio que tiene mi archivo de conf
//tsc miarchivo.ts -> Omite la configuracion, compila el archivo
//outDir: "./dist" -> personaliza como se llamara nuestra carpe5ta de salida
