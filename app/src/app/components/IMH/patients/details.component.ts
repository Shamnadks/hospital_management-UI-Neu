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
import { patient } from 'app/sd-services/patient'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-details',
  templateUrl: './details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class detailsComponent {
  @Input('patient')
  public patient: any = undefined;
  @Output('changedstatus')
  public changedstatus: any = new EventEmitter<any>();
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
      this.sd_8xlhsEFRU3messZo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8xlhsEFRU3messZo(bh) {
    try {
      bh = this.sd_yTot9x9BOZqXCCdY(bh);
      //appendnew_next_sd_8xlhsEFRU3messZo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8xlhsEFRU3messZo');
    }
  }

  statuschanger(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_s6apGtkQPOwNEtfD(bh);
      //appendnew_next_statuschanger
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K7Rh3Bpu9sQuLjoH');
    }
  }

  appoinmentstatus(appoinmentid: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { appoinmentid };
      bh.local = {};
      bh = this.sd_iLSPqqMP87teVA6T(bh);
      //appendnew_next_appoinmentstatus
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pb0CcBkGU25OMK0z');
    }
  }

  reciept(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6EM1trqBPMGw4kov(bh);
      //appendnew_next_reciept
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fRspIdKBOrHdVSeo');
    }
  }
  //appendnew_flow_detailsComponent_start

  sd_yTot9x9BOZqXCCdY(bh) {
    try {
      this.page.changedstatus = undefined;
      this.page.datas = bh.pageInput.patient;
      bh = this.sd_4HVWn1pCMdegp9vA(bh);
      //appendnew_next_sd_yTot9x9BOZqXCCdY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yTot9x9BOZqXCCdY');
    }
  }

  sd_4HVWn1pCMdegp9vA(bh) {
    try {
      const page = this.page;
      page.changedstatus = false;
      console.log(page.changedstatus, 'chahcahc');
      console.log(page.datas, 'page datas  ss');

      //appendnew_next_sd_4HVWn1pCMdegp9vA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4HVWn1pCMdegp9vA');
    }
  }

  sd_s6apGtkQPOwNEtfD(bh) {
    try {
      const page = this.page;
      page.changedstatus = 'close';

      console.log(page.changedstatus, 'chahcahc');
      bh = this.sd_b5xdhLw0j3ABXRbe(bh);
      //appendnew_next_sd_s6apGtkQPOwNEtfD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s6apGtkQPOwNEtfD');
    }
  }

  sd_b5xdhLw0j3ABXRbe(bh) {
    try {
      bh.pageOutput.changedstatus.emit(this.page.changedstatus);
      //appendnew_next_sd_b5xdhLw0j3ABXRbe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b5xdhLw0j3ABXRbe');
    }
  }

  sd_iLSPqqMP87teVA6T(bh) {
    try {
      const page = this.page;
      bh.input.url = 'patient/put';
      bh.input.method = 'put';
      bh.input.body = { id: bh.input.appoinmentid, status: 'Completed' };
      bh = this.sd_lbEJRXSX92TzC5IO(bh);
      //appendnew_next_sd_iLSPqqMP87teVA6T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iLSPqqMP87teVA6T');
    }
  }

  async sd_lbEJRXSX92TzC5IO(bh) {
    try {
      const patientInstance: patient = this.__page_injector__.get(patient);

      let outputVariables = await patientInstance.common(
        bh.input.url,
        bh.input.method,
        bh.input.body
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_4jBag0t5s2gQGu11(bh);
      //appendnew_next_sd_lbEJRXSX92TzC5IO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lbEJRXSX92TzC5IO');
    }
  }

  sd_4jBag0t5s2gQGu11(bh) {
    try {
      const page = this.page;
      page.changedstatus = 'detailed';

      console.log(page.changedstatus, 'ahcahc');
      bh = this.sd_b5xdhLw0j3ABXRbe(bh);
      //appendnew_next_sd_4jBag0t5s2gQGu11
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4jBag0t5s2gQGu11');
    }
  }

  sd_6EM1trqBPMGw4kov(bh) {
    try {
      const page = this.page;
      page.changedstatus = 'reciept';

      console.log(page.changedstatus, 'chahcahc');
      bh = this.sd_b5xdhLw0j3ABXRbe(bh);
      //appendnew_next_sd_6EM1trqBPMGw4kov
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6EM1trqBPMGw4kov');
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
  //appendnew_flow_detailsComponent_Catch
}
