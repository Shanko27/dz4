import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';
import {DetalPost} from '../../models/detalPost';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {
  @Input()
detailedPost: DetalPost;
  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe((param) => {
      this.postService.getPostId(param.id).subscribe(post => this.detailedPost = post);
    });
  }
  ngOnInit(): void {
  }

}
