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
