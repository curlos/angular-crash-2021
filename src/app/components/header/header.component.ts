import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false
  subscription!: Subscription

  constructor(private uiService: UiService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value))
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
    console.log('toggle')
  }

  hasRoute(route: string) {
    console.log(this.router.url)
    console.log(route)
    return this.router.url === route
  }

}
