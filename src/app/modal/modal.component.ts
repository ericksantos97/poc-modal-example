import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'gns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @Input() id: string;
  private element: HTMLElement;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  public ngOnInit(): void {
    this.initModal();
  }

  private initModal(): void {
    if (!this.id) {
      console.error('Erro ! modal deve conter um id.');
      return;
    }

    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  public open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('gns-modal-open');
  }

  public close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('gns-modal-open');
  }

  public ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

}
