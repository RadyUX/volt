import { useEffect, useRef } from "react"
import {useSearchParams} from 'next/navigation'
import AddAnArticle from "~/component/ArticleForm";

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
}



export function ArticleDialog({ onClose, onOk}: Props) {

    const searchParams = useSearchParams();

    const articleDialogRef = useRef<null | HTMLDialogElement>(null);
    
    

//
const showDialogArticle = searchParams.get('addArticles');



useEffect(() => {
    // Cette logique va afficher le modal si l'un des deux paramètres est défini à 'y'
    if (showDialogArticle === 'y') {
        articleDialogRef.current?.showModal();
    } else {
        articleDialogRef.current?.close();
    }

  
}, [showDialogArticle]);


const closeDialog = () => {
    articleDialogRef.current?.close();
    onClose()
    };

    const clicOk = () => {
        onOk();
        closeDialog();
    }

const dialog: JSX.Element | null = 
    (showDialogArticle === "y")
    ? (
        <dialog ref={articleDialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
   <button
                    onClick={closeDialog}
                    className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                >x</button> <AddAnArticle/>
    </dialog>
       
    ) : null;
    
 
 
    return dialog

    }


  export  const CollectionDialog = ({title, onClose, onOk, children}: Props) =>{
        const searchParams = useSearchParams();

  

        const collectionDialogRef = useRef<null | HTMLDialogElement>(null);

        const showDialogCollection = searchParams.get('addACollection');

        
        useEffect(() => {

            if (showDialogCollection === 'y') {
                collectionDialogRef.current?.showModal();
            } else {
                collectionDialogRef.current?.close();
            }
        }, [showDialogCollection]);


        const closeDialog = () => {
            collectionDialogRef.current?.close()
            onClose()
            };
        
            const clicOk = () => {
                onOk();
                closeDialog();
            }
 const dialog: JSX.Element | null = 
    (showDialogCollection === "y")
    ? (
        <dialog ref={collectionDialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
        <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
            <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                <h1 className="text-2xl">{title}</h1>
                <button
                    onClick={closeDialog}
                    className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                >x</button>
            </div>
            <div className="px-5 pb-6">
                {children}
                <div className="flex flex-row justify-end mt-2">
                    <button
                        onClick={clicOk}
                        className="bg-green-500 py-1 px-2 rounded border-none"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    </dialog>
       
    ) : null;

  return dialog
    }



