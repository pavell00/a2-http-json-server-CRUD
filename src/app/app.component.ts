import { Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import { Document} from './document'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  docs: Document[];
  error: any;

 constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.getAll();
  } 

  getAll(){
    this.httpService.getDocs().subscribe(
      v => {this.docs = v},
      err => {console.log(err)}
      )
  }

  addDoc(d:string){
    if(d !==''){
        let doc = new Document(d);
        this.httpService.saveDoc(doc).subscribe(
          v => {this.getAll();
                  return true;},
          err => {console.log('error')}
          )
    }
  }

  deleteDoc(d:Document){
    this.httpService.delDoc(String(d.id)).subscribe(
          v => {this.getAll();
                  return true;},
          err => {console.log('error')}
          )
  }

  updateDoc(d:Document, newName:string){
    if(newName !==''){
      d.docName = newName;
      this.httpService.updDoc(d).subscribe(
        v => {this.getAll();
                return true;},
        err => {console.log('error')}
        )
    }
  }
}