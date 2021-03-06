import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChargesDTO } from '../dtos/chargesDTO';
import { Chargeservice } from '../services/chargeservice';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  constructor(private chargeservice: Chargeservice) { }

  // tslint:disable-next-line: new-parens
  charges: ChargesDTO = new ChargesDTO;
  chargeList: Array<ChargesDTO> = [];

  chs: Array<ChargesDTO> = [];
  chss: Observable<ChargesDTO[]>;

  formCharge = new FormGroup({
    cid: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.reloadData();
  }

  saveCharge(): void {
    this.charges.cValue = this.formCharge.get('value').value;
    this.charges.cDesc = this.formCharge.get('desc').value;

    this.chargeservice.saveCharge(this.charges).subscribe(

      (result) => {
        if (result || !Validators === null) {
          console.log(this.charges);
          alert('New payment value has been saved successfully..');
          this.formCharge.get('value').setValue('');
          this.formCharge.get('desc').setValue('');
          this.formCharge.get('check').setValue('');
        } else {
          alert('Failed to save the payment value..');
        }
      }
    );

  }

  reloadData() {
    this.chss = this.chargeservice.getAllCharges();
  }

}
