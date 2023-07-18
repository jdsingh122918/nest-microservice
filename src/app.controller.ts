import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OperatorValidate } from './operator/operator-validate';
import { OPERATOR } from './operator/operator-factor';
import { RuleOperator } from './operator/rule-operator';
import { Operator } from './operator/operator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(OPERATOR)
    private readonly operatorFactor: (operator: RuleOperator) => Operator,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  validateOperator(@Body() request: OperatorValidate): boolean {
    const testOperator: Operator = this.operatorFactor(RuleOperator.EQUAL);
    return testOperator.process(request.lhs, request.rhs);
  }
}
