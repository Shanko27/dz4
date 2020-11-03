import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }

}
