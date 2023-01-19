import React from "react";
import { signIn, signOut } from "next-auth/react";
import { api } from "utils/api";
import { Button } from "@acme/ui";

const AuthStatus: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();

  const { data: secretMessage } = api.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: !!session?.user },
  );

  return (
    <div className="mt-2 flex w-full flex-col items-center">
      {session?.user && (
        <p className="text-center text-2xl">
          {session && (
            <span>
              Logged in as{" "}
              <span className="text-orange-700 underline">
                {session?.user?.name}
              </span>
            </span>
          )}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
      )}
      <Button onClick={session ? () => void signOut() : () => void signIn()}>
        {session ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};

export default AuthStatus;
