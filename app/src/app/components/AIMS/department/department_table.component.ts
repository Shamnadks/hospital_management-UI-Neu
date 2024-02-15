// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, Input } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { addDoctorComponent } from 'app/sd-services/addDoctorComponent'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-department_table',
  templateUrl: './department_table.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class department_tableComponent {
  @Input('closeModal')
  public closeModal: any = undefined;
  @Input('refresh')
  public refresh: any = undefined;
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
      this.sd_Uj3gYCLW7LdZaflm(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Uj3gYCLW7LdZaflm(bh) {
    try {
      bh = this.sd_sUxBk2wkB5zu2bdz(bh);
      //appendnew_next_sd_Uj3gYCLW7LdZaflm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Uj3gYCLW7LdZaflm');
    }
  }

  setShowModal(action: any = undefined, editData: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action, editData };
      bh.local = {};
      bh = this.sd_ODKpeMgTwLjk3PQe(bh);
      //appendnew_next_setShowModal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_okbJpuigxqh0mg9K');
    }
  }

  afterEdit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4yeTrOOkbQTrbZI3(bh);
      //appendnew_next_afterEdit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AtChZ9YXJ8TbMcWo');
    }
  }
  //appendnew_flow_department_tableComponent_start

  sd_sUxBk2wkB5zu2bdz(bh) {
    try {
      this.page.departments = undefined;
      this.page.showEditComponent = 'false';
      bh = this.sd_4yeTrOOkbQTrbZI3(bh);
      //appendnew_next_sd_sUxBk2wkB5zu2bdz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sUxBk2wkB5zu2bdz');
    }
  }

  async sd_4yeTrOOkbQTrbZI3(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.fetchDepartments(
        undefined
      );
      bh.local.response = outputVariables.input.departments;

      bh = this.sd_dxCcDm8JHsGSo39p(bh);
      //appendnew_next_sd_4yeTrOOkbQTrbZI3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4yeTrOOkbQTrbZI3');
    }
  }

  sd_dxCcDm8JHsGSo39p(bh) {
    try {
      const page = this.page;
      page.departments = bh.local?.response?.response;
      //  || [{ id: 1, department: 'Cardiologist' ,info:'this one is really good'}, { id: 2, department: 'Neurologist' }, { id: 3, department: 'Orthopedist' }, { id: 4, department: 'Pediatrician' }, { id: 5, department: 'Nephrologist' }, { id: 6, department: 'Endocrinologist' }, { id: 6, department: 'Radiologist' }, { id: 7, department: 'Surgeon' }]
      //appendnew_next_sd_dxCcDm8JHsGSo39p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dxCcDm8JHsGSo39p');
    }
  }

  sd_ODKpeMgTwLjk3PQe(bh) {
    try {
      const page = this.page;
      page.editData = bh.input?.editData;
      page.showEditComponent = bh.input?.action == 'open' ? true : false;
      //appendnew_next_sd_ODKpeMgTwLjk3PQe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ODKpeMgTwLjk3PQe');
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
  //appendnew_flow_department_tableComponent_Catch
}
