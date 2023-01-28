import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;//reicbo entradas

  @Input() currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };//los datos del tutorial
  
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);//cojo el id de la ruta
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)//busco el tutorial en labase de datos
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;//lo guardo en la variable
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };//pongo datos del tutorial y nuevo published

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)//llamo para actualizar
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;//guardo el campo y pongo mensaje
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';//llamo al servicio para que lo actualice

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);//pongo mensaje correcto
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {//borro por el id y navego a la principal
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}