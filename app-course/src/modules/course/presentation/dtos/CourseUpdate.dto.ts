import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class GoalEntity {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class RequerimentEntity {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class ItemSyllabusEntity {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class CourseUpdateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GoalEntity)
  goals: GoalEntity[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => RequerimentEntity)
  requeriments: RequerimentEntity[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ItemSyllabusEntity)
  itemSyllabus: ItemSyllabusEntity[];
}
