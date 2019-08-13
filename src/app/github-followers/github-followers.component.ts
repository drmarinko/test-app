import { PostService } from './../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CombineLatestOperator, combineLatest } from 'rxjs/internal/observable/combineLatest';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [
    {
      id: 1,
      img: 'https://www.w3schools.com/w3images/avatar2.png',
      login: 'dmarinko',
      url: 'test.com'
    },
    {
      id: 2,
      img: 'https://www.w3schools.com/w3images/avatar2.png',
      login: 'dmarinko2',
      url: 'test2.com'
    }
  ];
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {

    // this.route.paramMap
    //   .subscribe(map => {
    //   });

    // this.route.queryParamMap
    //   .subscribe(map => {
    //     let page = +map.get('page');
    //     console.log(page);
    //   });

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(x => {
        this.service.get()
          .subscribe(y => {

          });
      });
  }

}
