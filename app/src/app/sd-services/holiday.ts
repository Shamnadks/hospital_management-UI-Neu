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
export class holiday {
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

  //   service flows_holiday

  async gettingHolidaysList(bh) {
    try {
      bh = await this.sd_7NK8x7BvIXWgvZnE(bh);
      //appendnew_next_gettingHolidaysList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HcoA9jhW4YqM6xfW');
    }
  }

  async addHoliday(bh) {
    try {
      bh = await this.sd_EFnwBzoCGJdqmYh2(bh);
      //appendnew_next_addHoliday
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ycM3e847ck42Z9YX');
    }
  }

  async editHoliday(bh) {
    try {
      bh = await this.sd_Bhp3vJ4SmQw4l4f0(bh);
      //appendnew_next_editHoliday
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tKVvEPdwRQxnwRLW');
    }
  }

  async deleteHoliday(bh) {
    try {
      bh = await this.sd_yVXCzsyeU4BhWda8(bh);
      //appendnew_next_deleteHoliday
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wZU5LQzlgobZy7Ql');
    }
  }
  //appendnew_flow_holiday_start

  async sd_7NK8x7BvIXWgvZnE(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'holiday/get';
      bh = await this.sd_5iA5umPJCrK0l6FC(bh);
      //appendnew_next_sd_7NK8x7BvIXWgvZnE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7NK8x7BvIXWgvZnE');
    }
  }

  async sd_5iA5umPJCrK0l6FC(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.holidays = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_5iA5umPJCrK0l6FC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5iA5umPJCrK0l6FC');
    }
  }

  async sd_EFnwBzoCGJdqmYh2(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'holiday/post';
      console.log(bh.input.body);
      bh = await this.sd_dMqcoYI1wkKpMEfp(bh);
      //appendnew_next_sd_EFnwBzoCGJdqmYh2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EFnwBzoCGJdqmYh2');
    }
  }

  async sd_dMqcoYI1wkKpMEfp(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_dMqcoYI1wkKpMEfp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dMqcoYI1wkKpMEfp');
    }
  }

  async sd_Bhp3vJ4SmQw4l4f0(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'holiday/put';
      bh = await this.sd_Qzs4NXjGRNT0x5FQ(bh);
      //appendnew_next_sd_Bhp3vJ4SmQw4l4f0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bhp3vJ4SmQw4l4f0');
    }
  }

  async sd_Qzs4NXjGRNT0x5FQ(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Qzs4NXjGRNT0x5FQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qzs4NXjGRNT0x5FQ');
    }
  }

  async sd_yVXCzsyeU4BhWda8(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'holiday/delete';
      bh.local.query = { id: bh.input.id };
      console.log('query', bh.local.query);
      bh = await this.sd_cRIheXNQ1kRjZDtc(bh);
      //appendnew_next_sd_yVXCzsyeU4BhWda8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yVXCzsyeU4BhWda8');
    }
  }

  async sd_cRIheXNQ1kRjZDtc(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: bh.local.query,
        body: undefined,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_cRIheXNQ1kRjZDtc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cRIheXNQ1kRjZDtc');
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
  //appendnew_flow_holiday_Catch
}
