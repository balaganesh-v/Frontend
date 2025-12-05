import React, { useState } from "react";
import { PrincipalProvider } from "../../context/PrincipalContext";

import NavBarPrincipal from "../../components/layout/NavBarPrincipal";
import SidebarPrincipal from "../../components/layout/SidebarPrincipal";

import PrincipalDashboardContent from "../../components/content/PrincipalDashboardContent";
// (your current content file, unchanged)

export default function PrincipalDashboard() {
    const [open, setOpen] = useState(false);

    return (
        <PrincipalProvider>
            <div className="flex">

                {/* Top Navbar */}
                <NavBarPrincipal onMenuClick={() => setOpen(!open)} />

                {/* Sidebar */}
                <SidebarPrincipal open={open} />

                {/* Main Content */}
                <main className="flex-1 min-h-screen bg-gray-100 mt-16 md:ml-64 p-6 transition-all">
                    <PrincipalDashboardContent />
                </main>

            </div>
        </PrincipalProvider>
    );
}
