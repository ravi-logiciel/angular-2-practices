import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* Services */
import { HttpService } from './../../services/http.service';
import { ModalService } from './../../services/modal.service';

/* Components */
import { PopupOneComponent } from './../../popups/popup-one/popup-one.component';

/* Third Party Packages */
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from './../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './home.html',
})

export class HomeComponent implements OnInit
{
    public data = {};

	constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _httpSerivce: HttpService,
        private _flashMessagesService: FlashMessagesService,
        private _modal: ModalService,

    ) {};

	/**
     * Initial
     */
    ngOnInit() {
    	this.showMessage('Hello From Home Component', 'alert-success');
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
     * Open Popup One
     */
    openPopupOne() {
        
        this._modal.open(PopupOneComponent)
        .then(
            (res) => {
                this.data = res;
                console.log('res', res);
                
            }, (err) => {
               console.log('err', err);
            }
        );

    }

    /**
     * Open Popup
     */
    openPopup() {
        console.log('this', this);
        this._modal.open('Title');
    }
}
