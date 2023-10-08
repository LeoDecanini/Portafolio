import React from "react";
import { BsPhone, BsDatabaseCheck } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { RxGear } from "react-icons/rx";
import { IoPulseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import yo from "/img/yo.webp";

import html from "/img/html.png";
import css from "/img/css.png";
import js from "/img/js.png";
import node from "/img/node.png";
import react from "/img/react.png";
import slq from "/img/slq.png";
import wordpress from "/img/wordpress.png";
import talwincss from "/img/talwincss.png";
import mongo from "/img/mongo.png";

const skillsData = [
  { name: "HTML", imgSrc: html },
  { name: "CSS", imgSrc: css },
  { name: "JavaScript", imgSrc: js },
  { name: "Node.js/Express", imgSrc: node },
  { name: "React", imgSrc: react },
  { name: "MySQL", imgSrc: slq },
  { name: "WordPress", imgSrc: wordpress },
  { name: "talwincss", imgSrc: talwincss },
  { name: "mongo", imgSrc: mongo },
];

const Home = () => {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="contenedor-pagina-inicio">
          <h1>Hola</h1>
          <h2>
            Soy <span>Leonardo Decanini</span>
          </h2>
          <p>
            soy diseñador y programador web, tengo 19 años.Soy desarrollador
            web, Mis conocimientos abarcan : Stack MERN.
          </p>
        </div>

        <div className="contenedor-pagina-inicio-img">
          <img src={yo} alt="" />
        </div>
      </section>

      <section id="sobremi" className="Aboutme">
        <div className="texto-aboutme">
          <h2>¿Quién soy yo?</h2>
          <p>
            Un apasionado diseñador y programador web de 19 años. Mi enfoque
            está en constante crecimiento y perfeccionamiento. Actualmente, me
            encuentro estudiando para convertirme en un Full Stack Developer en
            la Escuela Da Vinci, y complemento mi formación con cursos
            adicionales.
          </p>

          <p>
            Además, estoy realizando trabajos freelance para aplicar mis
            conocimientos en la práctica. Entre mis habilidades se encuentran
            MySQL, node.js, React, express y talwincss. Estoy ansioso por seguir
            aprendiendo y creciendo en este emocionante mundo del diseño y la
            programación web.
          </p>
          <Link>
            <button className="boton-cv">Curriculum</button>
          </Link>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {skillsData.map((skill, index) => (
              <li key={index}>
                <img src={skill.imgSrc} alt={skill.name} />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="estudios" className="Services">
        <div>
          <h2>Habilidades</h2>

          <div className="servicio-contenedor">
            <div className="sv">
              <BsPhone className="icon text-blue-600" />
              <h3>Desarrollo Frontend con React</h3>
              <p>
                Creación de interfaces de usuario modernas y atractivas
                utilizando React, una de las principales bibliotecas de
                JavaScript para construir aplicaciones web interactivas y
                receptivas.
              </p>
            </div>

            <div className="sv">
              <BiCodeAlt className="icon text-yellow-400" />
              <h3>Desarrollo Backend con Node.js/Express</h3>
              <p>
                Construcción de servidores robustos y eficientes utilizando
                Node.js y Express, garantizando un rendimiento y una
                escalabilidad óptimos para tus aplicaciones web.
              </p>
            </div>

            <div className="sv">
              <BsDatabaseCheck className="icon text-cyan-400" />
              <h3>Gestión de Bases de Datos</h3>
              <p>
                Diseño, implementación y administración de bases de datos
                utilizando tecnologías como MySQL, MongoDB y Firebase, para
                garantizar un acceso rápido y seguro a tus datos.
              </p>
            </div>

            <div className="sv">
              <RxGear className="icon text-green-600" />
              <h3>Optimización de Rendimiento de Aplicaciones</h3>
              <p>
                Identificación y resolución de problemas de rendimiento en
                aplicaciones web y móviles. Mejora del rendimiento de backend y
                frontend para garantizar una experiencia fluida para los
                usuarios.
              </p>
            </div>

            <div className="sv">
              <IoPulseOutline className="icon text-orange-600" />
              <h3>SEO</h3>
              <p>
                Mi enfoque se centra en estrategias de SEO efectivas para que tu
                sitio web pueda alcanzar mejores posiciones en los resultados de
                búsqueda, aumentar su visibilidad en línea y atraer un flujo
                constante de tráfico de calidad
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="trabajos">
        <h2 className="gradient-color">Proyectos</h2>
        <div className="contenedor-video">
          <div className="video">
            <iframe
              src="https://drive.google.com/file/d/1-8joJg_gnVsimxGQ7jFQjBcdDz03AXhI/preview"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contenedor-texto-trabajos">
            <h3>Empresa Prismate</h3>
            <p>
              Esta es la pagina de mi propia empresa de dessarroyo y diseño web,
              actualmente esta en crecimiento,Pero esta ya preparada para
              funcionar totalmente
            </p>
            <p>
              <a
                href="http://www.prismateweb.com"
                className="urlpag"
                target="_blank"
              >
                Ir a la pagina
              </a>
            </p>
            <p className="color-cursos">React</p>
          </div>
        </div>

        <div className="contenedor-video">
          <div className="video">
            <iframe
              src="https://drive.google.com/file/d/1w90rNy7IH9PNO1iEN7GbSUpVMakfIiRE/preview"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contenedor-texto-trabajos">
            <h3>Proyecto Reproductos de peliculas</h3>
            <p>
              Este fue un proyecto hecho para la materia de Aplicaciones web, el
              objetivo era lograr Reprodcutos de peliculas al estilo de netflix,
              trayendo datos desde un json local y que cada pelicula tenga su
              descripcion.
            </p>
            <p>
              El objetivo mas importante, era utilizar una nueva tecnologia, y
              lograr hacer esta pagina, es algo simple pero con muchas
              utilidades.
            </p>
            <p className="color-cursos">js - vue.js - css</p>
          </div>
        </div>

        <div className="contenedor-video">
          <div className="video">
            <iframe
              src="https://drive.google.com/file/d/1TAh0M1EABukWKnXmQZGb5y0a7F324rF8/preview"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contenedor-texto-trabajos">
            <h3>Proyecto Ecomerce Ropa</h3>
            <p>
              Este fue un proyecto hecho para la materia de Programacion 2, el
              objetivo era lograr un ecomerce completo, trayendo datos desde una
              base de datos y que cada producto tenga sus propias etiquetas.
            </p>
            <p>
              Tambien el objetivo era crear un ABM (osea un panel de
              administrador) en el cual se puedan ver todos los producto,
              editarlos, eliminarlos. Poder crear nuevos y tener una lista de
              usuarios con sus respectivas listas de compras, osea una tabla
              donde se vea cada compra que hiso
            </p>
            <p className="color-cursos">php - css - MySQL</p>
          </div>
        </div>

        <div className="contenedor-video">
          <div className="video">
            <iframe
              src="https://drive.google.com/file/d/1VTD9m_TFuR-imLWwmWUn0GselKFl9vJT/preview"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contenedor-texto-trabajos">
            <h3>Proyecto Ecomerce Tecnologia</h3>
            <p>
              Este fue un proyecto hecho para mi propio aprendizaje, el objetivo
              era lograr una pagina donde el back se conecte con el front
              mandando datos, en este caso con AXIOS.
            </p>
            <p>
              Tambie era el objetivo aprender y programa algo bastante grande y
              que sea escalable, en este cado se implementa un abm y const
              sistema de reguistro con json tokem, para los usuarios;
            </p>
            <p>Actualmente esta en desarrollo</p>
            <p className="color-cursos">
              React - MySQL - Node.js - Express - jwt - (proximamente Redux)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
