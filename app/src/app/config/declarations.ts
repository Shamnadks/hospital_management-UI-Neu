// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-edit_modalComponent
import { edit_modalComponent } from '../components/AIMS/department/edit_modal.component';
//CORE_REFERENCE_IMPORT-department_tableComponent
import { department_tableComponent } from '../components/AIMS/department/department_table.component';
//CORE_REFERENCE_IMPORT-add_formComponent
import { add_formComponent } from '../components/AIMS/department/add_form.component';
//CORE_REFERENCE_IMPORT-addDoctorComponent
import { addDoctorComponent } from '../sd-services/addDoctorComponent';
//CORE_REFERENCE_IMPORT-userappoinment_pageComponent
import { userappoinment_pageComponent } from '../components/AIMS/user appoinment/userappoinment_page.component';
//CORE_REFERENCE_IMPORT-patient_pageComponent
import { patient_pageComponent } from '../components/AIMS/patient list/patient_page.component';
//CORE_REFERENCE_IMPORT-doctor_pageComponent
import { doctor_pageComponent } from '../components/AIMS/doctor/doctor_page.component';
//CORE_REFERENCE_IMPORT-department_pageComponent
import { department_pageComponent } from '../components/AIMS/department/department_page.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/AIMS/home page/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-edit_modalComponent
  edit_modalComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-department_tableComponent
  department_tableComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_formComponent
  add_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userappoinment_pageComponent
  userappoinment_pageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-patient_pageComponent
  patient_pageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-doctor_pageComponent
  doctor_pageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-department_pageComponent
  department_pageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-addDoctorComponent
  addDoctorComponent,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: homeComponent },
  { path: 'doctor', component: doctor_pageComponent },
  { path: 'department', component: department_pageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
