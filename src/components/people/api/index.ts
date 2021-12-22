import { Person } from "../types";

const BASE_URL = "http://localhost:8080/persons";

async function listPersons(): Promise<Person[]> {
  const response = await fetch(BASE_URL, {
    method: "GET",
  });

  return await response.json();
}

async function getPersonById(personId: string): Promise<Person> {
  const response = await fetch(`${BASE_URL}/${personId}`, {
    method: "GET",
  });

  return await response.json();
}

type CreatePersonRequest = {
  name: string;
  birthday: Date | null;
};
type CreatePersonResponse = {
  person: Person;
};
async function createPerson(
  request: CreatePersonRequest
): Promise<CreatePersonResponse> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

const client = {
  listPersons,
  getPersonById,
  createPerson,
};

export default client;
