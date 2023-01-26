import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	year: Number = new Date().getFullYear()
	author: String = 'Luuk Brauckmann'
	gitHubLink: string = 'https://github.com/luukbrauckmann'

	goToGithub = () => window.open(this.gitHubLink,'_blank')
}
