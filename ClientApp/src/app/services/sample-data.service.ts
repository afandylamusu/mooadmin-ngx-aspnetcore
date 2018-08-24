import { Injectable } from '@angular/core';
import { ActiveRecord } from '../../../lib/mooadmin-ngx';
import { SampleData } from './sample-data';

@Injectable()
export class SampleDataService extends ActiveRecord<SampleData> {

}
