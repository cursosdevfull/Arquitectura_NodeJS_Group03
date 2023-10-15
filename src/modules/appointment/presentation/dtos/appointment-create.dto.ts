import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';

export class ApppointmentCreateDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  patientId: string;

  @IsNotEmpty()
  @IsUUID()
  medicId: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  dateAppointment: Date;

  @IsNotEmpty()
  @IsEnum(['CO', 'MX', 'PE'], { message: 'Country must be PE, CO or MX' })
  country: string;
}
