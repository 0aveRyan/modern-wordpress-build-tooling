import { useState, useEffect } from '@wordpress/element';
import { TabLoading } from './app';
import apiFetch from '@wordpress/api-fetch';

const Posts = () => {
	const [ isLoading, setIsLoading ] = useState( true );
	const [ posts, setPosts ] = useState( null );

	useEffect( () => {
		apiFetch( { path: '/wp/v2/posts' } ).then( ( result ) => {
			setPosts( result );
			setIsLoading( false );
		} );
	}, [] );

	if ( isLoading ) {
		return <TabLoading />;
	}

	return (
		<div>
			<ul>
				{ posts.map( ( item ) => (
					<li key={ item.id }>{ item.title.rendered }</li>
				) ) }
			</ul>
		</div>
	);
};

export default Posts;