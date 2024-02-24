// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { holiday } from 'app/sd-services/holiday'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-form_modal',
  templateUrl: './form_modal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class form_modalComponent {
  @Input('editData')
  public editData: any = undefined;
  @Input('holidays')
  public holidays: any = undefined;
  @Output('closeModal')
  public closeModal: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_z23LUH0S9WS4qtDp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { days: 0 });

    //append_listeners
  }

  sd_z23LUH0S9WS4qtDp(bh) {
    try {
      bh = this.sd_FKLu9aGMVB7dk0CA(bh);
      //appendnew_next_sd_z23LUH0S9WS4qtDp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z23LUH0S9WS4qtDp');
    }
  }

  closeModalFunction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gyb8fdspFgZO8qDC(bh);
      //appendnew_next_closeModalFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TBe9gq9dedW7hoBB');
    }
  }

  formSubmission(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qGfOgwItw9xdVYVR(bh);
      //appendnew_next_formSubmission
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QBKFiqSe008vt6E4');
    }
  }

  startDate(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_msS7AA13Kc87fv6w(bh);
      //appendnew_next_startDate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9HvOychKHDlM0maS');
    }
  }

  endDate(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xtMEgMgwvwrtnABZ(bh);
      //appendnew_next_endDate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5Jaf5PfHJwwKLi3u');
    }
  }

  datePickerFilter(date: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date };
      bh.local = {};
      bh = this.sd_dAu5mWpXzPc0qq3P(bh);
      //appendnew_next_datePickerFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hSPlMHDd7jqWe2qN');
    }
  }
  //appendnew_flow_form_modalComponent_start

  sd_FKLu9aGMVB7dk0CA(bh) {
    try {
      this.page.editData = bh.pageInput.editData;
      bh = this.form(bh);
      //appendnew_next_sd_FKLu9aGMVB7dk0CA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FKLu9aGMVB7dk0CA');
    }
  }

  form(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;
      this.page.formControl = FormControl;
      bh = this.sd_Bbgrf9wqbzfFdZnB(bh);
      //appendnew_next_form
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tN4n2bJVZdPmOZ1g');
    }
  }

  sd_Bbgrf9wqbzfFdZnB(bh) {
    try {
      const page = this.page;
      let startDate = new Date(this.editData?.starting_date);
      let endDate = new Date(this.editData?.end_date);
      page.holidayForm = new page.formGroup({
        name: new page.formControl(this.editData?.name || '', [
          page.validators.required,
          page.validators.pattern(/^\S*$/),
        ]),
        starting_date: new page.formControl(startDate || '', [
          page.validators.required,
        ]),
        end_date: new page.formControl(endDate || '', [
          page.validators.required,
        ]),
      });

      page.days = this.editData ? this.editData.days : 0;
      page.newDate = new Date();
      page.endDate = new Date();
      page.start_date = startDate;
      page.end_date = endDate;
      const disabledRanges: { start: Date; end: Date }[] = [];

      this.holidays.forEach((h) => {
        if (h != this.editData) {
          disabledRanges.push({
            start: new Date(h.starting_date),
            end: new Date(h.end_date),
          });
        }
      });
      console.log('ranges', disabledRanges);

      page.dateFilter = (date: Date) => {
        for (const range of disabledRanges) {
          if (date >= range.start && date <= range.end) {
            console.log(date, false);
            return false;
          }
        }
        return true;
      };

      //appendnew_next_sd_Bbgrf9wqbzfFdZnB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bbgrf9wqbzfFdZnB');
    }
  }

  sd_gyb8fdspFgZO8qDC(bh) {
    try {
      const page = this.page;
      console.log('calling from modal');
      bh = this.sd_rrNB9v6lQDyjsk9z(bh);
      //appendnew_next_sd_gyb8fdspFgZO8qDC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gyb8fdspFgZO8qDC');
    }
  }

  sd_rrNB9v6lQDyjsk9z(bh) {
    try {
      bh.pageOutput.closeModal.emit("'close'");
      //appendnew_next_sd_rrNB9v6lQDyjsk9z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rrNB9v6lQDyjsk9z');
    }
  }

  sd_qGfOgwItw9xdVYVR(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.holidayForm.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_RLpNcegGfSkKWmGv(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qGfOgwItw9xdVYVR');
    }
  }

  sd_RLpNcegGfSkKWmGv(bh) {
    try {
      const page = this.page;
      let start_date = new Date(page.holidayForm.value.starting_date);
      let end_date = new Date(page.holidayForm.value.end_date);
      bh.input.body = {
        holiday: {
          name: page.holidayForm.value.name,
          starting_date: start_date,
          end_date: end_date,
          days: page.days,
        },
      };
      if (page.editData) {
        bh.input.body.holiday.id = page.editData.id;
      }
      console.log('hihihi', bh.input.body);

      bh = this.sd_oLIIz7RSaOppoVqJ(bh);
      //appendnew_next_sd_RLpNcegGfSkKWmGv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RLpNcegGfSkKWmGv');
    }
  }

  sd_oLIIz7RSaOppoVqJ(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          this.page.editData,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_edA2KtJrfCYqKRPB(bh);
      } else if (
        this.sdService.operators['null'](
          this.page.editData,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_MyXoIGBrVKHosyT1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oLIIz7RSaOppoVqJ');
    }
  }

  async sd_edA2KtJrfCYqKRPB(bh) {
    try {
      const holidayInstance: holiday = this.__page_injector__.get(holiday);

      bh = await holidayInstance.editHoliday(bh);

      bh = this.sd_i6pvQTApDeILTrIp(bh);
      //appendnew_next_sd_edA2KtJrfCYqKRPB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_edA2KtJrfCYqKRPB');
    }
  }

  sd_i6pvQTApDeILTrIp(bh) {
    try {
      const page = this.page;
      bh.local.msg = page.editData
        ? 'Holiday edited successfully'
        : 'Holiday added successfully';
      bh = this.sd_2MmdYN1UqsGzggdm(bh);
      //appendnew_next_sd_i6pvQTApDeILTrIp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i6pvQTApDeILTrIp');
    }
  }

  sd_2MmdYN1UqsGzggdm(bh) {
    try {
      let outputVariables = this.closeModalFunction();

      bh = this.sd_iLrsJXHjidpuP4e6(bh);
      //appendnew_next_sd_2MmdYN1UqsGzggdm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2MmdYN1UqsGzggdm');
    }
  }

  sd_iLrsJXHjidpuP4e6(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_B2v4FxzfXNGK1ojo(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iLrsJXHjidpuP4e6');
    }
  }

  sd_B2v4FxzfXNGK1ojo(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.local.msg, 'ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_B2v4FxzfXNGK1ojo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B2v4FxzfXNGK1ojo');
    }
  }

  async sd_MyXoIGBrVKHosyT1(bh) {
    try {
      const holidayInstance: holiday = this.__page_injector__.get(holiday);

      bh = await holidayInstance.addHoliday(bh);

      bh = this.sd_i6pvQTApDeILTrIp(bh);
      //appendnew_next_sd_MyXoIGBrVKHosyT1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MyXoIGBrVKHosyT1');
    }
  }

  sd_msS7AA13Kc87fv6w(bh) {
    try {
      const page = this.page;
      console.log('star_date', bh.input.event.value);
      let date = bh.input.event.value;

      let minSecondDate = new Date(date);
      minSecondDate.setDate(minSecondDate.getDate() + 1);
      page.endDate = minSecondDate;
      //appendnew_next_sd_msS7AA13Kc87fv6w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_msS7AA13Kc87fv6w');
    }
  }

  sd_xtMEgMgwvwrtnABZ(bh) {
    try {
      const page = this.page;
      let start: any = new Date(page.holidayForm.value.starting_date);
      let end: any = new Date(page.holidayForm.value.end_date);
      let days = (end - start) / (1000 * 60 * 60 * 24) + 1;
      page.days = days;
      //appendnew_next_sd_xtMEgMgwvwrtnABZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xtMEgMgwvwrtnABZ');
    }
  }

  sd_dAu5mWpXzPc0qq3P(bh) {
    try {
      const page = this.page;
      for (const range of page.disabledRanges) {
        if (bh.input.date >= range.start && bh.input.date <= range.end) {
          return true;
        }
      }
      return false;
      //appendnew_next_sd_dAu5mWpXzPc0qq3P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dAu5mWpXzPc0qq3P');
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
  //appendnew_flow_form_modalComponent_Catch
}
