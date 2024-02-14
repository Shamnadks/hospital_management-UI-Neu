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
import { addDoctorComponent } from 'app/sd-services/addDoctorComponent'; //_splitter_
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
      bh = this.sd_z2XfFjrIG3u7BIfc(bh);
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
      bh = this.sd_a6Jw6chX9htMKQPM(bh);
      //appendnew_next_sd_Idr27xVf3VagSczB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Idr27xVf3VagSczB');
    }
  }

  sd_a6Jw6chX9htMKQPM(bh) {
    try {
      const page = this.page;
      page.addForm = new page.formGroup({
        name: new page.formControl('', [page.validator.required]),
        phone_no: new page.formControl('', [page.validator.required]),
        dob: new page.formControl('', [page.validator.required]),
        education: new page.formControl('', [page.validator.required]),
        address: new page.formControl('', [page.validator.required]),
        email: new page.formControl('', [page.validator.required]),
        salary: new page.formControl('', [page.validator.required]),
        department_id: new page.formControl('', [page.validator.required]),
        token_limit: new page.formControl('', [page.validator.required]),
      });
      bh = this.sd_3okmuZaQKtfjcwg7(bh);
      //appendnew_next_sd_a6Jw6chX9htMKQPM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a6Jw6chX9htMKQPM');
    }
  }

  async sd_3okmuZaQKtfjcwg7(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.fetchDepartments(
        undefined
      );
      bh.local.response = outputVariables.input.departments;

      bh = this.sd_Mxr5sZx6tNxkYwIg(bh);
      //appendnew_next_sd_3okmuZaQKtfjcwg7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3okmuZaQKtfjcwg7');
    }
  }

  sd_Mxr5sZx6tNxkYwIg(bh) {
    try {
      const page = this.page;
      page.departments = bh.local?.response?.response;
      // || [{id:1,department:'Cardiologist'},{id:2,department:'Neurologist'},{id:3,department:'Orthopedist'},{id:4,department:'Pediatrician'},{id:5,department:'Nephrologist'},{id:6,department:'Endocrinologist'},{id:6,department:'Radiologist'},{id:7,department:'Surgeon'}]
      //appendnew_next_sd_Mxr5sZx6tNxkYwIg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mxr5sZx6tNxkYwIg');
    }
  }

  sd_z2XfFjrIG3u7BIfc(bh) {
    try {
      const page = this.page;
      let currentDate = new Date();
      let birthday = new Date(
        currentDate.getFullYear() - 23,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      console.log(birthday);
      if (new Date(page.addForm.value.dob) > new Date(birthday)) {
        throw {
          status: 411,
          message: 'Doctor is under age',
        };
      }
      bh = this.sd_ZirguN2Qzbd0DRXA(bh);
      //appendnew_next_sd_z2XfFjrIG3u7BIfc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z2XfFjrIG3u7BIfc');
    }
  }

  async sd_ZirguN2Qzbd0DRXA(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.addDoctor(
        undefined,
        this.page.addForm.value
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_u98IYy4RMoyIK8Kv(bh);
      //appendnew_next_sd_ZirguN2Qzbd0DRXA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZirguN2Qzbd0DRXA');
    }
  }

  sd_u98IYy4RMoyIK8Kv(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response.status,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SXMYox7cEaP3lLlJ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u98IYy4RMoyIK8Kv');
    }
  }

  sd_SXMYox7cEaP3lLlJ(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Doctor add successfully', 'ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_SXMYox7cEaP3lLlJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SXMYox7cEaP3lLlJ');
    }
  }

  sd_YC9ekLVx3cGUf52n(bh) {
    try {
      const page = this.page;
      console.log(bh.error, 'error showing');
      bh = this.sd_no6qHDO5Gxh1zCRt(bh);
      //appendnew_next_sd_YC9ekLVx3cGUf52n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YC9ekLVx3cGUf52n');
    }
  }

  sd_no6qHDO5Gxh1zCRt(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.error.status,
          411,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_OXnQ0sUIrimYbzx8(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_no6qHDO5Gxh1zCRt');
    }
  }

  sd_OXnQ0sUIrimYbzx8(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.message, 'ok', {
        duration: bh.error.message,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_OXnQ0sUIrimYbzx8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OXnQ0sUIrimYbzx8');
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
    if (
      false ||
      this.sd_7ELAuZinM7kUlnRw(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_7ELAuZinM7kUlnRw(bh) {
    const catchConnectedNodes = [
      'sd_YC9ekLVx3cGUf52n',
      'sd_no6qHDO5Gxh1zCRt',
      'sd_OXnQ0sUIrimYbzx8',
    ];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_YC9ekLVx3cGUf52n(bh);
    //appendnew_next_sd_7ELAuZinM7kUlnRw
    return true;
  }
  //appendnew_flow_doctor_pageComponent_Catch
}
