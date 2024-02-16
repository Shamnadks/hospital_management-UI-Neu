// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, EventEmitter, Injector, Output } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { addDoctorComponent } from 'app/sd-services/addDoctorComponent'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-addformvalue',
  templateUrl: './addformvalue.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class addformvalueComponent {
  @Output('redirect')
  public redirect: any = new EventEmitter<any>();
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
      this.sd_PP1RLL0pSMjdy1eF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PP1RLL0pSMjdy1eF(bh) {
    try {
      bh = this.sd_c75aQH08yLNLmfJl(bh);
      //appendnew_next_sd_PP1RLL0pSMjdy1eF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PP1RLL0pSMjdy1eF');
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
      bh = this.sd_fnW5zvx1TsSTvpHG(bh);
      //appendnew_next_formSubmission
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z4Kjz8zhkjHN7Dor');
    }
  }
  //appendnew_flow_addformvalueComponent_start

  sd_c75aQH08yLNLmfJl(bh) {
    try {
      bh = this.libaries(bh);
      //appendnew_next_sd_c75aQH08yLNLmfJl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c75aQH08yLNLmfJl');
    }
  }

  libaries(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;
      this.page.formControl = FormControl;
      bh = this.sd_wsiA8YFaHOyCu4JB(bh);
      //appendnew_next_libaries
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ISUAW6e1hkZKpxWt');
    }
  }

  sd_wsiA8YFaHOyCu4JB(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        name: new page.formControl('', [page.validators.required]),
        info: new page.formControl('', [page.validators.required]),
      });

      //appendnew_next_sd_wsiA8YFaHOyCu4JB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wsiA8YFaHOyCu4JB');
    }
  }

  async sd_fnW5zvx1TsSTvpHG(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.addDepartment(
        undefined,
        this.page.form.value
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_aWAstuwW1XNBZslm(bh);
      //appendnew_next_sd_fnW5zvx1TsSTvpHG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fnW5zvx1TsSTvpHG');
    }
  }

  sd_aWAstuwW1XNBZslm(bh) {
    try {
      const page = this.page;
      console.log(bh.local?.response, 'add department response');
      bh = this.sd_7hSlQksMDKwrgneS(bh);
      //appendnew_next_sd_aWAstuwW1XNBZslm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aWAstuwW1XNBZslm');
    }
  }

  sd_7hSlQksMDKwrgneS(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response.status,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_iXCRn9pBS7NKd0AT(bh);
        bh = this.sd_w6fStmGT7QRymCBH(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7hSlQksMDKwrgneS');
    }
  }

  sd_iXCRn9pBS7NKd0AT(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Department added successfully', 'ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_iXCRn9pBS7NKd0AT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iXCRn9pBS7NKd0AT');
    }
  }

  sd_w6fStmGT7QRymCBH(bh) {
    try {
      bh.pageOutput.redirect.emit('listDepartments');
      //appendnew_next_sd_w6fStmGT7QRymCBH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w6fStmGT7QRymCBH');
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
  //appendnew_flow_addformvalueComponent_Catch
}
