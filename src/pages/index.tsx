
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import AddAnArticle from "~/component/AddAnArticle";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "~/component/Sidebar";
import { useState } from "react";
import React from "react";
import { ArticleDialog } from "~/component/Dialog";
import Router, { useRouter } from "next/router";



export default function Home() {
  const user = useUser()
const router = useRouter()
  function onClose() {
    router.push("/")
  
    console.log("Modal has closed")
}

function onOk() {
     router.push("/")
    console.log("Ok was clicked")
}

const handleOpenArticleDialog = () => {
  router.push(`${Router.pathname}?addArticles=y`)
};
  return (
  

    <>

     
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 container mx-auto flex flex-col gap-12 p-4">
        <button onClick={handleOpenArticleDialog}>Ajouter un article</button>
       { user.isSignedIn &&  <ArticleDialog title="ajouter un article" onClose={onClose} onOk={onOk}>

         </ArticleDialog>}
         <SignOutButton/>
{!user.isSignedIn && <SignInButton/>}
          <div className="grid grid-cols-3 items-center justify-center gap-4">
            
          </div>
        </main>
      </div>
    </>
   
  );
}



 

