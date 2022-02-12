import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  colorToggle : any;

  constructor(private route: Router) {}

  ngOnInit(): void {}
  redirect(rota: string ){
    console.log(rota)
    this.route.navigate([rota]);
  }

}
