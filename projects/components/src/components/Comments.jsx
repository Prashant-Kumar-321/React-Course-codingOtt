import {useState, useEffect} from 'react'; 

const Loading = ()=>{
    return (
        <p>Loading ...</p>
    )
}


const Comments = () => {
    const [commentsFetched, setCommentFetched] = useState(false);
    const [showComments, setShowComments] = useState(false)

    const comments = [
        {id:"1", body:"comment1"},
        {id:"2", body:"comment2"},
        {id:"3", body:"comment3"},
        {id:"4", body:"comment4"}
    ]


    const fetchComments = ()=>{
        setShowComments(prev=>!prev);

        console.log('fetch comments from the server');

        // Fetch comments from server if they are not fetched
        if (!commentsFetched){
            setTimeout(()=>{
                setCommentFetched(true);
            }, 2000);
        }
    }

    return (
        <div>
            <p style={{cursor: 'pointer'}} onClick={fetchComments}>Show Comments</p>
            {
                showComments && 
                    <div>
                        {   
                            commentsFetched ?
                                comments.map((comment, index)=>(
                                    <p key={comment.id} style={{
                                        padding: 4,
                                        backgroundColor: (index+1) % 2 ? "gray": "white",
                                    }}>{comment.body}</p>
                                ))
                            :
                                <Loading />
                        }
                    </div>
            }
            
        </div>
    )
}

export default Comments; 