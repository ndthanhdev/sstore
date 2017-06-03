import {Component, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
// import {Store} from "../store.model";

@Component({
  selector: 'frontend-admin-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: ''});
  public hasBaseDropZoneOver = false;

  // model: Store;

  constructor() {
  }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  dropImage($event) {
    if (this.uploader.queue.length > 1) {
      this.uploader.queue = this.uploader.queue.slice(1);
    }
  }
}
