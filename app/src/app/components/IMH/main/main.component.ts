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
  selector: 'bh-main',
  templateUrl: './main.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class mainComponent {
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
      this.sd_tYiVqtKTH67a2tiU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tYiVqtKTH67a2tiU(bh) {
    try {
      bh = this.sd_99dxIRa8SJg3uopK(bh);
      //appendnew_next_sd_tYiVqtKTH67a2tiU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tYiVqtKTH67a2tiU');
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
      return this.errorHandler(bh, e, 'sd_cNxfksQrRqLoGUXk');
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
      return this.errorHandler(bh, e, 'sd_JOWxHGJoytC6CUv5');
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
      return this.errorHandler(bh, e, 'sd_nwn6xW1wyhNiiuPi');
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
      return this.errorHandler(bh, e, 'sd_cepyIWRKqvOeXzaf');
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
      return this.errorHandler(bh, e, 'sd_rS22CeURM0exmb6T');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.logoutFunction(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nsdxyh6C3epK8Nvd');
    }
  }

  holidayNavigation(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.holidayPage(bh);
      //appendnew_next_holidayNavigation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WfbqmhtNje8tApEG');
    }
  }
  //appendnew_flow_mainComponent_start

  sd_99dxIRa8SJg3uopK(bh) {
    try {
      //appendnew_next_sd_99dxIRa8SJg3uopK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_99dxIRa8SJg3uopK');
    }
  }

  async navigateHelper(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/appoinment');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_navigateHelper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NvK3o1qU0ER8LZz2');
    }
  }

  async navigationHelper(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/department');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_navigationHelper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y9ZZ0UfEGE1DgO1B');
    }
  }

  async doctorNavigate(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/doctor');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_doctorNavigate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2s6XITykXD4hbodc');
    }
  }

  async patientNavigate(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/patients');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_patientNavigate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3NjKgeghIocJgyBv');
    }
  }

  logInFunction(bh) {
    try {
      const page = this.page;
      page.system.oauthService.login('http://localhost:4200/home');
      //appendnew_next_logInFunction
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sBhXof21evkyc2Ra');
    }
  }

  logoutFunction(bh) {
    try {
      const page = this.page;
      page.system.oauthService.logout('http://localhost:4200/home');
      //appendnew_next_logoutFunction
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8BJVOcn5WhlgeIax');
    }
  }

  async holidayPage(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/holiday');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_holidayPage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RAAID4uP2gWXv53J');
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
  //appendnew_flow_mainComponent_Catch
}
