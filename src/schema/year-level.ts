import { z } from "zod";
import { SectionSchema, YearLevelSchema } from "./base";

export const YearLevelSchemaWithSection = YearLevelSchema.pick({
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  sections: z.array(SectionSchema).nullable()
})

export const CreateYearLevelSchema = YearLevelSchema.pick({
  name: true,
});

export const UpdateYearLevelSchema = YearLevelSchema.pick({});

export type TYearLevelSchemaWithSection = z.infer<typeof YearLevelSchemaWithSection>;
export type TCreateYearLevelSchema = z.infer<typeof CreateYearLevelSchema>;
export type TUpdateYearLevelSchema = z.infer<typeof UpdateYearLevelSchema>;
