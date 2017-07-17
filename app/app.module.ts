import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './core/module-import-guard';

import { NgModule, NO_ERRORS_SCHEMA, Optional, SkipSelf  } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { setStatusBarColors, BackendService, LoginService } from "./shared";

import { LoginModule } from "./login/login.module";
import { GroceriesModule } from "./groceries/groceries.module";



setStatusBarColors();

@NgModule({
  providers: [
    BackendService,
    LoginService,
    authProviders,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    LoginModule,
    GroceriesModule,
    CommonModule
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
    constructor(@Optional() @SkipSelf() parentModule: AppModule) {
        throwIfAlreadyLoaded(parentModule, 'AppModule');
    }
}
