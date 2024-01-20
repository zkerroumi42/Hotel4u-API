import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consomation } from './entities/Consomation.entity';
import { ConsomationController } from './consomation.controller';
import { ConsomationService } from './consomation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consomation])],
  controllers: [ConsomationController],
  providers: [ConsomationService],
})
export class ConsomationModule {
  
}
