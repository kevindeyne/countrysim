import { WorldState } from '../../worldstate';
import { Changes } from '../../changes';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-implement-slider',
  templateUrl: './implement-slider.component.html',
  styleUrls: ['./implement-slider.component.scss']
})
export class ImplementSliderComponent implements OnInit {

  @Input() public title = '';
  @Input() public id;
  @Input() public value = 0;
  @Input() public implemented = false;
  public originalValue = 10;

  private expectedChange = 0;

  constructor() { }

  ngOnInit() {
    if (this.implemented) {
      this.calculateExpectedChange();
    }
  }

  onChange(event) {
    this.value = event.target.value;
    const change = this.value - this.originalValue;

    this.calculateExpectedChange();

    Changes.getInstance().addAction(this.id, this);
  }

  onImplement(event) {
    this.implemented = true;
    this.value = 10;
    this.originalValue = 0;

    this.calculateExpectedChange();

    Changes.getInstance().addAction(this.id, this);
  }

  onCancel(event) {
    this.implemented = false;
    this.value = 0;

    Changes.getInstance().addAction(this.id, 'removed');
  }

  onEndTurn() {
    this.originalValue = this.value;
  }

  calculateExpectedChange() {
    this.expectedChange = Changes.visualizeMoneyWPrefix(this.getIncome(), '+');
  }

  getIncome(): int {
    const change = this.value - this.originalValue;
    return WorldState.getInstance().myCountry.getTotalIncome() / 100 * change;
  }

  getCost(): int {
    return 5000000;
  }
}
