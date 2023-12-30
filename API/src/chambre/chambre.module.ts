import { Module } from '@nestjs/common';
import { ChambreService } from './chambre.service';
import { ChambreController } from './chambre.controller';

@Module({
  controllers: [ChambreController],
  providers: [ChambreService],
})
export class ChambreModule {}
