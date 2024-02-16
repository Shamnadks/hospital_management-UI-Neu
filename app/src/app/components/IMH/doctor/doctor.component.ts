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
  selector: 'bh-doctor',
  templateUrl: './doctor.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class doctorComponent {
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
      this.sd_Yvy9gKopJ6jpSnwV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Yvy9gKopJ6jpSnwV(bh) {
    try {
      bh = this.sd_ExIxlhYviQk1KYpC(bh);
      //appendnew_next_sd_Yvy9gKopJ6jpSnwV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yvy9gKopJ6jpSnwV');
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
      bh = this.sd_4suX6RhLYPrA3Eyv(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_njPCyxtolOvlzc3O');
    }
  }

  setPage(page: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { page };
      bh.local = {};
      bh = this.sd_op5kqNasjYJH4zMd(bh);
      //appendnew_next_setPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGZBP64H6PI0DeP0');
    }
  }
  //appendnew_flow_doctorComponent_start

  sd_ExIxlhYviQk1KYpC(bh) {
    try {
      this.page.departments = undefined;
      this.page.pageOfDoctor = 'addDoctor';
      bh = this.sd_VCtrdXU4GLfbxwTj(bh);
      //appendnew_next_sd_ExIxlhYviQk1KYpC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ExIxlhYviQk1KYpC');
    }
  }

  sd_VCtrdXU4GLfbxwTj(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;
      bh = this.sd_EC1DwdTOS7R4SUZx(bh);
      //appendnew_next_sd_VCtrdXU4GLfbxwTj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VCtrdXU4GLfbxwTj');
    }
  }

  sd_EC1DwdTOS7R4SUZx(bh) {
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
      bh = this.sd_x2lFFCcQlKFCVIm3(bh);
      //appendnew_next_sd_EC1DwdTOS7R4SUZx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EC1DwdTOS7R4SUZx');
    }
  }

  async sd_x2lFFCcQlKFCVIm3(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.fetchDepartments(
        undefined
      );
      bh.local.response = outputVariables.input.departments;

      bh = this.sd_Yz6ZlacHXFtlRxH9(bh);
      //appendnew_next_sd_x2lFFCcQlKFCVIm3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x2lFFCcQlKFCVIm3');
    }
  }

  sd_Yz6ZlacHXFtlRxH9(bh) {
    try {
      const page = this.page;
      page.departments = bh.local?.response?.response;
      // || [{id:1,department:'Cardiologist'},{id:2,department:'Neurologist'},{id:3,department:'Orthopedist'},{id:4,department:'Pediatrician'},{id:5,department:'Nephrologist'},{id:6,department:'Endocrinologist'},{id:6,department:'Radiologist'},{id:7,department:'Surgeon'}]
      //appendnew_next_sd_Yz6ZlacHXFtlRxH9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yz6ZlacHXFtlRxH9');
    }
  }

  sd_4suX6RhLYPrA3Eyv(bh) {
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
      bh = this.sd_woUUmox5cHGBdi9q(bh);
      //appendnew_next_sd_4suX6RhLYPrA3Eyv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4suX6RhLYPrA3Eyv');
    }
  }

  async sd_woUUmox5cHGBdi9q(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.addDoctor(
        undefined,
        this.page.addForm.value
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_9VCtIfQJmT89dwTL(bh);
      //appendnew_next_sd_woUUmox5cHGBdi9q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_woUUmox5cHGBdi9q');
    }
  }

  sd_9VCtIfQJmT89dwTL(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response.status,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_yieztFotjU4PoUHq(bh);
        bh = this.sd_zmjR3rq1pCZlJze6(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9VCtIfQJmT89dwTL');
    }
  }

  sd_yieztFotjU4PoUHq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Doctor add successfully', 'ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      //appendnew_next_sd_yieztFotjU4PoUHq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yieztFotjU4PoUHq');
    }
  }

  sd_zmjR3rq1pCZlJze6(bh) {
    try {
      const page = this.page;
      page.pageOfDoctor = 'listDoctors';
      //appendnew_next_sd_zmjR3rq1pCZlJze6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zmjR3rq1pCZlJze6');
    }
  }

  sd_xD2Q19iTVXvTz9h2(bh) {
    try {
      const page = this.page;
      console.log(bh.error, 'error showing');
      bh = this.sd_rENjy7qtTWDSMaYz(bh);
      //appendnew_next_sd_xD2Q19iTVXvTz9h2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xD2Q19iTVXvTz9h2');
    }
  }

  sd_rENjy7qtTWDSMaYz(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.error.status,
          411,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_C73CBCWV6AiBJKck(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rENjy7qtTWDSMaYz');
    }
  }

  sd_C73CBCWV6AiBJKck(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.message, 'ok', {
        duration: bh.error.message,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_C73CBCWV6AiBJKck
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C73CBCWV6AiBJKck');
    }
  }

  sd_op5kqNasjYJH4zMd(bh) {
    try {
      const page = this.page;
      page.pageOfDoctor = bh.input?.page;
      //appendnew_next_sd_op5kqNasjYJH4zMd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_op5kqNasjYJH4zMd');
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
      this.sd_KqhzfKUhXtOd7A09(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_KqhzfKUhXtOd7A09(bh) {
    const catchConnectedNodes = [
      'sd_xD2Q19iTVXvTz9h2',
      'sd_rENjy7qtTWDSMaYz',
      'sd_C73CBCWV6AiBJKck',
    ];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_xD2Q19iTVXvTz9h2(bh);
    //appendnew_next_sd_KqhzfKUhXtOd7A09
    return true;
  }
  //appendnew_flow_doctorComponent_Catch
}
