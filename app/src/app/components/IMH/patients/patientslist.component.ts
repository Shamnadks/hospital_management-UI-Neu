// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, OnChanges, SimpleChanges } from '@angular/core'; //_splitter_
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
export class patientslistComponent implements OnChanges {
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
  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_QWSNHIrm2ekn57gb(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n77vaX26qdR0gTCz');
    }
  }

  recieptflow(status: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status };
      bh.local = {};
      bh = this.sd_JuB9FZR8KUZwesj5(bh);
      //appendnew_next_recieptflow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ca2BQyapzxN5egq3');
    }
  }
  //appendnew_flow_patientslistComponent_start

  sd_QWSNHIrm2ekn57gb(bh) {
    try {
      this.page.patientslist = undefined;
      this.page.status = undefined;
      this.page.datas = undefined;
      this.page.detailed = undefined;
      this.page.reciept = undefined;
      bh = this.sd_BJLtFc8jUpSkLLaX(bh);
      //appendnew_next_sd_QWSNHIrm2ekn57gb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QWSNHIrm2ekn57gb');
    }
  }

  sd_BJLtFc8jUpSkLLaX(bh) {
    try {
      const page = this.page; // bh.input.url = 'patients'
      // bh.input.method = 'get'
      // bh.input.body = ''

      page.detailed = false;
      page.reciept = false;
      page.status = true;
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
      page.detailed = bh.input.datas?.status;
      page.status = false;
      console.log(page.detailed, 'oiijn');

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
      const page = this.page; // page.status = true
      // console.log(page.status,'oiijn')
      // if(bh.input.changedstatus.reciept===true){
      //    page.detailed = bh.input.changedstatus.status
      //    page.reciept = true
      // }else{
      // page.detailed = bh.input.changedstatus.status
      // }

      bh = this.sd_4QLmSgQSVokYR5ge(bh);
      //appendnew_next_sd_dhNfFhh60AkykSaX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhNfFhh60AkykSaX');
    }
  }

  sd_4QLmSgQSVokYR5ge(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.changedstatus,
          'detailed',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_lRybZe7zMEf0obaC(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.changedstatus,
          'reciept',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_kKLUfU5MuSoNw6LN(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.changedstatus,
          'close',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_yMQuwXjOre9n4UFT(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QLmSgQSVokYR5ge');
    }
  }

  sd_lRybZe7zMEf0obaC(bh) {
    try {
      const page = this.page;
      page.detailed = false;
      bh = this.sd_10B9F7f4SdRFecbS(bh);
      //appendnew_next_sd_lRybZe7zMEf0obaC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lRybZe7zMEf0obaC');
    }
  }

  sd_kKLUfU5MuSoNw6LN(bh) {
    try {
      const page = this.page;
      page.detailed = false;
      page.status = false;
      page.reciept = true;

      //appendnew_next_sd_kKLUfU5MuSoNw6LN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kKLUfU5MuSoNw6LN');
    }
  }

  sd_yMQuwXjOre9n4UFT(bh) {
    try {
      const page = this.page;
      page.detailed = false;
      page.status = true;

      //appendnew_next_sd_yMQuwXjOre9n4UFT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yMQuwXjOre9n4UFT');
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
      bh.local.result = outputVariables.local.result;

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
      page.patientslist = bh.local.result?.response;
      console.log(page.patientslist, 'resrerrrrrs');

      page.status = true;
      console.log(page.status, 'kkkkkkkkk');
      //appendnew_next_sd_sbUDiEkgIRIQH1g5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sbUDiEkgIRIQH1g5');
    }
  }

  sd_JuB9FZR8KUZwesj5(bh) {
    try {
      const page = this.page;
      page.reciept = false;
      page.status = false;
      page.detailed = true;

      //appendnew_next_sd_JuB9FZR8KUZwesj5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JuB9FZR8KUZwesj5');
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
