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
  selector: 'bh-reciept',
  templateUrl: './reciept.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class recieptComponent {
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
      this.sd_OQsUuUb0J7AOLGrS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_OQsUuUb0J7AOLGrS(bh) {
    try {
      bh = this.sd_lz9moRtGb6E2KgVy(bh);
      //appendnew_next_sd_OQsUuUb0J7AOLGrS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OQsUuUb0J7AOLGrS');
    }
  }

  print(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OFmr7gKno9dFSV1S(bh);
      //appendnew_next_print
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vL0qxDYQKpnUUPKv');
    }
  }
  //appendnew_flow_recieptComponent_start

  sd_lz9moRtGb6E2KgVy(bh) {
    try {
      //appendnew_next_sd_lz9moRtGb6E2KgVy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lz9moRtGb6E2KgVy');
    }
  }

  sd_OFmr7gKno9dFSV1S(bh) {
    try {
      const page = this.page;
      window.print();
      //appendnew_next_sd_OFmr7gKno9dFSV1S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OFmr7gKno9dFSV1S');
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
  //appendnew_flow_recieptComponent_Catch
}
