import { Formik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  identification: yup
    .string()
    .required("Requerido")
    .matches(/^[0-9]{6-10}$/, "Identificación inválida"),
  name: yup
    .string()
    .required("Requerido")
    .matches(/^[a-zA-Z\s:]{10,64}$/, "Nombre inválido"),
});

function PersonForm() {
  const handleSubmit = (e: any) => {
    console.log("Submit", { e });
  };

  return (
    <Formik
      initialValues={{
        identification: "",
        name: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <form onSubmit={formikProps.handleSubmit}>
            <TextField
              name="identification"
              label="Identificación"
              variant="outlined"
              value={formikProps.values.identification}
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              error={
                formikProps.errors.identification !== undefined &&
                formikProps.touched.identification
              }
              helperText={formikProps.errors.identification || ""}
            />

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
