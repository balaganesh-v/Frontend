export async function loginUser(role, credentials) {
  // Example: call Flask/Express backend
  const res = await fetch(`/api/login/${role}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
}
