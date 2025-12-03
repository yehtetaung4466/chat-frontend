import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster, ToastOptions } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSonnerToaster],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected title = 'angular-tailwind';

  readonly toastOptions:ToastOptions = {
    duration: 3000,
  }
}
