import { Result } from './Result';
import { Medals } from './Medals.enum';

export class Country {
  // TO(DONE)DO: Country requires a name attribute and a results attribute.
  // name is a string, results is an array of Result
  name: string;
  results: Result[];

  // TO(DONE)DO: receives a name and initialises the results array to an empty array
  constructor(_name: string) {
    this.name = _name;
    this.results = [];
  }

  // return the total number of medals
  totalMedals(): number {
    //TO(DONE)DO: complete
    return this.results.length;
  }

  // given a medal type, return the amount of that type of medal
  totalMedalType(_medal: Medals): number {
    // TO(DONE)DO:
    let medalcount: number = 0;
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].medal == _medal) {
        medalcount++;
      }
    }
    return medalcount;
  }
}
