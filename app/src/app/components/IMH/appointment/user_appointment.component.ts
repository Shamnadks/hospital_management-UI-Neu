// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { appoinment } from 'app/sd-services/appoinment'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-user_appointment',
  templateUrl: './user_appointment.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class user_appointmentComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_n9WL4pxeGuHW95fV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_n9WL4pxeGuHW95fV(bh) {
    try {
      bh = this.sd_9Fkdso8lcsHONrVX(bh);
      //appendnew_next_sd_n9WL4pxeGuHW95fV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n9WL4pxeGuHW95fV');
    }
  }

  doctorsFilter(department: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { department };
      bh.local = {};
      bh = this.sd_Pgd3oydCbbOEooZt(bh);
      //appendnew_next_doctorsFilter
      return bh.input.department;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UwA2oHMSgITUT90a');
    }
  }

  cashPayment(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GK1vjWSr2GO5EFim(bh);
      //appendnew_next_cashPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kKX1qu7KLgC5ZHou');
    }
  }

  onlinePayment(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_eJdqg6Bu3aoWqCHZ(bh);
      //appendnew_next_onlinePayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5ZCXqYwbe6UjlmuX');
    }
  }

  cancelBtn(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_cl0fyxxKL4qAFwGZ(bh);
      //appendnew_next_cancelBtn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KCHTV5X1dCdowb3n');
    }
  }
  //appendnew_flow_user_appointmentComponent_start

  sd_9Fkdso8lcsHONrVX(bh) {
    try {
      this.page.departments = undefined;
      this.page.doctors = undefined;
      this.page.selected = undefined;
      bh = this.sd_CmMZQk9N8FNtEY1U(bh);
      //appendnew_next_sd_9Fkdso8lcsHONrVX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Fkdso8lcsHONrVX');
    }
  }

  sd_CmMZQk9N8FNtEY1U(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validators = Validators;
      bh = this.sd_mhpHYStGRuRAvf78(bh);
      //appendnew_next_sd_CmMZQk9N8FNtEY1U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CmMZQk9N8FNtEY1U');
    }
  }

  sd_mhpHYStGRuRAvf78(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        name: new page.formControl('', [page.validators.required]),
        phone_no: new page.formControl('', [page.validators.required]),
        blood_group: new page.formControl('', [page.validators.required]),
        place: new page.formControl('', [page.validators.required]),
        cash: new page.formControl('', [page.validators.required]),
        doctor_id: new page.formControl('', [page.validators.required]),
        email: new page.formControl('', [page.validators.required]),
        pin_code: new page.formControl('', [page.validators.required]),
        dob: new page.formControl('', [page.validators.required]),
        address: new page.formControl('', [page.validators.required]),
      });

      bh = this.fetchingDepartments(bh);
      //appendnew_next_sd_mhpHYStGRuRAvf78
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mhpHYStGRuRAvf78');
    }
  }

  async fetchingDepartments(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.gettingDepartmentsList(
        undefined
      );
      bh.input.departments = outputVariables.input.departments;

      bh = this.sd_AQxLfYLyUZ9HUE2t(bh);
      //appendnew_next_fetchingDepartments
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VSWnvma9zKUIOWaC');
    }
  }

  sd_AQxLfYLyUZ9HUE2t(bh) {
    try {
      const page = this.page;
      page.departments = bh.input?.departments?.response;
      //appendnew_next_sd_AQxLfYLyUZ9HUE2t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AQxLfYLyUZ9HUE2t');
    }
  }

  sd_Pgd3oydCbbOEooZt(bh) {
    try {
      const page = this.page;
      console.log('kkkkkkkkkkkkkkk');
      console.log(bh.input.department);
      console.log('jjjjjjjjjjjjjjjjj');
      bh = this.sd_zFiKHPGlGuzX4Hr2(bh);
      //appendnew_next_sd_Pgd3oydCbbOEooZt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pgd3oydCbbOEooZt');
    }
  }

  async sd_zFiKHPGlGuzX4Hr2(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.gettingDoctorsList(
        bh.input.department
      );
      bh.input.doctors = outputVariables.input.doctors;

      bh = this.sd_5m4qJLh9lSr5lnAS(bh);
      //appendnew_next_sd_zFiKHPGlGuzX4Hr2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zFiKHPGlGuzX4Hr2');
    }
  }

  sd_5m4qJLh9lSr5lnAS(bh) {
    try {
      const page = this.page;
      page.doctors = bh.input?.doctors?.response?.data;
      page.selected = bh.input?.doctors?.response?.selcted;
      console.log('hhhhhhhhhhhhhhhhhhh');
      console.log(bh.input?.doctors?.response?.selcted);
      console.log('ppppppppppppppppp');
      page.form.value.doctor_id = bh.input?.doctors?.response?.selcted?.id;
      console.log(page.form.value.doctor_id);
      //appendnew_next_sd_5m4qJLh9lSr5lnAS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5m4qJLh9lSr5lnAS');
    }
  }

  sd_GK1vjWSr2GO5EFim(bh) {
    try {
      const page = this.page;
      console.log(page.form.value);
      bh = this.sd_twGTtYg1m2pOC15t(bh);
      //appendnew_next_sd_GK1vjWSr2GO5EFim
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GK1vjWSr2GO5EFim');
    }
  }

  async sd_twGTtYg1m2pOC15t(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.cashAppoinment(
        this.page.form.value
      );

      //appendnew_next_sd_twGTtYg1m2pOC15t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_twGTtYg1m2pOC15t');
    }
  }

  sd_eJdqg6Bu3aoWqCHZ(bh) {
    try {
      const page = this.page;
      console.log(page.form.value);
      bh = this.sd_0Ibh59IFuJ5J1owX(bh);
      //appendnew_next_sd_eJdqg6Bu3aoWqCHZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eJdqg6Bu3aoWqCHZ');
    }
  }

  async sd_0Ibh59IFuJ5J1owX(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.onlineAppoinment(
        this.page.form.value
      );
      bh.input.appoinment = outputVariables.input.appoinment;

      //appendnew_next_sd_0Ibh59IFuJ5J1owX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Ibh59IFuJ5J1owX');
    }
  }

  async sd_cl0fyxxKL4qAFwGZ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_cl0fyxxKL4qAFwGZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cl0fyxxKL4qAFwGZ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_user_appointmentComponent_Catch
}
