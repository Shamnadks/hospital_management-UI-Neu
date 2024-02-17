// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class appoinment {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_appoinment

  async gettingDepartmentsList(departments: any = undefined, ...others) {
    let bh: any = {
      input: {
        departments,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_waCO6DRKli8NUUNX(bh);
      //appendnew_next_gettingDepartmentsList
      return (
        // formatting output variables
        {
          input: {
            departments: bh.input.departments,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ivnXf8iTpT6qmaW0');
    }
  }

  async gettingDoctorsList(doctors: any = undefined, ...others) {
    let bh: any = {
      input: {
        doctors,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_UOcGAbMGbBY2z4S0(bh);
      //appendnew_next_gettingDoctorsList
      return (
        // formatting output variables
        {
          input: {
            doctors: bh.input.doctors,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1duv42srxuf6rjDP');
    }
  }

  async cashAppoinment(appoinment: any = undefined, ...others) {
    let bh: any = {
      input: {
        appoinment,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_52t4891oznMukad5(bh);
      //appendnew_next_cashAppoinment
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ij0KzYogn6nP6HmI');
    }
  }

  async onlineAppoinment(appoinment: any = undefined, ...others) {
    let bh: any = {
      input: {
        appoinment,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_FqqQW8T2Dk2nvXiJ(bh);
      //appendnew_next_onlineAppoinment
      return (
        // formatting output variables
        {
          input: {
            appoinment: bh.input.appoinment,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yeoHHfEtXGKefsqC');
    }
  }
  //appendnew_flow_appoinment_start

  async sd_waCO6DRKli8NUUNX(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdURL + 'department-filter/get';
      bh = await this.sd_oQDaI7AMOr2I29D2(bh);
      //appendnew_next_sd_waCO6DRKli8NUUNX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_waCO6DRKli8NUUNX');
    }
  }

  async sd_oQDaI7AMOr2I29D2(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.departments = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_oQDaI7AMOr2I29D2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oQDaI7AMOr2I29D2');
    }
  }

  async sd_UOcGAbMGbBY2z4S0(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdURL +
        'token/get?id=' +
        bh.input.doctors;
      console.log('haaaai');

      bh = await this.sd_T0RZ1ZTSiIEzurmh(bh);
      //appendnew_next_sd_UOcGAbMGbBY2z4S0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UOcGAbMGbBY2z4S0');
    }
  }

  async sd_T0RZ1ZTSiIEzurmh(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.doctors = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_T0RZ1ZTSiIEzurmh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T0RZ1ZTSiIEzurmh');
    }
  }

  async sd_52t4891oznMukad5(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdURL + 'appointment/post';

      bh = await this.sd_CikVONei91JxTgcR(bh);
      //appendnew_next_sd_52t4891oznMukad5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_52t4891oznMukad5');
    }
  }

  async sd_CikVONei91JxTgcR(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.appoinment,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_1ckFabNUfGjA8yfw(bh);
      //appendnew_next_sd_CikVONei91JxTgcR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CikVONei91JxTgcR');
    }
  }

  async sd_1ckFabNUfGjA8yfw(bh) {
    try {
      console.log(bh.local.response);
      //appendnew_next_sd_1ckFabNUfGjA8yfw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ckFabNUfGjA8yfw');
    }
  }

  async sd_FqqQW8T2Dk2nvXiJ(bh) {
    try {
      // bh.input.appoinment={...bh.input.appoinment,"payment_method":"stripe","sucess_url": "http://localhost:4200/home?session_id={CHECKOUT_SESSION_ID}",
      //       "cancel_url": "http://localhost:4200/appoinment"}
      bh.local.url =
        bh.system.environment.properties.ssdURL + 'appointment/post';
      bh = await this.sd_YNaLt3snM41I6gmI(bh);
      //appendnew_next_sd_FqqQW8T2Dk2nvXiJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FqqQW8T2Dk2nvXiJ');
    }
  }

  async sd_YNaLt3snM41I6gmI(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.appoinment,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_COLvx5LLfqvM8ePS(bh);
      //appendnew_next_sd_YNaLt3snM41I6gmI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YNaLt3snM41I6gmI');
    }
  }

  async sd_COLvx5LLfqvM8ePS(bh) {
    try {
      console.log(JSON.stringify(bh.local.response)); // Log the value of bh.local.response

      // Redirect the browser to a new URL
      window.location.href = bh.local.response?.response?.url;

      //appendnew_next_sd_COLvx5LLfqvM8ePS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_COLvx5LLfqvM8ePS');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_appoinment_Catch
}
