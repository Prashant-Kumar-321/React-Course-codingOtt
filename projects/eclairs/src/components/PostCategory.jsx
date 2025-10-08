import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PostCategory = () => {
	const { category } = useParams();
	const navigate = useNavigate();

	const POSTCATEGORIES = ["honey", "animal", "people", "nature", "city"]; 


	useEffect(()=>{
		if (!POSTCATEGORIES.includes(category)) {
			navigate("*", { replace: true });

			console.log('navigate code executed');
		}
	}, []); 

	return (
		<div>
			<h1>Here is your {category} posts</h1>
		</div>
	)
}

export default PostCategory; 
