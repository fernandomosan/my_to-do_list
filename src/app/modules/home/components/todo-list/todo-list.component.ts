import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor(){}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllItensList(){
    const confirm = window.confirm("Você deseja deletar tudo ?");
    
    if(confirm){
      this.taskList = [];
    }
  }

  public validationItemList(message: string, index: number){

    if(!message.length){
      const confirm = window.confirm("Esta Task esta vazia, deseja deletar ?");
      if(confirm){
        this.taskList.splice(index, 1);
      }
    }
  }

  public setLocalStorage(){

    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
