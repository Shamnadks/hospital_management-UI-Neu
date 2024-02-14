// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_FBez52itXu3EZ8pU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FBez52itXu3EZ8pU(bh) {
    try {
      bh = this.sd_EDRpBlZuwXpBtXm0(bh);
      //appendnew_next_sd_FBez52itXu3EZ8pU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FBez52itXu3EZ8pU');
    }
  }

  appointmentNavigation(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.navigateHelper(bh);
      //appendnew_next_appointmentNavigation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oN3Fz7NSqgxkeHhz');
    }
  }

  departmentNavigation(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.navigationHelper(bh);
      //appendnew_next_departmentNavigation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ofhiUIZxpQ7cN1CI');
    }
  }

  doctorNavigation(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.doctorNavigate(bh);
      //appendnew_next_doctorNavigation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p2sBCRymYnVK4aBG');
    }
  }

  patientListNavigation(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.patientNavigate(bh);
      //appendnew_next_patientListNavigation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yh0iStDpF9wfazJM');
    }
  }

  logIn(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.logInFunction(bh);
      //appendnew_next_logIn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bI27x61IkJAFzAy3');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_EDRpBlZuwXpBtXm0(bh) {
    try {
      this.page.logInOut = this.page.false;
      //appendnew_next_sd_EDRpBlZuwXpBtXm0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EDRpBlZuwXpBtXm0');
    }
  }

  async navigateHelper(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/appoinment');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_navigateHelper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WvfjWegNT3P9oHbN');
    }
  }

  async navigationHelper(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/department');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_navigationHelper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LroTqArLxnO4FdOc');
    }
  }

  async doctorNavigate(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/doctor');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_doctorNavigate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XjHkhhaqzjQLZUYw');
    }
  }

  async patientNavigate(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/patients');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_patientNavigate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vfkudQe8UzmmEJtc');
    }
  }

  logInFunction(bh) {
    try {
      const page = this.page;
      page.system.oauthService.login('http://localhost:4200/home');
      //appendnew_next_logInFunction
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PO35xLWZPf261Bwy');
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
  //appendnew_flow_homeComponent_Catch
}
