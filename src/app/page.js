"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';
import DetalleViaje from './pages/DetalleViaje';
import Link from 'next/link';
export default function Home() {


  const [Value, setValue] = useState("");

  const handleFilterChange = e => {
    setFilterValue(e.target.value);
  };

  const Arrary =  {"active":{"label":"Active","value":"12"},"automatic":{"label":"Automatic","value":"8"},"waiting":{"label":"Waiting","value":"1"},"manual":{"label":"Manual","value":"3"}};
  const ArraryViajes =  [{"pais_origen":"Peru",
                          "precio_antes":"350$",
                          "precio_despues":"250$",
                          "pais_destino":"Estados Unidos",
                          "id" :"1",
                          "tipo" :"Nacional"
                          },
                          {"pais_origen":"Peru",
                            "precio_antes":"350$",
                            "precio_despues":"150$",
                            "pais_destino":"Ecuador",
                            "id" :"2",
                          "tipo" :"Nacional"
                            },
                            {"pais_origen":"Peru",
                              "precio_antes":"350$",
                              "precio_despues":"150$",
                              "pais_destino":"Bolivia",
                              "id" :"3",
                              "tipo" :"Internacional"
                              },
                              {"pais_origen":"Peru",
                                "precio_antes":"350$",
                                "precio_despues":"280$",
                                "pais_destino":"Colombia",
                                "id" :"4",
                                "tipo" :"Internacional"
                                },
                                {"pais_origen":"Peru",
                                  "precio_antes":"350$",
                                  "precio_despues":"250$",
                                  "pais_destino":"Paraguay",
                                  "id" :"5",
                                    "tipo" :"Internacional"
                                  },
                                  {"pais_origen":"Peru",
                                    "precio_antes":"350$",
                                    "precio_despues":"250$",
                                    "pais_destino":"España",
                                    "id" :"6",
                                      "tipo" :"Internacional"
                                    },
                                    {"pais_origen":"Peru",
                                      "precio_antes":"350$",
                                      "precio_despues":"250$",
                                      "pais_destino":"Cuba",
                                      "id" :"7",
                                      "tipo" :"Internacional"
                                      },
                                      {"pais_origen":"Peru",
                                        "precio_antes":"350$",
                                        "precio_despues":"250$",
                                        "pais_destino":"Arequipa",
                                        "id" :"8",
                                        "tipo" :"Nacional"
                                        },
                                        {"pais_origen":"Peru",
                                          "precio_antes":"350$",
                                          "precio_despues":"250$",
                                          "pais_destino":"Arequipa",
                                          "id" :"9",
                                            "tipo" :"Nacional"
                                          },  
                        ];

                        const handleAgeFilterChange = (Value) => {
                          setValue(Value);
                        };
                       
                        const lista = ArraryViajes.filter(user => user.pais_destino.toLowerCase().includes(Value.toLowerCase()));    
  return (
    <div>
    {/* navbar */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
         <img  src="http://localhost:3000/icon.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Conoce mas de nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contactanos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Promociones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aerolineas
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Pais de Destino"
              aria-label="Search"
               value={Value}
               onChange={(e) => handleAgeFilterChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="http://localhost:3000/promocion.jpg"  width="800" height="400" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="..."/>
          
          
        </div>
        <div class="carousel-item">
        <img src="http://localhost:3000/promocion2.jpg"  width="800" height="400" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src="http://localhost:3000/promocion3.jpg"  width="800" height="400" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  
    <h2 className="text-center text-bg-primary m-2 p-2">
      Nuestros Viajes Disponibles
    </h2>
    <div className="container-fluid m-2 border border-success text-center">
    <div class="row">
      {

lista.map((number) =>

        <div key={number.id}  class="col-sm-3 mb-3 mb-sm-0"   >
        <div class="card">
        <div class="card-header">{number.tipo}</div>
          <div class="card-body">
            <h5 class="card-title"> </h5>
            <p class="card-text"> Viaje con Pais de Origen {number.pais_origen}  y destino  {number.pais_destino}  .</p>
            <p class="precio" >Precio antes S/{number.precio_antes} </p>
            <p  >Precio promocional S/{number.precio_despues} </p>
            <Link      
            class="btn btn-primary"
            href={{
              pathname: '/pages',
              query: number,
          }}
            
            >
 Mas Informacion
</Link>
             
          </div>
        </div>
      </div>


           
        ) 
       
       
       
       }
</div>




 
    </div>
    <div className="container-fluid m-2 border border-success text-center">
<p>@copyright   Mario Puma</p>{" "}
   </div>
  </div>
  );
}
