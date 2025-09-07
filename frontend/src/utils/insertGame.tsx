type insertGameProps = {
    table: string;
    data: Record<string, any>;
}

export default async function insertGame({table, data}: insertGameProps) {
  const accessToken = getAccessToken();
  
  const reponse = await fetch(`/backend/game`, { 
    method: 'POST', 
    cache: 'no-store', 
    headers: { 
      'Content-Type': 'application/json' ,
      "Authorization": `Bearer ${accessToken}`,
    }, 
    body: JSON.stringify({ 
      table: table, 
      data: data
    }) 
  });

  const response = await reponse.json();
  console.log(response);
}

function getAccessToken() {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace(/^#/, ''));
    const accessToken = params.get('access_token');
    if(!accessToken){
        throw new Error("No access token found");
    }
    return accessToken;
}