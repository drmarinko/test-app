import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  id: number;
  login: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      this.id = +paramMap.get('id');
      this.login = paramMap.get('login');
      console.log(this.id);
    });
  }

  get getId() {
    return this.id;
  }

  get getLogin() {
    return this.login;
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'asc'
      }
    });
  }

}
