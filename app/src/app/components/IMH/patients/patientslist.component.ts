// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { patient } from 'app/sd-services/patient'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-patientslist',
  templateUrl: './patientslist.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class patientslistComponent {
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
      this.sd_sDu4kgrRBgvovaDL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_sDu4kgrRBgvovaDL(bh) {
    try {
      bh = this.sd_QWSNHIrm2ekn57gb(bh);
      //appendnew_next_sd_sDu4kgrRBgvovaDL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sDu4kgrRBgvovaDL');
    }
  }

  outflow(datas: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { datas };
      bh.local = {};
      bh = this.sd_t6B674e19KCZYmRm(bh);
      //appendnew_next_outflow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7rZY7u8z7mFXloKf');
    }
  }

  detailedoutflow(changedstatus: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { changedstatus };
      bh.local = {};
      bh = this.sd_dhNfFhh60AkykSaX(bh);
      //appendnew_next_detailedoutflow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ok54OEhyNHls3Vmt');
    }
  }

  patients(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_LmCdUA5a05uEMavm(bh);
      //appendnew_next_patients
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mdCT6m4iB9saDw5Y');
    }
  }
  //appendnew_flow_patientslistComponent_start

  sd_QWSNHIrm2ekn57gb(bh) {
    try {
      this.page.patientslist = undefined;
      this.page.status = undefined;
      this.page.datas = undefined;
      bh = this.sd_BJLtFc8jUpSkLLaX(bh);
      //appendnew_next_sd_QWSNHIrm2ekn57gb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QWSNHIrm2ekn57gb');
    }
  }

  sd_BJLtFc8jUpSkLLaX(bh) {
    try {
      const page = this.page;
      page.status = false;
      // bh.input.url = 'patients'
      // bh.input.method = 'get'
      // bh.input.body = ''
      bh = this.sd_10B9F7f4SdRFecbS(bh);
      //appendnew_next_sd_BJLtFc8jUpSkLLaX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BJLtFc8jUpSkLLaX');
    }
  }

  sd_10B9F7f4SdRFecbS(bh) {
    try {
      let outputVariables = this.patients();

      //appendnew_next_sd_10B9F7f4SdRFecbS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_10B9F7f4SdRFecbS');
    }
  }

  sd_t6B674e19KCZYmRm(bh) {
    try {
      const page = this.page;
      console.log(bh.input.datas, 'datas input');
      page.status = bh.input.datas.status;
      console.log(page.status, 'oiijn');
      page.datas = bh.input.datas;
      console.log(page.datas, 'datas   oiijn');

      //appendnew_next_sd_t6B674e19KCZYmRm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t6B674e19KCZYmRm');
    }
  }

  sd_dhNfFhh60AkykSaX(bh) {
    try {
      const page = this.page;
      console.log(bh.input.changedstatus, 'status input');
      page.status = bh.input.changedstatus;
      console.log(page.status, 'oiijn');
      //appendnew_next_sd_dhNfFhh60AkykSaX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhNfFhh60AkykSaX');
    }
  }

  sd_LmCdUA5a05uEMavm(bh) {
    try {
      const page = this.page;
      bh.input.url = 'patients';
      bh.input.method = 'get';
      // bh.input.body = ''
      bh = this.sd_ue902p3IruZP1eRR(bh);
      //appendnew_next_sd_LmCdUA5a05uEMavm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LmCdUA5a05uEMavm');
    }
  }

  async sd_ue902p3IruZP1eRR(bh) {
    try {
      const patientInstance: patient = this.__page_injector__.get(patient);

      let outputVariables = await patientInstance.common(
        bh.input.url,
        bh.input.method,
        bh.input.body
      );
      bh.local.response = outputVariables.local.result;

      bh = this.sd_sbUDiEkgIRIQH1g5(bh);
      //appendnew_next_sd_ue902p3IruZP1eRR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ue902p3IruZP1eRR');
    }
  }

  sd_sbUDiEkgIRIQH1g5(bh) {
    try {
      const page = this.page;
      console.log(page.patientslist, 'resres');
      page.patientslist = bh.local.result?.response;
      console.log(page.patientslist, 'resrerrrrrs');

      //appendnew_next_sd_sbUDiEkgIRIQH1g5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sbUDiEkgIRIQH1g5');
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
  //appendnew_flow_patientslistComponent_Catch
}
