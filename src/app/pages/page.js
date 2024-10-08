"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams  } from "next/navigation";
import React, { useState } from 'react';
export default function DetalleViaje({ props }) {
  const searchParams = useSearchParams();
  const data = searchParams.get("pais_origen");
  console.log(data);
  
if(searchParams.get("pais_origen")==null)
{
  window.history.back();

}

  const [Value, setValue] = useState("");

  const handleFilterChange = e => {
    setFilterValue(e.target.value);
  };

   
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

                         
                       
                       
  return (
    <div>
 
 <div class="container mt-5">
    <h1 class="text-center mb-4">Ruta de Vuelo </h1>

     
    <div class="text-center mb-4">
      <h4>{searchParams.get("pais_origen")} &rarr; {searchParams.get("pais_destino")}</h4>
      <p>Escala: Otros (MIA) de tipo  {searchParams.get("tipo")} </p>
    </div>

   
    <div class="flight-path">
     
      <div class="flight-stop">
        <i class="bi bi-geo-alt-fill"></i>
        <span>LIM</span>
        <div class="date">Salida: 8:00 AM</div>
      </div>
 
      <div class="flight-stop">
        <i class="bi bi-airplane"></i>
        <span>MIA</span>
        <div class="date">Escala: 2h 30m</div>
      </div>

 
      <div class="flight-stop">
        <i class="bi bi-building"></i>
        <span>JFK</span>
        <div class="date">Llegada: 6:00 PM</div>
      </div>
    </div>

  
    <div class="text-center mt-4">
      <p>Duración total del vuelo: 10h 30m (incluyendo escala)</p>
    </div>
  </div>


  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
         
        <h3 class="text-center mb-4">Reserva tu Vuelo</h3>

         
        <form>
           
          <div class="mb-3">
            <label for="origin" class="form-label">Ciudad de Origen</label>
            <input type="text" class="form-control" id="origin" placeholder="Ingrese su ciudad de origen" required/>
          </div>

           
          <div class="mb-3">
            <label for="destination" class="form-label">Ciudad de Destino</label>
            <input type="text" class="form-control" id="destination" placeholder="Ingrese su ciudad de destino" required/>
          </div>

          
          <div class="mb-3">
            <label for="departureDate" class="form-label">Fecha de Salida</label>
            <input type="date" class="form-control" id="departureDate" required/>
          </div>

          
          <div class="mb-3">
            <label for="returnDate" class="form-label">Fecha de Regreso (Opcional)</label>
            <input type="date" class="form-control" id="returnDate"/>
          </div>

          
          <div class="mb-3">
            <label for="passengers" class="form-label">Número de Pasajeros</label>
            <input type="number" class="form-control" id="passengers" placeholder="Ingrese el número de pasajeros" min="1" required/>
          </div>

          
          <div class="d-grid gap-2">
          <div  class="container mt-5 text-center">
      
      <button type="button" class="btn btn-primary mx-2"  data-bs-toggle="modal" data-bs-target="#paymentModal">Reservar</button>
       
     
     
      
      <button type="button" class="btn btn-secondary mx-2" onClick={() => window.history.back()}    >Cancelar</button>
     
     </div>
          </div>
        </form>
      </div>
    </div>
  </div>


     


  <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
       
        <div class="modal-header">
          <h5 class="modal-title" id="paymentModalLabel">Pasarela de Pago</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
 
        <div class="modal-body">
          <form class="needs-validation" novalidate>
            
            <div class="mb-3">
              <label for="cardHolderName" class="form-label">Nombre del Titular</label>
              <input type="text" class="form-control" id="cardHolderName" placeholder="Nombre como aparece en la tarjeta" required/>
              <div class="invalid-feedback">
                Por favor ingrese el nombre del titular de la tarjeta.
              </div>
            </div>

             
            <div class="mb-3">
              <label for="cardNumber" class="form-label">Número de Tarjeta</label>
              <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="16" pattern="\d{16}" required/>
              <div class="invalid-feedback">
                Ingrese un número de tarjeta válido de 16 dígitos.
              </div>
            </div>

            
            <div class="row">
               
              <div class="col-md-6 mb-3">
                <label for="expiryDate" class="form-label">Fecha de Expiración</label>
                <input type="text" class="form-control" id="expiryDate" placeholder="MM/AA" pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$" required/>
                <div class="invalid-feedback">
                  Ingrese una fecha válida (MM/AA).
                </div>
              </div>

             
              <div class="col-md-6 mb-3">
                <label for="cvv" class="form-label">CVV</label>
                <input type="text" class="form-control" id="cvv" placeholder="123" maxlength="3" pattern="\d{3}" required />
                <div class="invalid-feedback">
                  El CVV debe tener 3 dígitos.
                </div>
              </div>
            </div>

             
            <button type="submit" class="btn btn-primary w-100">Confirmar Pago</button>
          </form>
        </div>

        
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>


  </div>
  );
}
