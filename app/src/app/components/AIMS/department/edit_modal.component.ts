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
  selector: 'bh-edit_modal',
  templateUrl: './edit_modal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_modalComponent {
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
      this.sd_msfBce9vmErGgbUv(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_msfBce9vmErGgbUv(bh) {
    try {
      bh = this.sd_dRsajhFeQeDwGxzj(bh);
      //appendnew_next_sd_msfBce9vmErGgbUv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_msfBce9vmErGgbUv');
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
      bh = this.sd_kR9Fq4DDM03fyLd2(bh);
      //appendnew_next_closeModalFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MTZCTvqJOEzKsjUv');
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
      bh = this.sd_Ez3skQPYwLi04XMo(bh);
      //appendnew_next_formSubmission
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0QJrBpUjrOOVeYse');
    }
  }
  //appendnew_flow_edit_modalComponent_start

  sd_dRsajhFeQeDwGxzj(bh) {
    try {
      this.page.editData = bh.pageInput.editData;
      bh = this.libaries(bh);
      //appendnew_next_sd_dRsajhFeQeDwGxzj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dRsajhFeQeDwGxzj');
    }
  }

  libaries(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;
      this.page.formControl = FormControl;
      bh = this.sd_oWsjWTueeeENV5Om(bh);
      //appendnew_next_libaries
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IrDw16doJ1qJSEDB');
    }
  }

  sd_oWsjWTueeeENV5Om(bh) {
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

      //appendnew_next_sd_oWsjWTueeeENV5Om
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oWsjWTueeeENV5Om');
    }
  }

  sd_kR9Fq4DDM03fyLd2(bh) {
    try {
      const page = this.page;
      console.log('calling from modal');
      bh = this.sd_8QusQRLdHmAqCDk9(bh);
      //appendnew_next_sd_kR9Fq4DDM03fyLd2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kR9Fq4DDM03fyLd2');
    }
  }

  sd_8QusQRLdHmAqCDk9(bh) {
    try {
      bh.pageOutput.closeModal.emit("'close'");
      //appendnew_next_sd_8QusQRLdHmAqCDk9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8QusQRLdHmAqCDk9');
    }
  }

  sd_Ez3skQPYwLi04XMo(bh) {
    try {
      const page = this.page;
      bh.local.editData = {
        ...page.editForm.value,
        id: page?.editData?.id,
        status: page?.editData?.status,
      };
      bh = this.sd_R2YQ7xXj98gshPkj(bh);
      //appendnew_next_sd_Ez3skQPYwLi04XMo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ez3skQPYwLi04XMo');
    }
  }

  async sd_R2YQ7xXj98gshPkj(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.editDepartment(
        undefined,
        bh.local.editData
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_0h78doOzJ7mchmKu(bh);
      //appendnew_next_sd_R2YQ7xXj98gshPkj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R2YQ7xXj98gshPkj');
    }
  }

  sd_0h78doOzJ7mchmKu(bh) {
    try {
      const page = this.page;
      console.log(bh.local.editData, '========');
      console.log(bh.local.response, 'response');
      bh = this.sd_dlX4eyPtC8trQuzY(bh);
      bh = this.sd_Oi78axlkqWUK3dQw(bh);
      //appendnew_next_sd_0h78doOzJ7mchmKu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0h78doOzJ7mchmKu');
    }
  }

  sd_dlX4eyPtC8trQuzY(bh) {
    try {
      let outputVariables = this.closeModalFunction();

      //appendnew_next_sd_dlX4eyPtC8trQuzY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dlX4eyPtC8trQuzY');
    }
  }

  sd_Oi78axlkqWUK3dQw(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_guw23jh1fLlbNgKF(bh);
        bh = this.sd_xwf7ZAmxjEIcEXwe(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oi78axlkqWUK3dQw');
    }
  }

  sd_guw23jh1fLlbNgKF(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Department updated successfully', 'ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_guw23jh1fLlbNgKF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_guw23jh1fLlbNgKF');
    }
  }

  sd_xwf7ZAmxjEIcEXwe(bh) {
    try {
      bh.pageOutput.refresh.emit('refresh page');
      //appendnew_next_sd_xwf7ZAmxjEIcEXwe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xwf7ZAmxjEIcEXwe');
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
  //appendnew_flow_edit_modalComponent_Catch
}
