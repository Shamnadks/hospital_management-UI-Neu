// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { addDoctorComponent } from 'app/sd-services/addDoctorComponent'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-doctor_list',
  templateUrl: './doctor_list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class doctor_listComponent {
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
      this.sd_RojBXUacZPog8buK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RojBXUacZPog8buK(bh) {
    try {
      bh = this.sd_SzIUedleyNfU6jg6(bh);
      //appendnew_next_sd_RojBXUacZPog8buK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RojBXUacZPog8buK');
    }
  }

  //appendnew_flow_doctor_listComponent_start

  sd_SzIUedleyNfU6jg6(bh) {
    try {
      bh = this.sd_r4OvN6jMNdFUVP9S(bh);
      //appendnew_next_sd_SzIUedleyNfU6jg6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SzIUedleyNfU6jg6');
    }
  }

  async sd_r4OvN6jMNdFUVP9S(bh) {
    try {
      const addDoctorComponentInstance: addDoctorComponent =
        this.__page_injector__.get(addDoctorComponent);

      let outputVariables = await addDoctorComponentInstance.fetchDoctors(
        undefined
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_V8lrkeGjorZLiqr1(bh);
      //appendnew_next_sd_r4OvN6jMNdFUVP9S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r4OvN6jMNdFUVP9S');
    }
  }

  sd_V8lrkeGjorZLiqr1(bh) {
    try {
      const page = this.page;
      console.log(bh.local?.response?.response, 'doctor details');
      page.doctors = bh.local?.response?.response || [
        {
          id: 1,
          name: 'ziyad',
          phone_no: 1234,
          education: 'mbbs',
          department: { name: 'Cardiologist' },
        },
        {
          id: 2,
          name: 'john',
          phone_no: 5678,
          education: 'MD',
          department: { name: 'Neurologist' },
        },
        {
          id: 3,
          name: 'emma',
          phone_no: 91011,
          education: 'PhD',
          department: { name: 'Psychiatrist' },
        },
        {
          id: 4,
          name: 'michael',
          phone_no: 121314,
          education: 'DDS',
          department: { name: 'Dentist' },
        },
        {
          id: 5,
          name: 'sarah',
          phone_no: 151617,
          education: 'DVM',
          department: { name: 'Veterinarian' },
        },
        {
          id: 6,
          name: 'alex',
          phone_no: 181920,
          education: 'BSc',
          department: { name: 'Biologist' },
        },
        {
          id: 7,
          name: 'lisa',
          phone_no: 212223,
          education: 'MS',
          department: { name: 'Oncologist' },
        },
        {
          id: 8,
          name: 'james',
          phone_no: 242526,
          education: 'PharmD',
          department: { name: 'Pharmacist' },
        },
        {
          id: 9,
          name: 'emily',
          phone_no: 272829,
          education: 'RN',
          department: { name: 'Nurse' },
        },
        {
          id: 10,
          name: 'david',
          phone_no: 303132,
          education: 'JD',
          department: { name: 'Lawyer' },
        },
      ];
      //appendnew_next_sd_V8lrkeGjorZLiqr1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V8lrkeGjorZLiqr1');
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
  //appendnew_flow_doctor_listComponent_Catch
}
