import { WorldState } from './worldstate';
import { Changes } from './changes';

// Angular Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule,  HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Routing
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

// Layouts
import {
  RootLayout
} from './@pages/layouts';

// Layout Service - Required
import { pagesToggleService } from './@pages/services/toggler.service';

// Shared Layout Components
import { SidebarComponent } from './@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from './@pages/components/quickview/quickview.component';
import { QuickviewService } from './@pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from './@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from './@pages/components/header/header.component';
import { HorizontalMenuComponent } from './@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './@pages/components/shared.module';
import { pgListViewModule} from './@pages/components/list-view/list-view.module';
import { pgCardModule} from './@pages/components/card/card.module';
import { pgCardSocialModule} from './@pages/components/card-social/card-social.module';

// Basic Bootstrap Modules
import {BsDropdownModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CollapseModule,
        ModalModule,
        ProgressbarModule,
        TabsModule,
        TooltipModule,
        TypeaheadModule,
} from 'ngx-bootstrap';

// Pages Globaly required Components - Optional
import { pgTabsModule } from './@pages/components/tabs/tabs.module';
import { pgSwitchModule } from './@pages/components/switch/switch.module';
import { ProgressModule } from './@pages/components/progress/progress.module';

// Thirdparty Components / Plugins - Optional
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CorporateLayoutComponent } from './@pages/layouts/corporate/corporate.component';
import { BlankCorporateComponent } from './@pages/layouts/blank-corporate/blank-corporate.component';
import { EnergyComponent } from './policies/energy/energy.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Hammer Config Overide
// https://github.com/angular/angular/issues/10541
export class AppHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'pinch': { enable: false },
      'rotate': { enable: false }
  };
}

// App pages
import { CorporateDashboardComponent } from './dashboard/dashboard.component';
import { LaborComponent } from './policies/labor/labor.component';
import { TaxesComponent } from './policies/taxes/taxes.component';
import { ImplementSliderComponent } from './ui-comp/implement-slider/implement-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CorporateLayoutComponent,
    SidebarComponent,
    QuickviewComponent,
    SearchOverlayComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    RootLayout,
    BlankCorporateComponent,
    CorporateDashboardComponent,
    LaborComponent,
    TaxesComponent,
    EnergyComponent,
    ImplementSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    pgTabsModule,
    PerfectScrollbarModule,
    pgSwitchModule,
    QuillModule
  ],
  providers: [QuickviewService, pagesToggleService,
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: AppHammerConfig
  },
  Changes,
  WorldState],
  bootstrap: [AppComponent],
})
export class AppModule { }
