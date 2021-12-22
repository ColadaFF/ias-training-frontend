import React from "react";
import usePromise from "../../../shared/use-promise";
import personsClient from "../api";

function PeopleTable() {
  const clientResponse = usePromise(() => personsClient.listPersons());

  return (
    <pre>
      <code>{JSON.stringify(clientResponse, null, 3)}</code>
    </pre>
  );
}

export default PeopleTable;
