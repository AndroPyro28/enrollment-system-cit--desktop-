import { z } from "zod";
import { SectionSchema, YearLevelSchema } from "./base";



export const SectionSchemaWithYearLevel = SectionSchema.pick({
  id:true,
  name:true,
  yearLevelId:true,
  createdAt:true,
  updatedAt:true,
})
.extend({
  yearLevel: YearLevelSchema.nullable()
})

export const CreateSectionSchema = SectionSchema.pick({
  name: true,
  yearLevelId: true,
});

export const UpdateSectionSchema = SectionSchema.pick({});

export type TSectionSchemaWithYearLevel = z.infer<typeof SectionSchemaWithYearLevel>;
export type TCreateSectionSchema = z.infer<typeof CreateSectionSchema>;
export type TUpdateSectionSchema = z.infer<typeof UpdateSectionSchema>;
