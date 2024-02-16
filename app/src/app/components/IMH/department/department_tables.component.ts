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
  selector: 'bh-department_tables',
  templateUrl: './department_tables.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class department_tablesComponent {
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
      this.sd_jEc3LWhGYVnlu6Zc(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jEc3LWhGYVnlu6Zc(bh) {
    try {
      bh = this.sd_ziomKo49eAABHdjP(bh);
      //appendnew_next_sd_jEc3LWhGYVnlu6Zc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jEc3LWhGYVnlu6Zc');
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
      bh = this.sd_E8ErJikavcOFrUQB(bh);
      //appendnew_next_setShowModal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7PP6sr7fYEqEpLZO');
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
      bh = this.sd_YQPChcyQNlfJJxeC(bh);
      //appendnew_next_afterEdit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3UrQDCIQ3VbKfIs2');
    }
  }
  //appendnew_flow_department_tablesComponent_start

  sd_ziomKo49eAABHdjP(bh) {
    try {
      const page = this.page;
      console.log('page on inijnt');
      bh = this.sd_81hfAWEHmHYDul0x(bh);
      //appendnew_next_sd_ziomKo49eAABHdjP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ziomKo49eAABHdjP');
    }
  }

  sd_81hfAWEHmHYDul0x(bh) {
    try {
      this.page.departments = undefined;
      this.page.showEditComponent = 'false';
      bh = this.sd_YQPChcyQNlfJJxeC(bh);
      //appendnew_next_sd_81hfAWEHmHYDul0x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_81hfAWEHmHYDul0x');
    }
  }

  async sd_YQPChcyQNlfJJxeC(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.fetchDepartments(
        undefined
      );
      bh.local.response = outputVariables.input.departments;

      bh = this.sd_A1wnAwAqImnRpqsy(bh);
      //appendnew_next_sd_YQPChcyQNlfJJxeC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YQPChcyQNlfJJxeC');
    }
  }

  sd_A1wnAwAqImnRpqsy(bh) {
    try {
      const page = this.page;
      page.departments = bh.local?.response?.response;
      console.log(page?.departments, '=-==-fsdafsdf');
      //  || [{ id: 1, department: 'Cardiologist' ,info:'this one is really good'}, { id: 2, department: 'Neurologist' }, { id: 3, department: 'Orthopedist' }, { id: 4, department: 'Pediatrician' }, { id: 5, department: 'Nephrologist' }, { id: 6, department: 'Endocrinologist' }, { id: 6, department: 'Radiologist' }, { id: 7, department: 'Surgeon' }]
      //appendnew_next_sd_A1wnAwAqImnRpqsy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A1wnAwAqImnRpqsy');
    }
  }

  sd_E8ErJikavcOFrUQB(bh) {
    try {
      const page = this.page;
      page.editData = bh.input?.editData;
      page.showEditComponent = bh.input?.action == 'open' ? true : false;
      //appendnew_next_sd_E8ErJikavcOFrUQB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E8ErJikavcOFrUQB');
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
  //appendnew_flow_department_tablesComponent_Catch
}
