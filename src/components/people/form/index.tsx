import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import personsClient from "../api";

const validationSchema = yup.object({
  birthday: yup.date().required("Requerido"),
  name: yup
    .string()
    .required("Requerido")
    .matches(/^[a-zA-Z\s:]{10,64}$/, "Nombre inválido"),
});

type FormValues = {
  name: string;
  birthday: Date | null;
};

const initialValues: FormValues = {
  birthday: null,
  name: "",
};

function PersonForm() {
  const handleSubmit = async (
    formValues: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    await personsClient.createPerson(formValues);

    helpers.resetForm({
      values: initialValues,
    });
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <form onSubmit={formikProps.handleSubmit}>
            <TextField
              name="name"
              label="Nombre"
              variant="outlined"
              value={formikProps.values.name}
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              error={
                formikProps.errors.name !== undefined &&
                formikProps.touched.name
              }
              helperText={formikProps.errors.name || ""}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha de nacimiento"
                clearable={true}
                value={formikProps.values.birthday}
                onChange={(newValue) => {
                  formikProps.setFieldValue("birthday", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onBlur={formikProps.handleBlur}
                    name="birthday"
                    error={
                      formikProps.errors.birthday !== undefined &&
                      formikProps.touched.birthday
                    }
                    helperText={formikProps.errors.birthday || ""}
                  />
                )}
              />
            </LocalizationProvider>

            <Button
              variant="text"
              type="submit"
              disabled={!formikProps.isValid || !formikProps.dirty}
            >
              Guardar
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}

export default PersonForm;
