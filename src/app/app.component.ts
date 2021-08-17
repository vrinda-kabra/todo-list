import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  list:any[] = [];

  add = document.getElementById("add");
  
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
    this.clearField()
  }

  deleteTask(id:number){
    // console.log(id);
    this.list = this.list.filter(item=>item.id!==id);
  }
  editTask(id:number){
  }
  clearField(){
    var field = document.getElementById("input");
    field!.innerHTML = '';
  }
}
