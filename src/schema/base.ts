import { z } from "zod";

export const userAllowedFields = {
  id: true,
  name: true,
  email: true,
  emailVerified: true,
  image: true,
  role: true,
  createdAt: true,
  updatedAt: true,
};

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.date().nullable(),
  image: z.string().nullable(),
  hashedPassword: z.string().nullable(),
  role: z.enum(["STUDENT", "ADMIN", "TEACHER"]),
  is_principal: z.boolean().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Profile Schema
export const ProfileSchema = z.object({
  id: z.string(),
  school_year: z.string().nullable(),
  grade_level_to_enroll: z.number().nullable(),
  is_with_lrn: z.boolean().nullable(),
  is_returnee: z.boolean().nullable(),
  psa_birth_cert_no: z.string().nullable(),
  lrn_no: z.string().nullable(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  extension: z.string().nullable(),
  dob: z.date(),
  gender: z.enum(['FEMALE', "MALE"]),
  age: z.number(),
  place_of_birth: z.string().nullable(),
  mother_tongue: z.string().nullable(),
  is_pc: z.boolean().nullable(),
  ipc_name: z.string().nullable(),
  is_4ps: z.boolean().nullable(),
  household_id_4ps: z.string().nullable(),
  is_pwd: z.boolean().nullable(),
  is_same_address: z.boolean().nullable(),
  last_grade_level_complete: z.string().nullable(),
  last_school_year_complete: z.string().nullable(),
  last_school_attended: z.string().nullable(),
  school_id: z.string().nullable(),
  semester: z.enum(['FIRST', "SECOND"]).nullable(),
  track: z.string().nullable(),
  strand: z.string().nullable(),
  form137_url: z.string().nullable(),
  form137_id: z.string().nullable(),
  birth_cert_url: z.string().nullable(),
  birth_cert_id: z.string().nullable(),
  card_url: z.string().nullable(),
  card_id: z.string().nullable(),
  application_form_url: z.string().nullable(),
  application_form_id: z.string().nullable(),
  picture_url: z.string().nullable(),
  picture_id: z.string().nullable(),
  qr_code_url: z.string().nullable(),
  qr_code_id: z.string().nullable(),
  userId: z.string(),
}) 

// Disability Schema
export const DisabilitySchema = z.object({
  id: z.string(),
  name: z.string(),
  student: z.array(z.string()), // Assuming student is represented as strings
}) 

// LearningModality Schema
export const LearningModalitySchema = z.object({
  id: z.string(),
  name: z.string(),
  student: z.array(z.string()), // Assuming student is represented as strings
}) 

// Address Schema
export const AddressSchema = z.object({
  id: z.string(),
  house_no: z.string(),
  street_name: z.string(),
  brgy: z.string(),
  municipality: z.string(),
  province: z.string(),
  country: z.string(),
  zip_code: z.string(),
  type: z.enum(["CURRENT", "PERMANENT"]),
}) 

// Guardian Schema
export const GuardianSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  contact_no: z.string(),
  studentId: z.string().nullable(),
}) 



// Registration Schema
export const RegistrationFormSchema = z.object({
  id: z.string(),
  school_year: z.string().nullable(),
  grade_level_to_enroll: z.number().nullable(),
  is_with_lrn: z.boolean().nullable(),
  is_returnee: z.boolean().nullable(),
  psa_birth_cert_no: z.string().nullable(),
  lrn_no: z.string().nullable(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  extension: z.string().nullable(),
  dob: z.date(),
  gender: z.enum(["FEMALE", "MALE"]),
  age: z.number(),
  place_of_birth: z.string().nullable(),
  mother_tongue: z.string().nullable(),
  is_pc: z.boolean().nullable(),
  ipc_name: z.string().nullable(),
  is_4ps: z.boolean().nullable(),
  household_id_4ps: z.string().nullable(),
  is_pwd: z.boolean().nullable(),
  is_same_address: z.boolean().nullable(),
  last_grade_level_complete: z.string().nullable(),
  last_school_year_complete: z.string().nullable(),
  last_school_attended: z.string().nullable(),
  school_id: z.string().nullable(),
  semester: z.enum(['FIRST', 'SECOND']),
  track: z.string().nullable(),
  strand: z.string().nullable(),
  form137_url: z.string().nullable(),
  form137_id: z.string().nullable(),
  birth_cert_url: z.string().nullable(),
  birth_cert_id: z.string().nullable(),
  card_url: z.string().nullable(),
  card_id: z.string().nullable(),
  application_form_url: z.string().nullable(),
  application_form_id: z.string().nullable(),
  picture_url: z.string().nullable(),
  picture_id: z.string().nullable(),
  qr_code_url: z.string().nullable(),
  qr_code_id: z.string().nullable(),
}) 

// types
export type UserT = z.infer<typeof UserSchema>;

export type SafeUserT = Omit<UserT, "hashedPassword">;

export type ProfileT = z.infer<typeof ProfileSchema>;
export type DisabilityT = z.infer<typeof DisabilitySchema>;
export type LearningModalityT = z.infer<typeof LearningModalitySchema>;
export type AddressT = z.infer<typeof AddressSchema>;
export type GuardianT = z.infer<typeof GuardianSchema>;
export type RegistrationFormT = z.infer<typeof RegistrationFormSchema>;
