import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { routerNgProbeToken } from '../../../../../node_modules/@angular/router/src/router_module';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.css',
  '../../../app.animations.css', 
  '../../../app.transitions.css', 
  '../../../app.keyframes.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public router: Router
  constructor(router: Router) {   
    this.router = router;
  }

  ngOnInit() {

    if(localStorage.getItem("refresh")){

      if(localStorage.getItem("refresh") === "false"){
        localStorage.setItem("refresh", "true");
        location.reload();
      }
      else {
        localStorage.setItem("refresh", "false");
      }
    }
    else {
      localStorage.setItem("refresh", "false");
      location.reload();
    }
  }
}
