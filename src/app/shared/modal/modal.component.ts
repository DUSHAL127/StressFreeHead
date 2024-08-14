import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<void>(); // Renamed to avoid conflict

  closeModal() {
    this.close.emit();
  }

  confirm() {
    this.confirmAction.emit(); // Use the renamed EventEmitter here
    this.closeModal();
  }
}
