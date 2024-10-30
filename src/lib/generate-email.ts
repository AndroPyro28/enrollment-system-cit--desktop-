export const generateEmail = (
  role: string,
  first_name: string,
  last_name: string,
  dob: Date
) => {
  const email = `${role}.${first_name.toLowerCase()}${last_name.toLowerCase()}_${dob.getDay()}`;
  return email;
};

// ex. teacher.johndoe_1.gmail.com

const uploadData = (
  value: formType["excelFile"],
  callback: (json: BulkUpdateStudentsSchemaType) => void
) => {
  try {
    const reader = new FileReader();

    reader.onloadend = (e) => {
      const data = e?.target?.result;
      const workbook = xlsx?.read(data, { type: "array" });
      const sheetName = workbook?.SheetNames[0];
      const worksheet = workbook?.Sheets[sheetName];
      const json = xlsx?.utils.sheet_to_json(
        worksheet
      ) as BulkUpdateStudentsSchemaType;
      callback(json);
    };
    reader.readAsArrayBuffer(value);
  } catch (error) {
    console.error("error uploading data");
  }
};