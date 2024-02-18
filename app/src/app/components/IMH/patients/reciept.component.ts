// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core'; //_splitter_
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
  @Input('datas')
  public datas: any = undefined;
  @Output('recieptstatus')
  public recieptstatus: any = new EventEmitter<any>();
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
      this.sd_DxtKRRfXUm1qufI4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DxtKRRfXUm1qufI4(bh) {
    try {
      bh = this.sd_Og55tYAbU3Aga6IQ(bh);
      //appendnew_next_sd_DxtKRRfXUm1qufI4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DxtKRRfXUm1qufI4');
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
      bh = this.sd_vJVwBllXGn80Msb2(bh);
      //appendnew_next_print
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aI4fhSkYAGF5HIpE');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ivljmOXG5h7SX7P9(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KpudflHF08uC0djX');
    }
  }
  //appendnew_flow_recieptComponent_start

  sd_Og55tYAbU3Aga6IQ(bh) {
    try {
      this.page.data = bh.pageInput.datas;
      //appendnew_next_sd_Og55tYAbU3Aga6IQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Og55tYAbU3Aga6IQ');
    }
  }

  sd_vJVwBllXGn80Msb2(bh) {
    try {
      const page = this.page;
      window.print();
      //appendnew_next_sd_vJVwBllXGn80Msb2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vJVwBllXGn80Msb2');
    }
  }

  sd_ivljmOXG5h7SX7P9(bh) {
    try {
      const page = this.page;
      page.status = false;
      bh = this.sd_ojoHwS48v3vYMIfM(bh);
      //appendnew_next_sd_ivljmOXG5h7SX7P9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ivljmOXG5h7SX7P9');
    }
  }

  sd_ojoHwS48v3vYMIfM(bh) {
    try {
      bh.pageOutput.chengedstatus.emit(this.page.status);
      //appendnew_next_sd_ojoHwS48v3vYMIfM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ojoHwS48v3vYMIfM');
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
