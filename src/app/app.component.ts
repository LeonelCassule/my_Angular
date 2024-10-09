import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursoService } from './curso.service';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'crud-Angular';
  public photoList: any [] = [];


  constructor(private _photoService : CursoService){

 }

 public  ngOnInit(): void {
  this.getAllPhotos();
 }


  private getAllPhotos():void{
   this._photoService
     .getPhotos()
     .subscribe((res:any)=>{
        this.photoList = res;
     });
 }


}
