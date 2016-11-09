import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/* Services */
//Here

/* Third Party Packages */
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
    template: '',
})

export class ModalService
{
	constructor(
        private _router: Router,
        private _modal: NgbModal,
    ) {};

    /**
     * Define Variables
     */
    closeResult: string;

    public data = {};

    /*****/

    /**
     * Setup Modal Options
     */
    modalOptions: NgbModalOptions = {
        backdrop: true,
        keyboard: false,
        size: 'lg',
        // windowClass:'container',
    };

    /**
     * Open Modal
     */
    open(content: {}) {

        this.data = {};

        return this._modal.open(content, this.modalOptions)
        .result.then(
            (result) => {
                return this.data;
            }, (reason) => {
                return this.data;                    
            }
        );
    }
}
