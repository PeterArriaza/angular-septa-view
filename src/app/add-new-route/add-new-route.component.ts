import { Component, OnInit } from "@angular/core";

import { stopData } from "../stops";

@Component({
  selector: "app-add-new-route",
  templateUrl: "./add-new-route.component.html",
  styleUrls: ["./add-new-route.component.css", "../app.component.css"]
})
export class AddNewRouteComponent implements OnInit {
  constructor() {}
  stopData = stopData;
  ngOnInit(): void {}
}
