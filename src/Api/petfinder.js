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
  gender = "",
  color = "",
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
  if (gender) params.append("gender", gender);
  if (color) params.append("color", color);
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

export async function searchOrganizations({
  name = "",
  query = "",
  location = "",
  distance = 100,
  state = "",
  country = "",
  sort = "",
  page = 1,
  limit = 20,
}) {
  const token = await getAccessToken();

  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (query) params.append("query", query);
  if (location) params.append("location", location);
  if (location && distance) params.append("distance", distance);
  if (state) params.append("state", state);
  if (country) params.append("country", country);
  if (sort) params.append("sort", sort);

  params.append("page", page);
  params.append("limit", limit);

  try {
    const response = await fetch(
      `https://api.petfinder.com/v2/organizations?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch organizations");
    }

    const data = await response.json();
    return data.organizations;
  } catch (error) {
    console.error("Error fetching organizations:", error);
    throw error;
  }
}


export async function getOrganizationById(id) {
  if (!id) {
    throw new Error("Organization ID is required");
  }

  const token = await getAccessToken();

  const response = await fetch(
    `https://api.petfinder.com/v2/organizations/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch organization details");
  }

  const data = await response.json();
  return data.organization;
}
