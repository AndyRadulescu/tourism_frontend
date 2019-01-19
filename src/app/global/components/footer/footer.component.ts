import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    facebookImgSrc = 'https://andyradulescu.github.io/personal-website/assets/facebook-logo-white.svg';
    linkedinImgSrc = 'https://andyradulescu.github.io/personal-website/assets/linkedin-logo-white.svg';
    instagramImgSrc = 'https://andyradulescu.github.io/personal-website/assets/instagram-logo-white.svg';
    githubImgSrc = 'https://andyradulescu.github.io/personal-website/assets/github-logo-white.png';

    constructor() {
    }

    ngOnInit() {
    }

    onMouseOver(socialApp) {
        switch (socialApp) {
            case 'facebook':
                this.facebookImgSrc = 'https://andyradulescu.github.io/personal-website/assets/facebook-logo.svg';
                break;
            case 'linkedin':
                this.linkedinImgSrc = 'https://andyradulescu.github.io/personal-website/assets/linkedin-logo.svg';
                break;
            case 'instagram':
                this.instagramImgSrc = 'https://andyradulescu.github.io/personal-website/assets/instagram-logo.svg';
                break;
            case 'github':
                this.githubImgSrc = 'https://andyradulescu.github.io/personal-website/assets/github-logo.png';
                break;
        }
    }

    onMouseOut(socialApp) {
        switch (socialApp) {
            case 'facebook':
                this.facebookImgSrc = 'https://andyradulescu.github.io/personal-website/assets/facebook-logo-white.svg';
                break;
            case 'linkedin':
                this.linkedinImgSrc = 'https://andyradulescu.github.io/personal-website/assets/linkedin-logo-white.svg';
                break;
            case 'instagram':
                this.instagramImgSrc = 'https://andyradulescu.github.io/personal-website/assets/instagram-logo-white.svg';
                break;
            case 'github':
                this.githubImgSrc = 'https://andyradulescu.github.io/personal-website/assets/github-logo-white.png';
                break;
        }
    }
}
