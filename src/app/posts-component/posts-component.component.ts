import { AppError } from './../common/errors/app-error';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  constructor(private postClient: PostService) { }
  posts: any[];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postClient.get().subscribe(
      response => {
        this.posts = response as any[];
      },
      error => {
        throw(error);
      });
  }

  createPost(title: HTMLInputElement) {
    this.postClient.create(title)
      .subscribe(response => {
        const newPost = {
          id: (response as any).id,
          title: title.value
        };
        (this.posts as any[]).push(newPost);
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          alert('Invalid data provided');
        } else { throw new AppError(error); }
      });
  }

  updatePost(post: any) {
    post.title = 'Updated !';
    this.postClient.update(post)
      .subscribe(response => {
        console.log(response);
      },
      error => {
        return error;
      });
  }

  deletePost(post: any) {
    this.postClient.delete(post)
      .subscribe(response => {
        console.log(response);
        const indexOfItem = this.posts.indexOf(post);
        this.posts.splice(indexOfItem, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
           throw new AppError(error);
        }
      });
  }

}
