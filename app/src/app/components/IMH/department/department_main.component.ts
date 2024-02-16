// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-department_main',
  templateUrl: './department_main.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class department_mainComponent {
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
      this.sd_aGnkgYRBzynXQ165(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aGnkgYRBzynXQ165(bh) {
    try {
      bh = this.sd_EghOS4TbuWyFoGPV(bh);
      //appendnew_next_sd_aGnkgYRBzynXQ165
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aGnkgYRBzynXQ165');
    }
  }

  setPage(page: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { page };
      bh.local = {};
      bh = this.sd_JzGtNgTpcMLQECml(bh);
      //appendnew_next_setPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vDjhPCnXpCCTHJKY');
    }
  }
  //appendnew_flow_department_mainComponent_start

  sd_EghOS4TbuWyFoGPV(bh) {
    try {
      //appendnew_next_sd_EghOS4TbuWyFoGPV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EghOS4TbuWyFoGPV');
    }
  }

  sd_JzGtNgTpcMLQECml(bh) {
    try {
      const page = this.page;
      page.pageOfDepartment = bh.input?.page;
      //appendnew_next_sd_JzGtNgTpcMLQECml
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JzGtNgTpcMLQECml');
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
  //appendnew_flow_department_mainComponent_Catch
}
