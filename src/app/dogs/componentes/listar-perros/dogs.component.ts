import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any[] = [];
  images!: string[];
  isView!: boolean;
  constructor(private dogsService: DogsService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.dogsService.getAll().subscribe(
      (response) =>{
        Object.keys(response.message).map( (breed) =>{
          this.dogs.push(breed);
        })
      }, error =>{
        console.log("Hubo un problema al obtener la lista de razas", error)
      });
  }

  onChangeBreed(breed: any){
    if (breed != "seleccionar") {
      this.dogsService.getImage(breed).subscribe(
        (response) =>{
          this.images = response.message;
      });
    }
  }

}
