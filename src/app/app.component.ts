import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./common/nav/nav.component";
import { ViewAllBooksComponent } from "./page/view-all-books/view-all-books.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavComponent, ViewAllBooksComponent]
})
export class AppComponent {
  title = 'Demo-app';
}
