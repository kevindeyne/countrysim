import { Injectable } from '@angular/core';

@Injectable()
export class Country {

  public name: string;

  public gdp = 0;
  public income = 0;
  public expenditure = 0;
  public surplus = 0;

  public population = new Object();
  public policies = new Object();

  endTurn () {
    this.resetIncome();

    for (const policyKey in this.policies) {
      if (this.policies.hasOwnProperty(policyKey)) {
        const policy = this.policies[policyKey];
        this.expenditure += policy.getCost();
        this.income += policy.getIncome();
      }
    }
    this.surplus += this.income - this.expenditure;

    console.log('End turn for ' + this.name);
  }

  private resetIncome() {
    // TODO add to history
    this.income = 0;
    this.expenditure = 0;
  }

  getPopulationCount(): int {
    return this.population['POOR'].populationCount +
    this.population['WORKING_CLASS'].populationCount +
    this.population['MIDDLE_CLASS'].populationCount +
    this.population['UPPER_CLASS'].populationCount;
  }

  // for 4 months (=1 turn)
  getTotalIncome() {
    return (this.population['POOR'].populationCount * this.population['POOR'].averageIncome) +
    (this.population['WORKING_CLASS'].populationCount * this.population['WORKING_CLASS'].averageIncome) +
    (this.population['MIDDLE_CLASS'].populationCount * this.population['MIDDLE_CLASS'].averageIncome) +
    (this.population['UPPER_CLASS'].populationCount * this.population['UPPER_CLASS'].averageIncome);
  }

}
