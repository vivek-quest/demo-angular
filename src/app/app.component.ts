import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import  ReactDOM from "react-dom/client"
import  React from "react"
// import  * as React from "react"
import FeedbackWorkflowComponent from './React-SDK/FeedbackWorkflow';
import "@questlabs/react-sdk/dist/style.css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular-App';

  @ViewChild("reactComponentPlaceholder") reactComponentPlaceholder!: ElementRef;

  ngAfterViewInit(): void {
    ReactDOM.createRoot(this.reactComponentPlaceholder.nativeElement).render(React.createElement(FeedbackWorkflowComponent));
  }
}
