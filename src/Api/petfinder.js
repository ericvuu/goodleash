const BASE_URL = "https://api.petfinder.com/v2";

let accessToken = null;
let tokenExpiry = null;

async function fetchAccessToken() {
  const response = await fetch(`${BASE_URL}/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_PETFINDER_API_KEY,
      client_secret: import.meta.env.VITE_PETFINDER_SECRET_KEY,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Petfinder access token");
  }

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return accessToken;
}

async function getAccessToken() {
  if (!accessToken || Date.now() >= tokenExpiry) {
    return fetchAccessToken();
  }
  return accessToken;
}

/** Search pets */
export async function searchPets({
  type = "dog",
  location = "",
  breed = "",
  page = 1,
}) {
  const token = await getAccessToken();

  const params = new URLSearchParams();
  params.append("type", type);
  if (location) params.append("location", location);
  if (breed) params.append("breed", breed);
  params.append("page", page);
  params.append("limit", 20);

  const response = await fetch(`${BASE_URL}/animals?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to search pets");
  }

  const data = await response.json();
  return data.animals;
}


export async function getBreeds(type = "dog") {
  const token = await getAccessToken();

  const response = await fetch(`${BASE_URL}/types/${type}/breeds`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch breeds");
  }

  const data = await response.json();
  return data.breeds;
}


export async function searchDogs({
  page = 1,
  type = "dog",
  breed = "",
  location = "",
  limit = 20,
}) {
  const token = await getAccessToken();

  const params = new URLSearchParams({
    type: type,
    page: page,
    limit: limit,
  });

  if (breed) params.append("breed", breed);
  if (location) params.append("location", location);

  const response = await fetch(`${BASE_URL}/animals?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to search dogs");
  }

  const data = await response.json();
  return data.animals;
}


export async function getAnimal(id) {
  const token = await getAccessToken();

  const response = await fetch(`${BASE_URL}/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch animal with ID ${id}`);
  }

  const data = await response.json();
  return data.animal;
}
