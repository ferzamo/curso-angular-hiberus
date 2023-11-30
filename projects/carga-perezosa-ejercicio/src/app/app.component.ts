import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // constructor(public navigator: Navigator, private router: Router) {}
  // ngOnInit() {
  //   this.configureNetworkStatusListener();
  // }
  // configureNetworkStatusListener() {
  //   if (navigator.connection) {
  //     navigator.connection.addEventListener('change', () => {
  //       this.handleConnectionChange(navigator.connection.downlink);
  //     });
  //   }
  // }
  // handleConnectionChange(connectionSpeed: number) {
  //   const routerConfig = this.router.config.find(
  //     (route) => route.path === 'modulo-b'
  //   );
  //   if (routerConfig) {
  //     routerConfig.data = { preload: connectionSpeed >= 1.5 };
  //   }
  // }
}
