const getJSONData = async () => {
  binId = '65d3803c1f5677401f3177a5'
  apiKey = '$2a$10$yatp0mgSRIu3KgN1sWPFLeIH.cI5csOI5Jv.gJvOfNHYrE3A0xO2.'; 
  const url = `https://api.jsonbin.io/v3/b/${binId}?meta=false`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Master-Key': apiKey,
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error("Cannot fetch data");
  }

  // Get the JSON string directly from the response
  const data = await response.text();

  // This works
  return data;
};
