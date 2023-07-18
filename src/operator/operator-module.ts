import { Global, Module } from '@nestjs/common';
import { operatorFactory } from './operator-factor';

@Global()
@Module({
  providers: [operatorFactory],
  exports: [operatorFactory],
})
export class OperatorModule {}
