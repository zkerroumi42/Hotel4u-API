import { PartialType } from '@nestjs/mapped-types';
import { CreateConsomationDto } from './create-consomation.dto';

export class UpdateConsomationDto extends PartialType(CreateConsomationDto) {}
