import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };//creo tutorial vacio
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {//cojo los campos
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)//lo llamo para que lo guarde
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };//reinicio los campos
  }

}