import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CourseDeleteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}
