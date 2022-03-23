import { Component, OnInit, ViewChild } from '@angular/core';
import { Images } from 'src/app/Model/Sliki';
import { freeApiService } from 'src/app/services/freeapi.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

  imgs : Images[];
  totalRecords:number;
  page: number = 1;

  constructor(private _freeApiService: freeApiService) { }

  ngOnInit() {
    this._freeApiService.getData().subscribe
    (
      data =>
      {
      this.imgs = data;
      this.totalRecords = this.imgs.length;
    }
    );
    }
  }