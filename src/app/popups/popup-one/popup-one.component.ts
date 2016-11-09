import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* Services */
import { HttpService } from './../../services/http.service';
import { ModalService } from './../../services/modal.service';

/* Third Party Packages */
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbActiveModal } from './../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'popup-one',
	templateUrl: './popup-one.html',
})

export class PopupOneComponent implements OnInit
{

	constructor(
		private _router: Router,
		private _formBuilder: FormBuilder,
		private _httpSerivce: HttpService,
		private _flashMessagesService: FlashMessagesService,
        private _activeModal: NgbActiveModal,
        private _modal: ModalService,
	) {};

    /**
     * Define Variables
     */
    public data = {
        name : 'Ravi Heer',
    }

	/**
     * Initial
     */
    ngOnInit() {
        this.showMessage('Hello From Popup One Component', 'alert-success');
    }

    /**
     * Show Flash Message
     */
    showMessage(message: string, css: string) {
        this._flashMessagesService.show(message, {
            cssClass: css,
            timeout: 5000 
        });
    }

    /**
     * Close Popup
     */
    closePopup() {
        this._modal.data = this.data;
        this._activeModal.close();
    }
}
