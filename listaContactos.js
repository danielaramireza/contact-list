let listaDeContactos = [
  {
    id: 1,
    nombres: "Mateo",
    apellidos: "Restrepo Mendoza",
    telefono: 3104356783,
    ubicaciones: {
      ciudad: "Medellin",
      direccion: "Calle 17 #76-23",
    },
  },
  {
    id: 2,
    nombres: "Carolina",
    apellidos: "Ochoa Mejia",
    telefono: 3208675423,
    ubicaciones: {
      ciudad: "Bogota",
      direccion: "Calle 20 #55-42",
    },
  },
  {
    id: 3,
    nombres: "Adriana",
    apellidos: "Cardona Velez",
    telefono: 3119653164,
    ubicaciones: {
      ciudad: "Envigado",
      direccion: "Calle 32 #12-65",
    },
  },
  {
    id: 4,
    nombres: "Adrian",
    apellidos: "Rios Perez",
    telefono: 3112334612,
    ubicaciones: {
      ciudad: "Sabaneta",
      direccion: "Carrera 65 #34-58",
    },
  },
  {
    id: 5,
    nombres: "Mariana",
    apellidos: "Escalante Lopez",
    telefono: 3219513546,
    ubicaciones: {
      ciudad: "Itagui",
      direccion: "Calle 7 #54-98",
    },
  },
  {
    id: 6,
    nombres: "Erika",
    apellidos: "Herrera Perez",
    telefono: 3128215436,
    ubicaciones: {
      ciudad: "Caldas",
      direccion: "Carrera 52 #38-95",
    },
  },
  {
    id: 7,
    nombres: "Barbara",
    apellidos: "Ruiz Diaz",
    telefono: 3204336142,
    ubicaciones: {
      ciudad: "Medellin",
      direccion: "Carrera 80 #65-15",
    },
  },
  {
    id: 8,
    nombres: "Jorge",
    apellidos: "Rodriguez Moreno",
    telefono: 3103442187,
    ubicaciones: {
      ciudad: "Envigado",
      direccion: "Calle 56 #54-97",
    },
  },
  {
    id: 9,
    nombres: "Mariela",
    apellidos: "Gomez Sepulveda",
    telefono: 3115324531,
    ubicaciones: {
      ciudad: "Rionegro",
      direccion: "Calle 55 #80-23",
    },
  },
  {
    id: 10,
    nombres: "Yolanda",
    apellidos: "Roca Cabrera",
    telefono: 3205443876,
    ubicaciones: {
      ciudad: "Guarne",
      direccion: "Carrera 54 #65-91",
    },
  },
  {
    id: 11,
    nombres: "Leonel",
    apellidos: "Garcia Rojas",
    telefono: 3195537654,
    ubicaciones: {
      ciudad: "Caldas",
      direccion: "Calle 30 #67-32",
    },
  },
  {
    id: 12,
    nombres: "Carla",
    apellidos: "Vargas Martinez",
    telefono: 3108097643,
    ubicaciones: {
      ciudad: "Itagui",
      direccion: "Calle 45 #23-65",
    },
  },
  {
    id: 13,
    nombres: "Fidel",
    apellidos: "Quiroz Tangarife",
    telefono: 3016557843,
    ubicaciones: {
      ciudad: "Medellin",
      direccion: "Carrera 67 #55-43",
    },
  },
  {
    id: 14,
    nombres: "Paola",
    apellidos: "Delgado Sandoval",
    telefono: 3193421543,
    ubicaciones: {
      ciudad: "La Estrella",
      direccion: "Calle 52 #71-43",
    },
  },
  {
    id: 15,
    nombres: "William",
    apellidos: "Espinosa Ospina",
    telefono: 3129875432,
    ubicaciones: {
      ciudad: "Medellin",
      direccion: "Carrera 65 #32-21",
    },
  },
];

//Función para ordenar alfabéticamente la lista de contactos

function ordenarContactos() {
  listaDeContactos.sort(function (a, b) {
    const nombresA = a.nombres.toUpperCase();
    const nombresB = b.nombres.toUpperCase();
    const apellidosA = a.apellidos.toUpperCase();
    const apellidosB = b.apellidos.toUpperCase();

    if (nombresA < nombresB) {
      return -1;
    } else if (nombresA > nombresB) {
      return 1;
    } else {
      if (apellidosA < apellidosB) {
        return -1;
      } else if (apellidosA > apellidosB) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

ordenarContactos();

//Función para retornar el último id
function retornarUltimoId() {
  const ultimoId = listaDeContactos.reduce((max, objeto) => {
    if (objeto.id > max) {
      return objeto.id;
    }
    return max;
  }, 0);
  return ultimoId;
}

console.log(listaDeContactos);

//Función para añadir un nuevo contacto(objeto) a la lista(array)

function agregarContacto(nombres, apellidos, telefono, ciudad, direccion) {
  let contactoNuevo = {
    id: retornarUltimoId() + 1,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: {
      ciudad: ciudad,
      direccion: direccion,
    },
  };
  listaDeContactos.push(contactoNuevo);
  ordenarContactos();
}

agregarContacto(
  "Camila",
  "Vallejo Solorzano",
  3126432673,
  "Cali",
  "Calle 65 # 65-76"
);

//console.log(listaDeContactos);

//Función para eliminar un contacto(objeto) existente de la lista(array)

function eliminarContacto(id) {
  let indice = listaDeContactos.findIndex((objeto) => objeto.id === id);
  console.log(indice);

  if (indice >= 0) {
    listaDeContactos.splice(indice, 1);
  } else {
    console.log(`El id: ${id} no existe, por favor verifica`);
  }
}

eliminarContacto(1);

console.log(listaDeContactos);
