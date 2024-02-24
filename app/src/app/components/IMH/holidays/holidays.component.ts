// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { holiday } from 'app/sd-services/holiday'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-holidays',
  templateUrl: './holidays.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class holidaysComponent {
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
      this.sd_wus8U7Q0SgZn0MBb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wus8U7Q0SgZn0MBb(bh) {
    try {
      bh = this.sd_m9fefUcDUGtXOT3u(bh);
      //appendnew_next_sd_wus8U7Q0SgZn0MBb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wus8U7Q0SgZn0MBb');
    }
  }

  setShowModal(action: any = undefined, editData: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action, editData };
      bh.local = {};
      bh = this.sd_mXyL3TlmHJ2s8REt(bh);
      //appendnew_next_setShowModal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NflxfGK9hjTM7mJn');
    }
  }

  deleteFlow(id: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id };
      bh.local = {};
      bh = this.sd_Vsjjp2emFvZleQxl(bh);
      //appendnew_next_deleteFlow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sbdYC64FowkgV7l8');
    }
  }
  //appendnew_flow_holidaysComponent_start

  sd_m9fefUcDUGtXOT3u(bh) {
    try {
      this.page.showEditComponent = 'false';
      this.page.status = undefined;
      bh = this.sd_mQFHheczWVErleVw(bh);
      //appendnew_next_sd_m9fefUcDUGtXOT3u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m9fefUcDUGtXOT3u');
    }
  }

  async sd_mQFHheczWVErleVw(bh) {
    try {
      const holidayInstance: holiday = this.__page_injector__.get(holiday);

      bh = await holidayInstance.gettingHolidaysList(bh);

      bh = this.sd_K3eMu25RdSonHomQ(bh);
      //appendnew_next_sd_mQFHheczWVErleVw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mQFHheczWVErleVw');
    }
  }

  sd_K3eMu25RdSonHomQ(bh) {
    try {
      const page = this.page;
      page.holidays = bh.input.holidays?.response;

      //appendnew_next_sd_K3eMu25RdSonHomQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K3eMu25RdSonHomQ');
    }
  }

  sd_mXyL3TlmHJ2s8REt(bh) {
    try {
      const page = this.page;
      page.editData = bh.input?.editData;
      page.showEditComponent = bh.input?.action == 'open' ? true : false;
      bh = this.sd_5RWoEdf3ZKjwiNbx(bh);
      //appendnew_next_sd_mXyL3TlmHJ2s8REt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mXyL3TlmHJ2s8REt');
    }
  }

  sd_5RWoEdf3ZKjwiNbx(bh) {
    try {
      if (
        this.sdService.operators['false'](
          this.page.showEditComponent,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mQFHheczWVErleVw(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5RWoEdf3ZKjwiNbx');
    }
  }

  async sd_Vsjjp2emFvZleQxl(bh) {
    try {
      const holidayInstance: holiday = this.__page_injector__.get(holiday);

      bh = await holidayInstance.deleteHoliday(bh);

      bh = this.sd_WcbrE7AjDH2sTw8B(bh);
      //appendnew_next_sd_Vsjjp2emFvZleQxl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vsjjp2emFvZleQxl');
    }
  }

  sd_WcbrE7AjDH2sTw8B(bh) {
    try {
      bh = this.sd_mQFHheczWVErleVw(bh);
      //appendnew_next_sd_WcbrE7AjDH2sTw8B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WcbrE7AjDH2sTw8B');
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
  //appendnew_flow_holidaysComponent_Catch
}
