import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

    // Sätter värdet för inmatningsfältet till 0 från start
    meters: number = 0;
    feet: number = 0;
    celsius: number = 0;
    fahrenheit: number = 0;
  
    // Meter till fot
    metersToFeet(): number { // Använder "number" för att metoden ska returnera det konverterade värdet direkt
      return +(this.meters * 3.28084).toFixed(2); // Returnerar värdet avrundat till två decimaler
    }
  
    // Fot till meter
    feetToMeters(): number {
    return +(this.feet / 3.28084).toFixed(2);
    }
  
    // Celsius till Fahrenheit
    celsiusToFahrenheit(): number {
      return +((this.celsius * 9/5) + 32).toFixed(2);
    }
  
    // Fahrenheit till Celsius
    fahrenheitToCelsius(): number {
      return +((this.fahrenheit - 32) * 5/9).toFixed(2);
    }
  }