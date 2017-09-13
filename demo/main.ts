import "./polyfills.ts";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./demo-app";

import "!style-loader!raw-loader!sass-loader!./../node_modules/@peretz/matter/scss/matter.scss";

if (window.location.hostname === "pages.github.ibm.com") {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
