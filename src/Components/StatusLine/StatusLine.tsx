
export default function StatusLine({columns, chore})
{
    columns = [
        {
            title: "col1",
            id: 1, 
        },
        {
            title: "col2",
            id: 2, 
        },
        {
            title: "col3",
            id: 3, 
        },
    ];

    // const currentStatus = chore.status;
    const currentStatus = {
        title: "new",
        id: 1,
    };

    return <>
    <div className="w-72 h-6">
        
        </div>   
    </>
}