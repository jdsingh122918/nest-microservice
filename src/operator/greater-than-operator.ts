import { Operator } from './operator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GreaterThanOperator implements Operator {
  public process(lhs: any, rhs: any): boolean {
    return lhs > rhs;
  }
}
