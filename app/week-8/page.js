"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-eggshell text-black p-8 rounded-lg w-1/4 flex-rows text-center">
        <h1 className="mb-10 text-xl font-semibold">Week 8 Assignment</h1>
        <div className="m-2 text-lg font-semibold">
          {user ? (
            <div>
                <p>
              <Link className="underline" href="week-8\shopping-list">Shopping List</Link>
              </p>
              <button className="text-lg text-white bg-black rounded-lg p-2 mt-4 cursor:pointer" onClick={firebaseSignOut}>Sign Out</button>
            </div>
          ) : (
            <div>
              <button className="text-lg text-white bg-black rounded-lg p-2 cursor:pointer" onClick={gitHubSignIn}>Sign In with GitHub</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
