// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-department_page',
  templateUrl: './department_page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class department_pageComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_wSprzm9Sm1P3u1db(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wSprzm9Sm1P3u1db(bh) {
    try {
      bh = this.sd_TpEvDtLZS471UYdG(bh);
      //appendnew_next_sd_wSprzm9Sm1P3u1db
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wSprzm9Sm1P3u1db');
    }
  }

  formSubmission(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_crJey7rxRgbGGzxu(bh);
      //appendnew_next_formSubmission
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7iSJTjBH4QBvSYHI');
    }
  }
  //appendnew_flow_department_pageComponent_start

  sd_TpEvDtLZS471UYdG(bh) {
    try {
      bh = this.libaries(bh);
      //appendnew_next_sd_TpEvDtLZS471UYdG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpEvDtLZS471UYdG');
    }
  }

  libaries(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;
      this.page.formControl = FormControl;
      bh = this.sd_Snh5juX97vQtLG9h(bh);
      //appendnew_next_libaries
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1jzZJf65PWsHoNQ4');
    }
  }

  sd_Snh5juX97vQtLG9h(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        department: new page.formControl('', [page.validators.required]),
        description: new page.formControl(),
      });
      //appendnew_next_sd_Snh5juX97vQtLG9h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Snh5juX97vQtLG9h');
    }
  }

  sd_crJey7rxRgbGGzxu(bh) {
    try {
      const page = this.page;
      console.log(page.form.value);
      //appendnew_next_sd_crJey7rxRgbGGzxu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_crJey7rxRgbGGzxu');
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
  //appendnew_flow_department_pageComponent_Catch
}
