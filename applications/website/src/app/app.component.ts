import {Component, OnInit} from '@angular/core';
import {AppClientService} from "./app-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Training';
  results: Array<{
    qr_id: string
    qr_content: string
    qr_url: string
    access_date: any
    is_s3: boolean
  }> = [];
  public value: string = "";

  constructor(private appService: AppClientService) {
  }

  public getLogs() {
    this.appService.getLogs().then(results => {
      this.results = results;
    })
  }

  sendQR() {
    if (this.value) {
      this.appService.sendLog(this.value)
        .then(res => {
          this.getLogs();
        });
      this.value = "";
    }
  }

  ngOnInit(): void {
    this.getLogs()
  }
}
