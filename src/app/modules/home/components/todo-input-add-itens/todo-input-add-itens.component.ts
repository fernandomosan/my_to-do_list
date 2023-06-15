import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emiteItemTaskList = new EventEmitter();

  public messageItem: string = "";

  public submitItemTaskList(){

    this.messageItem = this.messageItem.trim();

    if(this.messageItem){
      this.emiteItemTaskList.emit(this.messageItem);
      this.messageItem = "";
    }
  }
}
