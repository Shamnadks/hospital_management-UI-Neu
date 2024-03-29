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
export class patient {
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

  //   service flows_patient

  async common(
    url: any = undefined,
    method: any = undefined,
    body: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        url,
        method,
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_l3eVHWoZUKiWQtbZ(bh);
      //appendnew_next_common
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zc31OM9IVJvue7Qp');
    }
  }
  //appendnew_flow_patient_start

  async sd_l3eVHWoZUKiWQtbZ(bh) {
    try {
      // console.log(bh.system.environment.properties.ssdURL,'urlurlrirl')
      bh.input.url = bh.system.environment.properties.ssdURL + bh.input.url;
      console.log(bh.input.url, 'urlqqqqqqurlrirl');

      bh = await this.sd_OQVpvMKwPsRDLEn9(bh);
      //appendnew_next_sd_l3eVHWoZUKiWQtbZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l3eVHWoZUKiWQtbZ');
    }
  }

  async sd_OQVpvMKwPsRDLEn9(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: bh.input.method,
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_ctmXF7WBa9D9aSnx(bh);
      //appendnew_next_sd_OQVpvMKwPsRDLEn9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OQVpvMKwPsRDLEn9');
    }
  }

  async sd_ctmXF7WBa9D9aSnx(bh) {
    try {
      console.log(bh.local.result, 'iiiiiiiiii');
      //appendnew_next_sd_ctmXF7WBa9D9aSnx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ctmXF7WBa9D9aSnx');
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
  //appendnew_flow_patient_Catch
}
