import React from "react";
import { utcToZonedTime } from "date-fns-tz";
import { addSeconds, formatISO } from "date-fns";

type Props = {
  timezone: string;
};

type DateTimeResponse = {
  datetime: string;
  timezone: string;
};

function Clock(props: Props) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState();
  const [data, setData] = React.useState<DateTimeResponse>();
  const [dateTime, setDateTime] = React.useState<string>();

  React.useEffect(() => {
    const url = `http://worldtimeapi.org/api/timezone/${props.timezone}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        // actualizamos estado
        setLoading(false);
      });
  }, [props.timezone]);

  React.useEffect(() => {
    const parsedDateTime: Date =
      data !== undefined ? new Date(data?.datetime) : new Date();
    const intervalId = setInterval(() => {
      const newDate = addSeconds(parsedDateTime, 1);
      const timezone = data?.timezone || "";
      const zonedDate = utcToZonedTime(newDate, timezone);
      setDateTime(formatISO(zonedDate));

      return () => {
        clearInterval(intervalId);
      };
    }, 1000);
  }, [data]);

  if (loading) {
    return <h2>Cargando datos ...</h2>;
  }

  if (error !== undefined) {
    return (
      <h2
        style={{
          color: "red",
        }}
      >
        Hubo un error al consultar la API
      </h2>
    );
  }

  return (
    <pre>
      <span>{data?.timezone}</span>
      <code>{dateTime}</code>
    </pre>
  );
}

export default Clock;
