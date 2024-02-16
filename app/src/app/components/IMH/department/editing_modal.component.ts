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
  selector: 'bh-editing_modal',
  templateUrl: './editing_modal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class editing_modalComponent {
  @Input('editData')
  public editData: any = undefined;
  @Input('refresh')
  public refresh: any = undefined;
  @Output('response')
  public response: any = new EventEmitter<any>();
  @Output('closeModal')
  public closeModal: any = new EventEmitter<any>();
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
      this.sd_UxdEJa9rQH0eQCUZ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_UxdEJa9rQH0eQCUZ(bh) {
    try {
      bh = this.sd_4MfsfNW72NRt8NNJ(bh);
      //appendnew_next_sd_UxdEJa9rQH0eQCUZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UxdEJa9rQH0eQCUZ');
    }
  }

  closeModalFunction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_JjxrToyjCbQ1cqDy(bh);
      //appendnew_next_closeModalFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TE01sJ2uIMY6F9E6');
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
      bh = this.sd_53EprZhKx4hoJouX(bh);
      //appendnew_next_formSubmission
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SvCU87ssYZs5jgLY');
    }
  }
  //appendnew_flow_editing_modalComponent_start

  sd_4MfsfNW72NRt8NNJ(bh) {
    try {
      const page = this.page;
      console.log('vefdcs');
      bh = this.sd_yx6tLgURC07lsowv(bh);
      //appendnew_next_sd_4MfsfNW72NRt8NNJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4MfsfNW72NRt8NNJ');
    }
  }

  sd_yx6tLgURC07lsowv(bh) {
    try {
      this.page.editData = bh.pageInput.editData;
      bh = this.libaries(bh);
      //appendnew_next_sd_yx6tLgURC07lsowv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yx6tLgURC07lsowv');
    }
  }

  libaries(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;
      this.page.formControl = FormControl;
      bh = this.sd_f8CfYQXhcblFbucm(bh);
      //appendnew_next_libaries
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mJyTWqsprDzbPOad');
    }
  }

  sd_f8CfYQXhcblFbucm(bh) {
    try {
      const page = this.page;
      console.log(page?.editData, 'edit data printing');
      page.editForm = new page.formGroup({
        name: new page.formControl(page.editData?.name, [
          page.validators.required,
        ]),
        info: new page.formControl(page.editData?.info, [
          page.validators.required,
        ]),
      });

      //appendnew_next_sd_f8CfYQXhcblFbucm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f8CfYQXhcblFbucm');
    }
  }

  sd_JjxrToyjCbQ1cqDy(bh) {
    try {
      const page = this.page;
      console.log('calling from modal');
      bh = this.sd_saR6Ti34KpyvlCey(bh);
      //appendnew_next_sd_JjxrToyjCbQ1cqDy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JjxrToyjCbQ1cqDy');
    }
  }

  sd_saR6Ti34KpyvlCey(bh) {
    try {
      bh.pageOutput.closeModal.emit("'close'");
      //appendnew_next_sd_saR6Ti34KpyvlCey
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_saR6Ti34KpyvlCey');
    }
  }

  sd_53EprZhKx4hoJouX(bh) {
    try {
      const page = this.page;
      bh.local.editData = {
        ...page.editForm.value,
        id: page?.editData?.id,
        status: page?.editData?.status,
      };
      bh = this.sd_iHCyoNmRpyBRHoke(bh);
      //appendnew_next_sd_53EprZhKx4hoJouX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_53EprZhKx4hoJouX');
    }
  }

  async sd_iHCyoNmRpyBRHoke(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.editDepartment(
        undefined,
        bh.local.editData
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_6JdndehVRese6bmu(bh);
      //appendnew_next_sd_iHCyoNmRpyBRHoke
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iHCyoNmRpyBRHoke');
    }
  }

  sd_6JdndehVRese6bmu(bh) {
    try {
      const page = this.page;
      console.log(bh.local.editData, '========');
      console.log(bh.local.response, 'response');
      bh = this.sd_t8tRAYlDl6UmwZqU(bh);
      bh = this.sd_MffMOUE9mM8guA5E(bh);
      //appendnew_next_sd_6JdndehVRese6bmu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6JdndehVRese6bmu');
    }
  }

  sd_t8tRAYlDl6UmwZqU(bh) {
    try {
      let outputVariables = this.closeModalFunction();

      //appendnew_next_sd_t8tRAYlDl6UmwZqU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t8tRAYlDl6UmwZqU');
    }
  }

  sd_MffMOUE9mM8guA5E(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ol9R7YtzWjwfIMIO(bh);
        bh = this.sd_Ft5SqY6mzZLHI2JP(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MffMOUE9mM8guA5E');
    }
  }

  sd_ol9R7YtzWjwfIMIO(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Department updated successfully', 'ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_ol9R7YtzWjwfIMIO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ol9R7YtzWjwfIMIO');
    }
  }

  sd_Ft5SqY6mzZLHI2JP(bh) {
    try {
      bh.pageOutput.refresh.emit('refresh page');
      //appendnew_next_sd_Ft5SqY6mzZLHI2JP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ft5SqY6mzZLHI2JP');
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
  //appendnew_flow_editing_modalComponent_Catch
}
