import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { operatorFactory } from './operator/operator-factor';
import { OperatorValidate } from './operator/operator-validate';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, operatorFactory],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return true', async () => {
      const testRequest = {
        lhs: 'hello',
        rhs: 'world',
        operator: 'equal',
      };
      const result = appController.validateOperator(
        testRequest as OperatorValidate,
      );
      expect(result).toEqual(false);
    });
  });
});
