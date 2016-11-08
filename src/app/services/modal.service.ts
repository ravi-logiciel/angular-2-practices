import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/* Services */
//Here

/* Third Party Packages */
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
    template: '<h1>Hello</h1>',
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

    /**
     * Open Modal
     */
    open(content: {}) {
    	console.log('Hello From Modal Service', this._modal);
        this._modal.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            console.log(this.closeResult);
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            console.log(this.closeResult);
        });
    }

    /** Privare Functions **/
    
    /**
     * Get Modal Closed Reason
     */
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
