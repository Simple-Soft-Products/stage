import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent {
	remainingTime = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

	private endTime = new Date('02-06-2023 09:00')

	private $interval = interval(1000).subscribe(() => this.getRemainingTime())

	ngOnInit() {
		this.getRemainingTime()
	}

	ngOnDestroy() {
		this.$interval.unsubscribe()
	}

	getRemainingTime = () => {
		// Maak hier de countdown functie
	}

}
