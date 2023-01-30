#Docker es un XAMPP para preparar la BBDD del proyecto de API
docker run --name myXampp -p 41061:22 -p 43306:3306 -p 41062:80 -d -v ~/my_web_pages:/www tomsik68/xampp:8
Luego conectarte a 
localhost:41602

y dentro ejecutar el archivo BBDD.sql
dentro de la BBDD.