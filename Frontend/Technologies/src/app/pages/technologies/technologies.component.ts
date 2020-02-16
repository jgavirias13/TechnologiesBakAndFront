import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Technology } from 'src/app/models/technology.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technologies: Array<Technology>;

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTechnologies().subscribe((technologies: Technology[]) => {
      this.technologies = technologies;
      this.technologies.forEach((technology) => {
        technology.logo = environment.baseImgURL + technology.logo;
      });
    });
  }
}
