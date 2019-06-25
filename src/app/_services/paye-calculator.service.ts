import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayeCalculatorService {

  taxableIncome: number;
  basicSalary: number;
  benefits: number;
  pensionDeduction: number;
  postPensionDeductionIncome: number;
  taxDeduction: number;
  taxPayable: number;
  NHIF: number;
  carryHomePay: number;
  taxRate: number;
  paye: number;
  personalRelief = 1408;
  constructor() { }



  calculateNSSFDeductible(basicSalary, benefits): number {
    this.basicSalary = basicSalary;
    this.benefits = benefits;
    let employeeDeductionI: number;
    let employeeDeductionII: number;
    if (this.basicSalary <= 6000) {
        employeeDeductionI = 0.06 * this.basicSalary;
        employeeDeductionII = 0.06 * (this.basicSalary - 6000);
        this.pensionDeduction = employeeDeductionI + employeeDeductionII;
        return this.pensionDeduction;
    } else if (this.basicSalary > 6000 && this.basicSalary <= 18000) {
        employeeDeductionI = 0.06 * 6000;
        employeeDeductionII = 0.06 * (this.basicSalary - 6000);
        this.pensionDeduction = employeeDeductionI + employeeDeductionII;
        return this.pensionDeduction;
    } else {
      employeeDeductionI = 0.06 * 6000;
      employeeDeductionII = 0.06 * 12000;
      this.pensionDeduction = employeeDeductionI + employeeDeductionII;
      return this.pensionDeduction;
    }
  }

   calculatePostPensionDeductionIncome() {
       this.postPensionDeductionIncome = this.basicSalary - this.pensionDeduction;
       return this.postPensionDeductionIncome;
   }

   calculateTaxableIncome() {
       this.taxableIncome = this.postPensionDeductionIncome + this.benefits;
       return this.taxableIncome;
       }



   calculateTaxDeduction() {
        if (this.taxableIncome <=  12298) {
            this.taxRate = 0.10;
            this.taxDeduction = this.taxableIncome * this.taxRate;
            return this.taxDeduction;
        } else if (this.taxableIncome >= 12299 && this.taxableIncome <= 23885 ) {
            this.taxRate = 0.15;
            let x = 12298;
            let y = this.taxableIncome - 12299;
            this.taxDeduction = ((x * 0.10) + (y * this.taxRate));
            return this.taxDeduction;
        } else if (this.taxableIncome >= 23886 && this.taxableIncome <= 35472 ) {
            this.taxRate = 0.20;
            let x = 12998;
            let y = 23885 - 12299;
            let z  = this.taxableIncome - 23886;
            this.taxDeduction = ((x * 0.10) + (y * 0.15) + (z * 0.20));
            return this.taxDeduction;
        } else if (this.taxableIncome >= 35473 && this.taxableIncome <= 47059 ) {
            this.taxRate = 0.25;
            let w = 12298;
            let x = 23885 - 12299;
            let y = 35472 - 23886;
            let z = this.taxableIncome - 35473;
            this.taxDeduction = (w * 0.10) + (x * 0.15) + (y * 0.20) + (z * 0.25);
            return this.taxDeduction;
        } else {
            this.taxRate = 0.30;
            let v = 12298;
            let w = 23885 - 12299;
            let x = 35472 - 23885;
            let y = 47059 - 35473;
            let z = this.taxableIncome - 47059;
            this.taxDeduction = ((v * 0.10) + (w * 0.15) + (x * 0.20) + (y * 0.25) + (z * 0.30));
            return this.taxDeduction;
        }
   }

  calculateTaxPayable() {

      if (this.taxDeduction < this.personalRelief) {
          this.taxPayable = this.taxDeduction;
          return this.taxPayable;
      } else {
       this.taxPayable = this.taxDeduction - this.personalRelief;
       return this.taxPayable;
      }
   }

   calculateNHIF() {
       if (this.taxableIncome <= 5999) {
           this.NHIF = 150;
           return this.NHIF;
       } else if (this.taxableIncome >= 6000 && this.taxableIncome <= 7999) {
           this.NHIF = 300;
           return this.NHIF;
       } else if (this.taxableIncome >= 8000 && this.taxableIncome <= 11999) {
          this.NHIF = 400;
          return this.NHIF;
      } else if (this.taxableIncome >= 12000 && this.taxableIncome <= 14999) {
          this.NHIF = 500;
          return this.NHIF;
      } else if (this.taxableIncome >= 15000 && this.taxableIncome <= 19999) {
          this.NHIF = 600;
          return this.NHIF;
      } else if (this.taxableIncome >= 20000 && this.taxableIncome <= 24999) {
          this.NHIF = 750;
          return this.NHIF;
      } else if (this.taxableIncome >= 25000 && this.taxableIncome <= 29999) {
          this.NHIF = 850;
          return this.NHIF;
      } else if (this.taxableIncome >= 30000 && this.taxableIncome <= 34999) {
          this.NHIF = 900;
          return this.NHIF;
      } else if (this.taxableIncome >= 35000 && this.taxableIncome <= 39999) {
          this.NHIF = 950;
          return this.NHIF;
      } else if (this.taxableIncome >= 40000 && this.taxableIncome <= 44999) {
          this.NHIF = 1000;
          return this.NHIF;
      } else if (this.taxableIncome >= 45000 && this.taxableIncome <= 49999) {
          this.NHIF = 1100;
          return this.NHIF;
      } else if (this.taxableIncome >= 50000 && this.taxableIncome <= 59999) {
          this.NHIF = 1200;
          return this.NHIF;
      } else if (this.taxableIncome >= 60000 && this.taxableIncome <= 69999) {
          this.NHIF = 1300;
          return this.NHIF;
      } else if (this.taxableIncome >= 70000 && this.taxableIncome <= 79999) {
          this.NHIF = 1400;
          return this.NHIF;
      } else if (this.taxableIncome >= 80000 && this.taxableIncome <= 89999) {
          this.NHIF = 1500;
          return this.NHIF;
      } else if (this.taxableIncome >= 90000 && this.taxableIncome <= 99999) {
          this.NHIF = 1600;
          return this.NHIF;
      } else {
          this.NHIF = 1700;
          return this.NHIF;
      }
   }

   calculateCarryHomePay() {
       this.carryHomePay = this.taxableIncome - (this.NHIF + this.taxPayable);
       return this.carryHomePay;

   }
  }
