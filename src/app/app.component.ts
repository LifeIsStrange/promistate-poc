import { Component } from "@angular/core";
import promistate from 'promistate'

const api = 'https://jsonplaceholder.typicode.com/todos'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todosPromise = promistate(() => fetch(api).then(res => res.json()))
}
