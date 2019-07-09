import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Upload } from '../../models/upload';
import { UploadService } from '../../core/services/upload-service/upload.service';
import { LoginService } from '../../core/services/login/login.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  upload: Upload;
  video: object;
  uploader: FileUploader;

  title = '';

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private element: ElementRef,
    private loginService: LoginService
  ) {
    this.uploadForm = formBuilder.group({
      'inputFile': [null, Validators.required],
      'title': [null, Validators.required]
    });
  }

  onSubmit(upload) {
    const files = this.element.nativeElement.querySelector('#inputFile').files;
    const title = this.element.nativeElement.querySelector('#videoTitle').value;
    console.log(title);
    const formData = new FormData;
    const file = files[0];
    const extension = file.name.split('.').pop();
    formData.append('inputFile', file, title + '.' + extension);
    this.uploadService.uploadVideo(formData, this.loginService.getCurrentUser()).subscribe();
  }

  ngOnInit() {}

}
