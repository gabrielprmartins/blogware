export default function API_GET(query, variables) {
  return {
    url: import.meta.env.VITE_API_URL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    },
  };
}
