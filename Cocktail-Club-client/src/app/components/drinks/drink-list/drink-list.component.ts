import { Component, Input } from '@angular/core'
import { DrinkModel } from '../models/DrinkModel'
import { animations } from './drink-list.animations'


@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
  animations: animations
})
export class DrinkListComponent {
  public pageSize: number = 5
  public currentPage: number = 1
  public maxSize="500"
  public directionLinks="true"

  @Input() public drinks: DrinkModel[]

  changePage (page) {
    this.currentPage = page
  }

  trackByIds(index: number, drink: DrinkModel): string {
    return drink._id
  }

}
