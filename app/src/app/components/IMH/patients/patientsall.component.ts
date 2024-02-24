// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-patientsall',
  templateUrl: './patientsall.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class patientsallComponent implements OnChanges {
  @Input('patients')
  public patients: any = undefined;
  @Output('selected')
  public selected: any = new EventEmitter<any>();
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
      this.sd_jdIcMM1isPmVXaxQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jdIcMM1isPmVXaxQ(bh) {
    try {
      bh = this.sd_HgmZpVRuZOVz1WgM(bh);
      //appendnew_next_sd_jdIcMM1isPmVXaxQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdIcMM1isPmVXaxQ');
    }
  }

  modal(item: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item };
      bh.local = {};
      bh = this.sd_E29s0CjcP5oqHSgG(bh);
      //appendnew_next_modal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eIE9poapSf8OR3vZ');
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_HgmZpVRuZOVz1WgM(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FR7HdiEoPGTsLubg');
    }
  }

  //appendnew_flow_patientsallComponent_start

  sd_HgmZpVRuZOVz1WgM(bh) {
    try {
      this.page.modalstatus = undefined;
      this.page.patientslist = bh.pageInput.patients;
      this.page.datas = undefined;
      bh = this.sd_TCYGsGtQCaVlx6Nl(bh);
      //appendnew_next_sd_HgmZpVRuZOVz1WgM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgmZpVRuZOVz1WgM');
    }
  }

  sd_TCYGsGtQCaVlx6Nl(bh) {
    try {
      const page = this.page;
      console.log('rrrrrrrrrrrrrrrrpatientssssws');
      console.log(page?.patientslist, 'pageeepatientssssws');

      page.color = (item) => {
        let currentDate = new Date();
        let sla = new Date(item.sla_date);
        let difference = sla.getTime() - currentDate.getTime();
        difference = Math.floor(difference / (1000 * 60 * 60 * 24));
        if (item.status == 'Completed') {
          return 'to right, rgb(101, 143, 141), rgb(101, 143, 141)';
        }
        if (difference > 0) {
          return 'to right, green, darkgreen'; // If current date < SLA date, set background color to green
        } else if (difference === 0) {
          return 'to right, orange, rgb(217, 54, 0)'; // If current date equals SLA date, set background color to orange
        } else {
          return 'to right, maroon, rgb(209, 10, 10)'; // If current date > SLA date, set background color to red
        }
      };

      //appendnew_next_sd_TCYGsGtQCaVlx6Nl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TCYGsGtQCaVlx6Nl');
    }
  }

  sd_E29s0CjcP5oqHSgG(bh) {
    try {
      const page = this.page;
      page.modalstatus = true;

      // console.log(bh.input.patients,'input patie')
      // console.log(page.patients,'page patie')
      // console.log(bh.local.patients,'local patie')
      page.datas = { item: bh.input.item, status: page.modalstatus };

      bh = this.sd_rabpkzJtgPziMHpq(bh);
      //appendnew_next_sd_E29s0CjcP5oqHSgG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E29s0CjcP5oqHSgG');
    }
  }

  sd_rabpkzJtgPziMHpq(bh) {
    try {
      bh.pageOutput.selected.emit(this.page.datas);
      //appendnew_next_sd_rabpkzJtgPziMHpq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rabpkzJtgPziMHpq');
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
  //appendnew_flow_patientsallComponent_Catch
}
