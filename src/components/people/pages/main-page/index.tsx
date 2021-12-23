import React from "react";
import Table from "../../table";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type LinkProps = {
  to: string;
};
const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link ref={ref} {...props} role={undefined} />
);

function PeopleMainPage() {
  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Lista de personas
      </Typography>
      <Button component={LinkBehavior} to="create" variant="contained">
        Crear Persona
      </Button>
      <Table />
    </>
  );
}

export default PeopleMainPage;
