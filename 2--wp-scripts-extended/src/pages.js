import { useState, useEffect } from '@wordpress/element';
import { TabLoading } from './app';
import apiFetch from '@wordpress/api-fetch';

const Pages = () => {
	const [ isLoading, setIsLoading ] = useState( true );
	const [ pages, setPages ] = useState( null );
	useEffect( () => {
		apiFetch( { path: '/wp/v2/pages' } ).then( ( result ) => {
			setPages( result );
			setIsLoading( false );
		} );
	}, [] );

	if ( isLoading ) {
		return <TabLoading />;
	}

	return (
		<div>
			<ul>
				{ pages.map( ( item ) => (
					<li key={ item.id }>{ item.title.rendered }</li>
				) ) }
			</ul>
		</div>
	);
};

export default Pages;