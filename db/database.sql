CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  age INT DEFAULT NULL,
  address VARCHAR(200) DEFAULT NULL,
  PRIMARY KEY (id)
);

-- show tables; Para ver las tablas creadas en la base de datos
-- DESCRIBE employee; Para ver la estructura de la tabla

INSERT INTO employee (name, salary, age, address) VALUES
  ('Juan', 1000, 25, 'Calle 1'),
  ('Pedro', 2000, 30, 'Calle 2'),
  ('Maria', 3000, 35, 'Calle 3'),
  ('Jose', 4000, 40, 'Calle 4'),
  ('Luis', 5000, 45, 'Calle 5'),
  ('Ana', 6000, 50, 'Calle 6'),
  ('Carlos', 7000, 55, 'Calle 7'),
  ('Sofia', 8000, 60, 'Calle 8'),
  ('Jorge', 9000, 65, 'Calle 9'),
  ('Luisa', 10000, 70, 'Calle 10');

-- Buscar un registro por id
SELECT * FROM employee WHERE id = 1;

-- Eliminar un registro por id
DELETE FROM employee WHERE id = 1;