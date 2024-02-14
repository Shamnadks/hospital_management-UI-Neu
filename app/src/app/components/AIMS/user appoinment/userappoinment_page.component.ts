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
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { appoinment } from 'app/sd-services/appoinment'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-userappoinment_page',
  templateUrl: './userappoinment_page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class userappoinment_pageComponent {
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
      this.sd_X9DM8W3CYC4SZ3KS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_X9DM8W3CYC4SZ3KS(bh) {
    try {
      bh = this.sd_v0sadkbRIvbzyQkR(bh);
      //appendnew_next_sd_X9DM8W3CYC4SZ3KS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X9DM8W3CYC4SZ3KS');
    }
  }

  doctorsFilter(selecteddepartment: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selecteddepartment };
      bh.local = {};
      bh = this.sd_XvmBlikO3COuaHGT(bh);
      //appendnew_next_doctorsFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dEMOzuH96QKUKIII');
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
      bh = this.sd_DiRe4WUsee9wg5bs(bh);
      //appendnew_next_cashPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tCe9bQXNy8SnMbxy');
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
      bh = this.sd_RxEYd1bFoxbJgn69(bh);
      //appendnew_next_onlinePayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1c4n4bRHi3DFTq9v');
    }
  }
  //appendnew_flow_userappoinment_pageComponent_start

  sd_v0sadkbRIvbzyQkR(bh) {
    try {
      this.page.departments = undefined;
      this.page.doctors = undefined;
      bh = this.sd_xEFyZYGZx0yk03xK(bh);
      //appendnew_next_sd_v0sadkbRIvbzyQkR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v0sadkbRIvbzyQkR');
    }
  }

  sd_xEFyZYGZx0yk03xK(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;
      bh = this.formConfigure(bh);
      //appendnew_next_sd_xEFyZYGZx0yk03xK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xEFyZYGZx0yk03xK');
    }
  }

  formConfigure(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        name: new page.formControl('', page.validator.required),
        phone_no: new page.formControl('', page.validator.required),
        dob: new page.formControl('', page.validator.required),
        place: new page.formControl('', page.validator.required),
        address: new page.formControl('', page.validator.required),
        pin_code: new page.formControl('', page.validator.required),
        email: new page.formControl('', page.validator.required),
        blood_group: new page.formControl('', page.validator.required),
        doctor_id: new page.formControl('', page.validator.required),
        cash: new page.formControl('', page.validator.required),
      });
      bh = this.sd_xxIomz2SQouKvEap(bh);
      //appendnew_next_formConfigure
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yQd31V8HNj8iPE4m');
    }
  }

  async sd_xxIomz2SQouKvEap(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.gettingDepartmentsList(
        undefined
      );
      bh.input.departments = outputVariables.input.departments;

      bh = this.sd_La4l51InVqKtwNQd(bh);
      //appendnew_next_sd_xxIomz2SQouKvEap
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xxIomz2SQouKvEap');
    }
  }

  sd_La4l51InVqKtwNQd(bh) {
    try {
      const page = this.page;
      page.departments = bh.input.departments.response;
      //appendnew_next_sd_La4l51InVqKtwNQd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_La4l51InVqKtwNQd');
    }
  }

  sd_XvmBlikO3COuaHGT(bh) {
    try {
      const page = this.page;
      console.log(bh.input.selecteddepartment.value);
      bh = this.sd_HTKaXzVYBinPWz7J(bh);
      //appendnew_next_sd_XvmBlikO3COuaHGT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XvmBlikO3COuaHGT');
    }
  }

  async sd_HTKaXzVYBinPWz7J(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.gettingDoctorsList(
        bh.input.selecteddepartment.value
      );
      bh.input.doctors = outputVariables.input.doctors;

      bh = this.sd_B6UADYFsCQDt7RTV(bh);
      //appendnew_next_sd_HTKaXzVYBinPWz7J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HTKaXzVYBinPWz7J');
    }
  }

  sd_B6UADYFsCQDt7RTV(bh) {
    try {
      const page = this.page;
      page.doctors = bh.input.doctors.response;
      //appendnew_next_sd_B6UADYFsCQDt7RTV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B6UADYFsCQDt7RTV');
    }
  }

  async sd_DiRe4WUsee9wg5bs(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.cashAppoinment(
        this.page.form.value
      );

      //appendnew_next_sd_DiRe4WUsee9wg5bs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DiRe4WUsee9wg5bs');
    }
  }

  async sd_RxEYd1bFoxbJgn69(bh) {
    try {
      const appoinmentInstance: appoinment =
        this.__page_injector__.get(appoinment);

      let outputVariables = await appoinmentInstance.onlineAppoinment(
        this.page.form.value
      );
      bh.input.appoinment = outputVariables.input.appoinment;

      //appendnew_next_sd_RxEYd1bFoxbJgn69
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RxEYd1bFoxbJgn69');
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
  //appendnew_flow_userappoinment_pageComponent_Catch
}
