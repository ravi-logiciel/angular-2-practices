import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpService } from './../../services/http.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  templateUrl: './home.html',
})

export class HomeComponent implements OnInit
{

	constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _httpSerivce: HttpService,
        private _flashMessagesService: FlashMessagesService

    ) {};

	/**
     * Initial
     */
    ngOnInit() {
    	console.log('Hello From Home Component');
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
}
