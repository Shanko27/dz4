import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {DetalPost} from '../../models/detalPost';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  @Input()
  detailedPostt: DetalPost;
detailedUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService, private postService: PostService) {
    this.activatedRoute.params.subscribe((params) => {
      this.userService.getUserId(params.id).subscribe(user => this.detailedUser = user);
      this.postService.getPostId(params.id).subscribe(post => this.detailedPostt = post);
    });
  }

  ngOnInit(): void {
  }

}
