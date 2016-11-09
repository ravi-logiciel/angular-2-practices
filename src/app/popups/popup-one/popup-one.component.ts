import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/* Services */
import { HttpService } from './../../services/http.service';
import { ModalService } from './../../services/modal.service';

/* Third Party Packages */
import { FlashMessagesService } from 'angular2-flash-messages';
import { 
            NgbActiveModal,
            NgbDateStruct,
            NgbDatepickerI18n,
            NgbDateParserFormatter,
            NgbDatepickerConfig,
    } from './../../../../node_modules/@ng-bootstrap/ng-bootstrap';

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
        private _dateConfig: NgbDatepickerConfig,
        private _dateFormatter: NgbDateParserFormatter
    ) {
        let today = new Date();
        
        _dateConfig.outsideDays    = 'visible';
        _dateConfig.firstDayOfWeek = 7;
        _dateConfig.displayMonths  = 1;
        _dateConfig.showWeekdays   = true;
        _dateConfig.navigation     = 'select';

        _dateConfig.minDate = {
            year  : 1900,
            month : 1,
            day   : 1,
        };

        _dateConfig.maxDate = {
            year  : today.getFullYear(),
            month : today.getMonth() + 1,
            day   : today.getDate()
        };

        _dateConfig.startDate = {
            year  : 1990,
            month : 1
        };

        /* format date */
        /*let date: NgbDateStruct = {
            year: 1900,
            month: 1,
            day: 21,
        }

        let a = _dateFormatter.format(date);*/

    };

    /**
     * Define Variables
     */
    public data = {
        email : '',
        password : '',
        dob: '',
    }

    form : FormGroup;

    /**
     * Initial
     */
    ngOnInit() {
        this.validateForm();

        this.showMessage('Hello From Popup One Component', 'alert-success');
    }

    /**
     * Close Popup
     */
    closePopup() {
        this._modal.data = this.data;
        this._activeModal.close();
    }

    /**
     * Submit Data
     */
    submit() {
        this._modal.data = this.data;
        this._activeModal.close();
    }

    /*** Private Functions ***/
    
    /**
     * Validate Form
     */
    private validateForm() {
    
        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            dob: new FormControl({value: '', disabled: true}, Validators.required),
        });
    }

    /**
     * Show Flash Message
     */
    private showMessage(message: string, css: string) {
        this._flashMessagesService.show(message, {
            cssClass: css,
            timeout: 5000 
        });
    }

}
