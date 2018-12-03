import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yamini-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public emp: any[] ;
  tableKeys: string[];
  @Input() headers: any[];
  @Input() set data(data: any[]) {

    this.emp = data;
    if (data) {
      this.emp.forEach(element => {
        
        this.tableKeys = Object.keys(element);
        console.log(this.tableKeys);
      });
      
    }
  }
  @Output() editClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
  
  get data() {
    return this.emp;
  }

  // @Input() data:any[];

  constructor() {}

  ngOnInit() {}

  onEdit(id){
    this.editClicked.emit(id);
  }

  onDelete(id){
    this.deleteClicked.emit(id);
  }

}
