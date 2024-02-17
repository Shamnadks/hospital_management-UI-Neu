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
//CORE_REFERENCE_IMPORT-doctor_listComponent
import { doctor_listComponent } from '../components/IMH/doctor/doctor_list.component';
//CORE_REFERENCE_IMPORT-recieptComponent
import { recieptComponent } from '../components/IMH/reciept/reciept.component';
//CORE_REFERENCE_IMPORT-patient
import { patient } from '../sd-services/patient';
//CORE_REFERENCE_IMPORT-patientslistComponent
import { patientslistComponent } from '../components/IMH/patients/patientslist.component';
//CORE_REFERENCE_IMPORT-detailsComponent
import { detailsComponent } from '../components/IMH/patients/details.component';
//CORE_REFERENCE_IMPORT-patientsComponent
import { patientsComponent } from '../components/IMH/patients/patients.component';
//CORE_REFERENCE_IMPORT-user_appointmentComponent
import { user_appointmentComponent } from '../components/IMH/appointment/user_appointment.component';
//CORE_REFERENCE_IMPORT-mainComponent
import { mainComponent } from '../components/IMH/main/main.component';
//CORE_REFERENCE_IMPORT-doctorComponent
import { doctorComponent } from '../components/IMH/doctor/doctor.component';
//CORE_REFERENCE_IMPORT-editing_modalComponent
import { editing_modalComponent } from '../components/IMH/department/editing_modal.component';
//CORE_REFERENCE_IMPORT-department_tablesComponent
import { department_tablesComponent } from '../components/IMH/department/department_tables.component';
//CORE_REFERENCE_IMPORT-department_mainComponent
import { department_mainComponent } from '../components/IMH/department/department_main.component';
//CORE_REFERENCE_IMPORT-addformvalueComponent
import { addformvalueComponent } from '../components/IMH/department/addformvalue.component';
//CORE_REFERENCE_IMPORT-appoinment
import { appoinment } from '../sd-services/appoinment';
//CORE_REFERENCE_IMPORT-addDoctorComponent
import { addDoctorComponent } from '../sd-services/addDoctorComponent';

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
<<<<<<< HEAD
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-doctor_listComponent
  doctor_listComponent,
=======
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-recieptComponent
  recieptComponent,
>>>>>>> d7d6c6c69f5ddd8d44824c7e657596f2828ba087
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-patientslistComponent
  patientslistComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-detailsComponent
  detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-patientsComponent
  patientsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-user_appointmentComponent
  user_appointmentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mainComponent
  mainComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-doctorComponent
  doctorComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editing_modalComponent
  editing_modalComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-department_tablesComponent
  department_tablesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-department_mainComponent
  department_mainComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addformvalueComponent
  addformvalueComponent,
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
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-patient
  patient,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-appoinment
  appoinment,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-addDoctorComponent
  addDoctorComponent,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: mainComponent },
  { path: 'doctor', component: doctorComponent },
  { path: 'department', component: department_mainComponent },
  { path: 'appoinment', component: user_appointmentComponent },
  { path: 'patients', component: patientslistComponent },
  { path: 'receipt', component: recieptComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
