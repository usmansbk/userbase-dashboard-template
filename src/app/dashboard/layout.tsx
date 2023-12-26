import type { Metadata } from "next";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Userbase Admin Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
