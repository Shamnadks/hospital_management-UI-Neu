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
import { addDoctorComponent } from 'app/sd-services/addDoctorComponent'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_form',
  templateUrl: './add_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_formComponent {
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
      this.sd_KHtkEcjzfmBCyXdk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KHtkEcjzfmBCyXdk(bh) {
    try {
      bh = this.sd_eME1b4sKUF4VN0qh(bh);
      //appendnew_next_sd_KHtkEcjzfmBCyXdk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KHtkEcjzfmBCyXdk');
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
      bh = this.sd_ul7bfEysfFj0BkE9(bh);
      //appendnew_next_formSubmission
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f6INpdB0MT1402d0');
    }
  }
  //appendnew_flow_add_formComponent_start

  sd_eME1b4sKUF4VN0qh(bh) {
    try {
      bh = this.libaries(bh);
      //appendnew_next_sd_eME1b4sKUF4VN0qh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eME1b4sKUF4VN0qh');
    }
  }

  libaries(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;
      this.page.formControl = FormControl;
      bh = this.sd_P0cOC3KuTFh5Kzu6(bh);
      //appendnew_next_libaries
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_29CmTLc943g1lOms');
    }
  }

  sd_P0cOC3KuTFh5Kzu6(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        department: new page.formControl('', [page.validators.required]),
        info: new page.formControl('', [page.validators.required]),
      });

      //appendnew_next_sd_P0cOC3KuTFh5Kzu6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P0cOC3KuTFh5Kzu6');
    }
  }

  async sd_ul7bfEysfFj0BkE9(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.addDepartment(
        undefined,
        this.page.form.value
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_WfWhQDZUVNy2ZGpd(bh);
      //appendnew_next_sd_ul7bfEysfFj0BkE9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ul7bfEysfFj0BkE9');
    }
  }

  sd_WfWhQDZUVNy2ZGpd(bh) {
    try {
      const page = this.page;
      console.log(page?.form?.value);
      //appendnew_next_sd_WfWhQDZUVNy2ZGpd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WfWhQDZUVNy2ZGpd');
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
  //appendnew_flow_add_formComponent_Catch
}
