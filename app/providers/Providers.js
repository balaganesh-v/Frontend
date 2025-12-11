"use client"
import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { PrincipalProvider } from "../context/PrincipalContext";

// Compose application-level providers here. Add more providers as needed.
export default function Providers({ children }) {
  return (
    <AuthProvider>
      <PrincipalProvider>{children}</PrincipalProvider>
    </AuthProvider>
  );
}
