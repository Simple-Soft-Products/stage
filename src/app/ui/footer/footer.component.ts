import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	year: Number = new Date().getFullYear()
	author: String = 'Luuk Brauckmann'
	linkedinLink: string = 'https://www.linkedin.com/in/luuk-brauckmann-4ba662171/'
	gitHubLink: string = 'https://github.com/luukbrauckmann'
}
