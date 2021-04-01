import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.css']
})
export class ModalOneComponent implements OnInit {

  backdrop = false;
  keyboard = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  saveForm(): void {
    alert('Formulário salvo com sucesso !');
  }
}
