// Direct API calls for authentication
const AUTH_API = "http://localhost:8000/principal";

export async function login(payload) {
  try {
    const response = await fetch(`${AUTH_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Login failed");
    return await response.json();
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}

export async function forgetPassword(email) {
  try {
    const response = await fetch(`${AUTH_API}/forget_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ principal_email: email }),
    });

    if (!response.ok) throw new Error("Forget password failed");
    return await response.json();
  } catch (error) {
    console.error("Forget Password Error:", error);
    throw error;
  }
}

export async function resetPassword(payload) {
  try {
    const response = await fetch(`${AUTH_API}/reset_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // { token, new_password }
    });

    if (!response.ok) throw new Error("Reset password failed");
    return await response.json();
  } catch (error) {
    console.error("Reset Password Error:", error);
    throw error;
  }
}
