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
export class addDoctorComponent {
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

  //   service flows_addDoctorComponent

  async fetchDepartments(departments: any = undefined, ...others) {
    let bh: any = {
      input: {
        departments,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_LONRNX02yFlQ4QvE(bh);
      //appendnew_next_fetchDepartments
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
      return await this.errorHandler(bh, e, 'sd_gFsQjrGcMIXzyOQD');
    }
  }

  async addDoctor(response: any = undefined, data: any = undefined, ...others) {
    let bh: any = {
      input: {
        response,
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_sVWmXquySe8c6EQB(bh);
      //appendnew_next_addDoctor
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hdd633XWNoRo2DjT');
    }
  }

  async addDepartment(
    response: any = undefined,
    data: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        response,
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_rXoA1eXtfl9NnSRj(bh);
      //appendnew_next_addDepartment
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jJAbzQgqql3UVlNY');
    }
  }

  async editDepartment(
    response: any = undefined,
    data: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        response,
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_LVZrOZ0BYT8nOz85(bh);
      //appendnew_next_editDepartment
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UB1I5yieE0ATvfFj');
    }
  }
  //appendnew_flow_addDoctorComponent_start

  async sd_LONRNX02yFlQ4QvE(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdURL + 'department/getAll';
      console.log('calling fetch department');
      //appendnew_next_sd_LONRNX02yFlQ4QvE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LONRNX02yFlQ4QvE');
    }
  }

  async sd_sVWmXquySe8c6EQB(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + '/doctor';
      console.log(bh.input.data, 'doctor data');
      //appendnew_next_sd_sVWmXquySe8c6EQB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sVWmXquySe8c6EQB');
    }
  }

  async sd_rXoA1eXtfl9NnSRj(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + '/department';
      console.log(bh.input.data, 'department data');
      //appendnew_next_sd_rXoA1eXtfl9NnSRj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rXoA1eXtfl9NnSRj');
    }
  }

  async sd_LVZrOZ0BYT8nOz85(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + '/department';
      console.log(bh.input.data, 'department edit data');
      //appendnew_next_sd_LVZrOZ0BYT8nOz85
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LVZrOZ0BYT8nOz85');
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
  //appendnew_flow_addDoctorComponent_Catch
}