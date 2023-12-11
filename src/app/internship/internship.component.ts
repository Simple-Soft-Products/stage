import { Component } from "@angular/core"
import { interval } from "rxjs"

@Component({
  selector: "app-internship",
  templateUrl: "./internship.component.html",
  styleUrls: ["./internship.component.scss"],
})
export class InternshipComponent {
  // Default object. Deze wordt gebruikt om de countdown te laten zien.
  remainingTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  // De einddatum van de stage. Deze wordt gebruikt om het verschil te gaan berekenen.
  private endTime = new Date("12-31-2023 09:00")

  // De interval die elke seconde de countdown functie gaat aanroepen.
  private $interval = interval(1000).subscribe(() => this.getRemainingTime())

  // De constructor wordt gebruikt om de countdown te starten.
  ngOnInit() {
    this.getRemainingTime()
  }

  // De ngOnDestroy wordt gebruikt om de interval te stoppen.
  ngOnDestroy() {
    this.$interval.unsubscribe()
  }

  // Deze functie wordt elke seconde aangeroepen en berekent het verschil tussen de einddatum en de huidige datum.
  getRemainingTime = () => {
    // Maak hier de countdown functie
    // Tip: gebruik de endTime variabele
  }
}
