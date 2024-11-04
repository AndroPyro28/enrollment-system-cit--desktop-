import { z } from "zod";

export const YearLevelSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Required"),
  createdAt: z.date(),
  updatedAt: z.date(),
}) 

export const CreateYearLevelSchema = YearLevelSchema.pick({
  name: true,
});

export const UpdateYearLevelSchema = YearLevelSchema.pick({});

export type TYearLevelSchema = z.infer<typeof YearLevelSchema>;
export type TCreateYearLevelSchema = z.infer<typeof CreateYearLevelSchema>;
export type TUpdateYearLevelSchema = z.infer<typeof UpdateYearLevelSchema>;
