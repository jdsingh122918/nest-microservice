export interface Operator {
  process(lhs: any, rhs: any): boolean;
}
