import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';

export class ApppointmentHistoryDto {
  @IsNotEmpty()
  @IsUUID()
  patientId: string;

  @IsNotEmpty()
  @IsEnum(['CO', 'MX', 'PE'], { message: 'Country must be PE, CO or MX' })
  country: string;
}
