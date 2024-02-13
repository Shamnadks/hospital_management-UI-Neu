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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-doctor_page',
  templateUrl: './doctor_page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class doctor_pageComponent {
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
      this.sd_sebDHdT8uLR9wzjM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_sebDHdT8uLR9wzjM(bh) {
    try {
      bh = this.sd_EzNxpwd1uiqrKi1H(bh);
      //appendnew_next_sd_sebDHdT8uLR9wzjM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sebDHdT8uLR9wzjM');
    }
  }

  submitForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mg7xNwEufnGKOmxP(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8JL0oKw0opl05nJ6');
    }
  }
  //appendnew_flow_doctor_pageComponent_start

  sd_EzNxpwd1uiqrKi1H(bh) {
    try {
      this.page.departments = undefined;
      bh = this.sd_Idr27xVf3VagSczB(bh);
      //appendnew_next_sd_EzNxpwd1uiqrKi1H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EzNxpwd1uiqrKi1H');
    }
  }

  sd_Idr27xVf3VagSczB(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;
      bh = this.sd_Mxr5sZx6tNxkYwIg(bh);
      //appendnew_next_sd_Idr27xVf3VagSczB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Idr27xVf3VagSczB');
    }
  }

  sd_Mxr5sZx6tNxkYwIg(bh) {
    try {
      const page = this.page;
      page.departments = [
        { id: 1, department: 'Cardiologist' },
        { id: 2, department: 'Neurologist' },
        { id: 3, department: 'Orthopedist' },
        { id: 4, department: 'Pediatrician' },
        { id: 5, department: 'Nephrologist' },
        { id: 6, department: 'Endocrinologist' },
        { id: 6, department: 'Radiologist' },
        { id: 7, department: 'Surgeon' },
      ];

      page.addForm = new page.formGroup({
        name: new page.formControl('', [page.validator.required]),
        phone: new page.formControl('', [page.validator.required]),
        age: new page.formControl('', [page.validator.required]),
        education: new page.formControl('', [page.validator.required]),
        address: new page.formControl('', [page.validator.required]),
        email: new page.formControl('', [page.validator.required]),
        salary: new page.formControl('', [page.validator.required]),
        departmentId: new page.formControl('', [page.validator.required]),
        maxTokens: new page.formControl('', [page.validator.required]),
      });
      //appendnew_next_sd_Mxr5sZx6tNxkYwIg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mxr5sZx6tNxkYwIg');
    }
  }

  sd_mg7xNwEufnGKOmxP(bh) {
    try {
      const page = this.page;
      console.log(page.addForm?.value, '================');
      bh = this.sd_OvIEu4FggpAHkvYq(bh);
      //appendnew_next_sd_mg7xNwEufnGKOmxP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mg7xNwEufnGKOmxP');
    }
  }

  sd_OvIEu4FggpAHkvYq(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form Submitted', 'Ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_OvIEu4FggpAHkvYq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OvIEu4FggpAHkvYq');
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
  //appendnew_flow_doctor_pageComponent_Catch
}
