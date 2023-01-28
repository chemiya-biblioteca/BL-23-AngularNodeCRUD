import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url='/api';
  constructor(private http: HttpClient) { }


  //get equipos
  getEquipos()
  {
    return this.http.get(this.url);
  }


  //get un Equipo con el id
  getUnEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar equipo pasando el equipo de objeto
  addEquipo(equipo:Equipo)
  {
    return this.http.post(this.url, equipo);
  }


  //eliminar  con el id
  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar equipo con el id y pasando el equipo en objeto
  editEquipo(id:string, equipo:Equipo){
    return this.http.put(this.url+'/'+id, equipo);
  }

}


export interface Equipo{//interfaz para el equipo y sus atributos
  id_equipo?:string;
  nombre?:string;
  localizacion?:string;
}
