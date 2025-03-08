import CommentBox from "../../Comments/CommentBox";
export default function CommentTab()
{
    return <>
    <div className="flex flex-col h-full w-full overflow-hidden border-3 border-white">
    <CommentBox conversation={[]}/>
    </div>
    </>
}