import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router, ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo={
    id_equipo:'',
    nombre:'',
    localizacion:''
  };//equipo vacio

  constructor(private EquipoService:EquipoService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params.id;//busco el id en la ruta
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){//le busco en la base de datos
      this.EquipoService.getUnEquipo(id_entrada).subscribe(
        res=>{
          this.equipo = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {
//guardo el nuevo equipo con sus nuevos datos
    this.EquipoService.editEquipo(this.equipo.id_equipo, this.equipo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);//navego a ala ruta principal
  }

}
