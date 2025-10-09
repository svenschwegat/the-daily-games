import { addToast } from "@heroui/react";

type insertGameProps = {
  table: string;
  data: Record<string, FormDataEntryValue>;
}

export default async function insertGame({ table, data }: insertGameProps) {
  const accessToken = getAccessToken();
  if (!accessToken) {
    addToast({
      title: 'Failed to update Games',
      description: "You are not authenticated. Please try logging in again.",
      color: 'danger',
      timeout: 7000
    });
    return;
  }

  const response = await fetch(`/backend/game`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      table: table,
      data: data
    })
  });

  if (response.ok) {
    const content = await response.json();

    addToast({
      title: 'Data inserted succesfully',
      description: `Added new game ${content[0].name} with id ${content[0].id}`,
      color: 'success',
      timeout: 7000
    });
  } else {
    addToast({
      title: 'Failed to insert Data to Game',
      description: await response.text(),
      color: 'danger',
      timeout: 7000
    });
  }
}

function getAccessToken() {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace(/^#/, ''));
  const accessToken = params.get('access_token');
  return accessToken;
}