import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() contentSelected = new EventEmitter<string>()

  onSelect(content: string) {
    this.contentSelected.emit(content)
  }

  constructor() { }

  ngOnInit() {
  }

}
