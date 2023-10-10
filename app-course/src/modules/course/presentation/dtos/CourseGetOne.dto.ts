import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CourseGetOneDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}
