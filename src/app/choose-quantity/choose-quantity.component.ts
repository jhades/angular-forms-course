import {Component, Input} from "@angular/core";

@Component({
  selector: 'choose-quantity',
  templateUrl: "choose-quantity.component.html",
  styleUrls: ["choose-quantity.component.scss"]
})
export class ChooseQuantityComponent {


  @Input()
  quantity: number;

  @Input()
  increment: number;

  onAdd() {
    this.quantity+= this.increment;
  }

  onRemove() {
    this.quantity-= this.increment;
  }
}
