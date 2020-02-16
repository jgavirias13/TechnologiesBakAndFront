import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from '../../../environments/environment';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public technologies: Technology[];
  public query: string;

  constructor(private activeRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.query = params.query;
      this.httpService.searchTechnology(this.query).subscribe((technologies) => {
        this.technologies = technologies;
        this.technologies.forEach((technology) => {
          technology.logo = environment.baseImgURL + technology.logo;
        });
      });
    });
  }

}
