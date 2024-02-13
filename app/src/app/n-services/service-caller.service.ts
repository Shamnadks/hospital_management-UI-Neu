// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_3kUC36V9urSLMt09 from 'app/sd-services/addDoctorComponent'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_3kUC36V9urSLMt09: sd_3kUC36V9urSLMt09.addDoctorComponent
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
