import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpService } from './../../services/http.service';

@Component({
  templateUrl: './home.html',
})

export class HomeComponent implements OnInit
{

	constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _httpSerivce: HttpService,

    ) {};

	/**
     * Initial
     */
    ngOnInit() {
    	console.log('Hello From Home Component');
    }
}
