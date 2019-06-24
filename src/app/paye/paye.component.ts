import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { PayeCalculatorService } from '../_services/paye-calculator.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-paye',
  templateUrl: './paye.component.html',
  styleUrls: ['./paye.component.css']
})
export class PayeComponent implements OnInit {

  model: any = {};
  name: string;
  basicSalary = 0;
  benefits = 0;
  employeeDeductionI: number;
  employeeDeductionII: number;
  pensionDeduction: number;
  postPensionDeductionIncome: number;
  taxableIncome: number;
  taxDeduction: number;
  taxPayable: number;
  NHIF: number;
  carryHomePay: number;
  personalRelief: number;

  constructor(public activatedRoute: ActivatedRoute, public payeService: PayeCalculatorService) { }

  ngOnInit() {  }

  getPaye() {
  }

  onSubmit() {
    this.name = this.model.name;
    this.basicSalary = this.model.basic_salary;
    this.benefits = this.model.basic_salary;
    this.pensionDeduction = this.payeService.calculateNSSFDeductible(this.basicSalary, this.benefits);
    this.postPensionDeductionIncome = this.payeService.calculatePostPensionDeductionIncome();
    this.personalRelief = this.payeService.personalRelief;
    this.taxableIncome = this.payeService.calculateTaxableIncome();
    this.taxDeduction = this.payeService.calculateTaxDeduction();
    this.taxPayable = this.payeService.calculateTaxPayable();
    this.NHIF = this.payeService.calculateNHIF();
    this.carryHomePay = this.payeService.calculateCarryHomePay();  }
}
