import { z } from "zod";

export const SectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  yearLevelId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
}) 

export const CreateSectionSchema = SectionSchema.pick({
  name: true,
  yearLevelId: true,
});

export const UpdateSectionSchema = SectionSchema.pick({});

export type TSectionSchema = z.infer<typeof SectionSchema>;
export type TCreateSectionSchema = z.infer<typeof CreateSectionSchema>;
export type TUpdateSectionSchema = z.infer<typeof UpdateSectionSchema>;
