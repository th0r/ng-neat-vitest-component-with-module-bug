import { Component } from '@angular/core';
import {ParentModule} from './parent-with-module/parent-module';
import {ParentStandalone} from './parent-standalone/parent-standalone';

@Component({
  selector: 'app-root',
  imports: [ParentModule, ParentStandalone],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
