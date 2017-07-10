import {
	Component,
	Output,
	EventEmitter,
	TemplateRef
} from "@angular/core";

@Component({
	selector: "n-banner-custom",
	template: `
	<div class="banner banner-{{bannerObj.type}}">
		<button class="close-btn" (click)="onClose()" aria-label="Close">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
			<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
			</svg>
		</button>
		<p>{{bannerObj.message}}
		- This is a custom banner component you can pass in.
		<a href="http://www.ibm.com/ca-en/" target="_blank">click me to visit IBM</a></p>
	</div>
		`
})
export class BannerCustom {
	bannerObj: Object = {};

	@Output() close: EventEmitter<any> = new EventEmitter();

	onClose() {
		this.close.emit();
	}
}