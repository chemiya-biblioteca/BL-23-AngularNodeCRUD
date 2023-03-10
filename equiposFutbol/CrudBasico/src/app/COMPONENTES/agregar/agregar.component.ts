import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  equipo: Equipo={
    id_equipo:'',
    nombre:'',
    localizacion:''
  };//creo un equipo con los campos vacios

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    //delete this.equipo.id_equipo;

    this.EquipoService.addEquipo(this.equipo).subscribe();//llamo al servicio para que lo cree
    this.router.navigate(['/inicio']);//navego a la pantalla principal
  }

}
