import React from "react";

const Layout = ({ childern }: { childern: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {childern}
    </main>
  );
};

export default Layout;
