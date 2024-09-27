"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  CreateRegistrationFormSchema,
  CreateRegistrationFormT,
} from "@/schema/registrations";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface PersonalInformationFormProps {
  form: UseFormReturn<CreateRegistrationFormT>;
}

export const PersonalInformationForm: React.FC<
  PersonalInformationFormProps
> = ({ form }) => {
  return (
    <div className="flex flex-col gap-y-5  ">
      <div className="flex flex-col space-y-5">
        <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10">
          <h2>Current Address</h2>
        </div>
        <div className="grid grid-rows-2 space-y-3 ">
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"house_no"}
                key={"house_no"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="house_no" placeholder="House No." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"street_name"}
                key={"street_name"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="street_name" placeholder="Street name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name={"brgy"}
                key={"brgy"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="brgy" placeholder="barangay" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"municipality"}
                key={"municipality"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="municipality" placeholder="Municipality" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"province"}
                key={"province"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="province" placeholder="Province" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-evenly space-x-3">
              <FormField
                control={form.control}
                name={"country"}
                key={"country"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="country" placeholder="Country" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"zip_code"}
                key={"zip_code"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="zip_code" placeholder="Zip" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10">
          <h2>Permanent Address</h2>

          <div className="flex text-sm">
          <FormField
                  control={form.control}
                  name="is_same_address"
                  key="is_same_address"
                  render={({ field }) => (
                    <FormItem className="space-y-3 flex items-center">
                      <FormLabel className="mt-3">Same with your address</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => field.onChange(value === "true")}
                          className="flex space-x-3 ml-5"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </div>
        </div>
        <div className="grid grid-rows-2 space-y-3 ">
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"house_no"}
                key={"house_no"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="house_no" placeholder="House No." {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"street_name"}
                key={"street_name"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="street_name" placeholder="Street name" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name={"brgy"}
                key={"brgy"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="brgy" placeholder="barangay" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"municipality"}
                key={"municipality"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="municipality" placeholder="Municipality"{...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"province"}
                key={"province"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="province" placeholder="Province"{...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-evenly space-x-3">
              <FormField
                control={form.control}
                name={"country"}
                key={"country"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="country" placeholder="Country" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"zip_code"}
                key={"zip_code"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="zip_code" placeholder="Zip" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10">
          <h2>Parents / Guardian Information</h2>
        </div>

        <div className="grid grid-rows-3 space-y-3 ">
          <div className="flex flex-col space-y-3">
            <label htmlFor="">Father's Name</label>
            <div className="grid grid-cols-4 space-x-3">
              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.last_name"}
                  key={"father_contact_info.last_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="father_contact_info.last_name" placeholder="Last Name" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.first_name"}
                  key={"father_contact_info.first_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="father_contact_info.first_name" placeholder="First Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.middle_name"}
                  key={"father_contact_info.middle_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="father_contact_info.middle_name" placeholder="Middle Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.contact_no"}
                  key={"father_contact_info.contact_no"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="father_contact_info.contact_no" placeholder="Contact No."{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="">Mother's Name</label>
            <div className="grid grid-cols-4 space-x-3">
              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.last_name"}
                  key={"mother_contact_info.last_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="mother_contact_info.last_name" placeholder="Last Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.first_name"}
                  key={"mother_contact_info.first_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="mother_contact_info.first_name" placeholder="First Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.middle_name"}
                  key={"mother_contact_info.middle_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="mother_contact_info.middle_name" placeholder="Middle Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.contact_no"}
                  key={"mother_contact_info.contact_no"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="mother_contact_info.contact_no" placeholder="Contact No."{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="">Guardian's Name</label>
            <div className="grid grid-cols-4 space-x-3">
              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.last_name"}
                  key={"guardian_contact_info.last_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="guardian_contact_info.last_name" placeholder="Last Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.first_name"}
                  key={"guardian_contact_info.first_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="guardian_contact_info.first_name" placeholder="First Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.middle_name"}
                  key={"guardian_contact_info.middle_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="guardian_contact_info.middle_name" placeholder="Middle Name"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.contact_no"}
                  key={"guardian_contact_info.contact_no"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="guardian_contact_info.contact_no" placeholder="Contact No."{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
