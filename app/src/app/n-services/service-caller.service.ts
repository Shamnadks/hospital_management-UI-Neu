// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_3kUC36V9urSLMt09 from 'app/sd-services/addDoctorComponent'; //_splitter_
import * as sd_WHTCUYDcvN50YSU7 from 'app/sd-services/appoinment'; //_splitter_
import * as sd_zXyhoBXF2DwUCaA2 from 'app/sd-services/holiday'; //_splitter_
import * as sd_06crRHWu4Z9W0XWR from 'app/sd-services/patient'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_3kUC36V9urSLMt09: sd_3kUC36V9urSLMt09.addDoctorComponent,
    private sd_WHTCUYDcvN50YSU7: sd_WHTCUYDcvN50YSU7.appoinment,
    private sd_zXyhoBXF2DwUCaA2: sd_zXyhoBXF2DwUCaA2.holiday,
    private sd_06crRHWu4Z9W0XWR: sd_06crRHWu4Z9W0XWR.patient
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
