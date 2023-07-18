import { RuleOperator } from './rule-operator';
import { Operator } from './operator';
import { EqualOperator } from './equal-operator';
import { GreaterThanOperator } from './greater-than-operator';
import { LessThanOperator } from './less-than-operator';

function createOperator(operator: RuleOperator): Operator {
  switch (operator) {
    case RuleOperator.EQUAL: {
      return new EqualOperator();
    }
    case RuleOperator.GREATER_THAN: {
      return new GreaterThanOperator();
    }
    case RuleOperator.LESS_THAN: {
      return new LessThanOperator();
    }
  }
}

export const OPERATOR = 'OPERATOR';
export const operatorFactory = {
  provide: OPERATOR,
  useValue: createOperator,
};
