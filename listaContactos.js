let listaDeContactos = [
  "Mateo Restrepo Mendoza",
  "Carolina Ochoa Mejia",
  "Adriana Cardona Velez",
  "Adrian Rios Perez",
  "Mariana Escalante Lopez",
  "Erika Herrera Perez",
  "Barbara Ruiz Diaz",
  "Jorge Rodriguez Moreno",
  "Mariela Gomez Sepulveda",
  "Yolanda Roca Cabrera",
  "Leonel Garcia Rojas",
  "Carla Vargas Martinez",
  "Fidel Quiroz Tangarife",
  "Paola Delgado Sandoval",
  "William Espinosa Ospina",
  "Rafael Molina Hernandez",
  "Patricia Ramirez Perez",
  "Lorenzo Figueroa Morales",
  "Camila Piedrahita Osorio",
  "Felipe Zuluaga Arenas",
  "Gisela Arango Rivera",
  "Jorge Carrillo Giraldo",
  "Antonio Posada Vergara",
  "Antonella Palacio Toro",
  "Paola Henao Franco",
  "Sara Trujillo Saez",
  "Valentina Tavera Vanegas",
  "Carlos Tobon Guzman",
  "Ariana Vidal Florez",
  "Diego Arias Restrepo",
  "Matias Guerra Serrano",
  "Gabriela Garces Botero",
  "Ana Cuellar Zambrano",
  "Camilo Agudelo Rivas",
  "Saul Medina Sarmiento",
  "Miguel Arredondo Nolasco",
  "Raul Castro Varela",
  "Martha Cano Bustamante",
  "Alfredo Meneses Sanchez",
  "Daniela Zapata Montoya",
  "Antonia Suarez Ramirez",
  "Ignacio Villa Moreno",
  "Alejandro Jaramillo Echeverri",
  "Ricardo Velez Santamaria",
  "Matilde Arboleda Uribe",
  "Isabel Puerta Sierra",
  "Edilberto Arango Garzon",
  "Paula Escobar Garcia",
  "Lucia Vera Bedoya",
  "Cristian Taborda Bustos",
];

//Función para añadir un contacto nuevo a la lista

function agregarContacto(nombreCompleto) {
  listaDeContactos.push(nombreCompleto);
}

// Agregar un contacto nuevo

console.log(
  `El numero de contactos antes de agregar uno nuevo es ${listaDeContactos.length}`
);
agregarContacto("Daniela Ramirez Alvarez");
console.log(
  `El numero de contactos después de agregar uno nuevo es ${listaDeContactos.length}`
);
console.log(
  `El ultimo contacto agregado a la lista fue ${
    listaDeContactos[listaDeContactos.length - 1]
  }`
);

console.log(listaDeContactos);

//Función para borrar un contacto existente

function eliminarContacto(nombreCompleto) {
  let indice = listaDeContactos.indexOf(nombreCompleto);
  console.log(indice);

  if (indice >= 0) {
    listaDeContactos.splice(indice, 1);
  } else {
    console.log(
      `${nombreCompleto} no existe, por favor verifica el nombre completo`
    );
  }
}

eliminarContacto("Mateo restrepo mendoza");
eliminarContacto("Lucia Vera Bedoya");
