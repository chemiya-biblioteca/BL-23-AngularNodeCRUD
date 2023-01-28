import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];//aray con los tutoriales
  currentTutorial: Tutorial = {};//tutorial concreto
  currentIndex = -1;
  title = '';//para la busqueda de un titulo

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();//busco los tutoriales
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()//busco todos
      .subscribe({
        next: (data) => {
          this.tutorials = data;//los guardo en el array
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();//Busco todos y limpio campos
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;//actualizo campos
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()//llamo para que borre todos y actualizo lista
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};//limpio los campos 
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)//llamo para que busque y los guardo en el array
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}