import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from 'react';
import { api } from "~/utils/api";
import AddACollection from "./CollectionForm";
import { useRouter } from "next/router";
import { CollectionDialog } from "~/component/Dialog";


const Sidebar: React.FC = () => {

  
  const user = useUser();
  const router = useRouter()

  
  function onClose() {
    router.push("/")
  
    console.log("Modal has closed")
}

function onOk() {
     router.push("/")
    console.log("Ok was clicked")
}
  
  const handleOpenCollectionDialog = () => {
    router.push(`${router.pathname}?addACollection=y`)
    
   
  };
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
    <div className="flex flex-col items-center">
    
      {user.isSignedIn && (
        <>
          <UserButton />
          <button onClick={handleOpenCollectionDialog}>Ajouter une collection</button>
          <CollectionDialog title="créer une nouvelle collection" onClose={onClose} onOk={onOk}>
            <AddACollection />
          </CollectionDialog>

        </>
      )}

      {!user.isSignedIn && (
        <li>
          <SignInButton>
            <span className="cursor-pointer text-white hover:text-blue-500">
              Sign In
            </span>
          </SignInButton>
        </li>
      )}
    </div>
  </aside>
  );
}

export default Sidebar;
