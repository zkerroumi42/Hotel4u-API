import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdatereservationDto extends PartialType(CreateReservationDto) {}
