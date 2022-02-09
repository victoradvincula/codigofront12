import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/main.css"

function App1(props) {
  console.log(typeof props.name);
  //props.name es un string se puede utilizar todos sus metodos
  return <h1>Hola {props.name.toUpperCase()} </h1>;
}

// todos lo que sean referencia de variables entre llaves
// la propiedad  de alum es un array es por ello que se utilza map para crear un nuevo array
const ImpAlum = (props) => {
  console.log(props);
  return (
    <ul>
      {props.alum.map((ref) => (
        <li>{ref}</li>
      ))}
    </ul>
  );
};

const ImpAlum2 = (props) => {
  console.log(props);
  return (
    <ul>
      {props.alumo.map((ref) => (
        <>
          <li>
            {ref.edad}
            {ref.nombre}
          </li>
          <li>{ref.apellido}</li>
        </>
      ))}
    </ul>
  );
};

const destinos = [
  {
    titulo: "Paracas",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg",
    description:
      "Cuzco es una ciudad de los Andes peruanos que fue la capital del Imperio Inca y es conocida por sus restos arqueológicos y la arquitectura colonial española. La Plaza de Armas es el centro de la ciudad antigua, con galerías, balcones de madera tallada y ruinas de murallas incas. El convento de Santo Domingo, de estilo barroco, se construyó sobre el Templo del Sol inca (Qoricancha) y tiene restos arqueológicos de cantería inca.",
    lugares: ["Islas Ballestas", "Chincha", "Ica"],
  },
  {
    titulo: "Puno",
    imagen:
      "https://elcomercio.pe/resizer/mPu28wKJwUJHYlSHDwOc15jxkSY=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VEPYJG6YNBBR3NFQBU2VYI2JQQ.jpg",
    description:
      "Cuzco es una ciudad de los Andes peruanos que fue la capital del Imperio Inca y es conocida por sus restos arqueológicos y la arquitectura colonial española. La Plaza de Armas es el centro de la ciudad antigua, con galerías, balcones de madera tallada y ruinas de murallas incas. El convento de Santo Domingo, de estilo barroco, se construyó sobre el Templo del Sol inca (Qoricancha) y tiene restos arqueológicos de cantería inca.",
    lugares: ["Islas Ballestas", "Chincha", "Ica"],
  },
  {
    titulo: "Piura",
    imagen:
      "https://elcomercio.pe/resizer/CLRwJOh4fHTwXC2_Pxuy6fIHFQQ=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2AXNFE5EWVDZJIAEC7VIOPWCWA.jpg",
    description:
      "Cuzco es una ciudad de los Andes peruanos que fue la capital del Imperio Inca y es conocida por sus restos arqueológicos y la arquitectura colonial española. La Plaza de Armas es el centro de la ciudad antigua, con galerías, balcones de madera tallada y ruinas de murallas incas. El convento de Santo Domingo, de estilo barroco, se construyó sobre el Templo del Sol inca (Qoricancha) y tiene restos arqueológicos de cantería inca.",
    lugares: ["Islas Ballestas", "Chincha", "Ica"],
  },
];

// otra forma de acceder a las propiedades mapeando el objeto
const Card = (props) => {
  const { description, titulo, imagen, destinos } = props;
  //destructuracion de objetos
  return (
    <article>
      <figure>
        <img width="500" src="block" src={imagen} alt="" />
      </figure>
      <div>
        <h2>{titulo}</h2>
        <p>{description}</p>
        <ImpAlum alum={destinos} />
      </div>
    </article>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <header>
       <Header/>
      </header>
      <main>
      {destinos.map((desti) => (
      <Card
        imagen={desti.imagen}
        titulo={desti.titulo}
        description={desti.description}
        destinos={desti.lugares}
      />
    ))}
      </main>
      <footer>Footer</footer>
    </div>
  );
};

const Header = () =>{ 
  return(
  <nav>
  <a>DESTONOS DEL MUNDO</a>
  </nav>
  )
};

ReactDOM.render(
  <App />,
document.getElementById("root")
);

//COMPONENTES BASICOS
// ReactDOM.render(
// <div>
// <App name="Paola Carpio" />
// <App name="Victor Advincula" />
// <App name="Maria Pinedo" />
// <ImpAlum alum={["pepe","maria","luis","mayumi"]}/>
// <ImpAlum alum={["pepe","maria","luis","michael"]}/>
// <ImpAlum2 alumo={[{nombre:"pepe", apellido:"ochoa", edad:20},{nombre:"marco", apellido:"ochoa", edad:25},{nombre:"leandro", apellido:"ochoa", edad:15},{nombre:"mateo", apellido:"ochoa", edad:30}]}/>
// {
//   destinos.map((desti) =>(
//     <Card imagen={desti.imagen} titulo={desti.titulo} description={desti.description} destinos={desti.lugares}/>
//   ))}
// <Card titulo="Cuzco" description="Cuzco es una ciudad de los Andes peruanos que fue la capital del Imperio Inca y es conocida por sus restos arqueológicos y la arquitectura colonial española. La Plaza de Armas es el centro de la ciudad antigua, con galerías, balcones de madera tallada y ruinas de murallas incas. El convento de Santo Domingo, de estilo barroco, se construyó sobre el Templo del Sol inca (Qoricancha) y tiene restos arqueológicos de cantería inca." imagen="https://www.peru.travel/Contenido/Atractivo/Imagen/pe/145/1.4/Principal/Machu%20Picchu.jpg" destinos={["Ollaytaytambo","Pisac","Maras"]} />
// <Card titulo="Arequipa" description="Arequipa es la capital de la época colonial de la región de Arequipa en Perú. La rodean 3 volcanes y cuenta con edificios barrocos construidos de sillar, una piedra volcánica blanca. En su centro histórico, se encuentra la Plaza de Armas, una imponente plaza principal, y al norte de ella está la Basílica Catedral neoclásica del siglo XVII, que alberga un museo donde se exhiben obras de arte y objetos religiosos." imagen="https://static.eldiario.es/clip/f9be6840-c0c9-4b7b-a969-cf1066d0c638_16-9-discover-aspect-ratio_default_0.jpg" destinos={["Ollaytaytambo","Pisac","Maras"]} />
// <Card titulo="Lima" description="Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. Pese a que su centro colonial se conserva, es una desbordante metrópolis y una de las ciudades más grandes de Sudamérica. El Museo Larco alberga una colección de arte precolombino y el Museo de la Nación recorre la historia de las civilizaciones antiguas de Perú. La Plaza de Armas y la catedral del siglo XVI son el núcleo del antiguo centro de Lima." imagen="https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg" destinos={["Ollaytaytambo","Pisac","Maras"]} />
// </div>,
// document.getElementById("root"));


