import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* Services */
import { HttpService } from './../../services/http.service';

/* Third Party Packages */
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from './../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
	templateUrl: './form.html',
})

export class FormComponent implements OnInit
{

	constructor(
		private _router: Router,
		private _formBuilder: FormBuilder,
		private _httpSerivce: HttpService,
		private _flashMessagesService: FlashMessagesService,
        private _activeModal: NgbActiveModal,
	) {};

	/**
     * Initial
     */
    ngOnInit() {
    	console.log('Hello From Form Component');
        this.showMessage('Hello From Form Component', 'alert-success');
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

    close() {
        
    }
}
