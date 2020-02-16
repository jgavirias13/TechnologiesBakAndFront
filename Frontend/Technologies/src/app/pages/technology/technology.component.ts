import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Technology } from 'src/app/models/technology.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  public technology: Technology = {
    _id: '',
    name: '',
    description: '',
    logo: '',
    tags: [],
    createdAt: null,
    updatedAt: null
  };

  constructor(private acivatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.acivatedRoute.params.subscribe((parameters) => {
      const id: string = parameters.id;
      this.httpService.getTechnologie(id).subscribe((technology) => {
        this.technology = technology;
        this.technology.logo = environment.baseImgURL + technology.logo;
      });
    });
  }
}
