import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CourseUpdateParamDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}
