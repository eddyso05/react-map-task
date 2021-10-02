import React from "react";
import { SnackbarProvider } from "notistack";

export const Snackbar = (children: React.ReactNode) => {
  return <SnackbarProvider children={children} />;
};

export default Snackbar;
