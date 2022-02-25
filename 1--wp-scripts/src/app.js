import './demo.scss';
import './demo.post.css';

// import apiFetch from '@wordpress/api-fetch';
// import { TabPanel, Spinner } from '@wordpress/components';
// import { useState, useEffect } from '@wordpress/element';
// import { __ } from '@wordpress/i18n';

const App = () => {
	return (
		<section>
			<strong>Hello Meetup 👋!</strong>
			<ul>
				<li>This widget is powered by @wordpress/scripts and React.</li>
				<li>
					This is the <em>default, low-config rig</em>.
				</li>
			</ul>
		</section>
	);
};

// const FancyApp = () => {
// 	return (
// 		<TabPanel
// 			className="fancy-app"
// 			tabs={ [
// 				{
// 					name: 'posts-tab',
// 					title: __( 'Posts' ),
// 					className: 'posts-tab',
// 					Component: PostsTab,
// 				},
// 				{
// 					name: 'pages-tab',
// 					title: __( 'Pages' ),
// 					className: 'pages-tab',
// 					Component: PagesTab,
// 				},
// 			] }
// 		>
// 			{ ( tab ) => <p>Selected tab: { tab.title }</p> }
// 			{ /* { ( tab ) =>  <tab.Component /> } */ }
// 		</TabPanel>
// 	);
// };

// const PostsTab = () => {
// 	const [ isLoading, setIsLoading ] = useState( true );
// 	const [ posts, setPosts ] = useState( null );

// 	useEffect( () => {
// 		apiFetch( { path: '/wp/v2/posts' } ).then( ( result ) => {
// 			setPosts( result );
// 			setIsLoading( false );
// 		} );
// 	}, [] );

// 	if ( isLoading ) {
// 		return <TabLoading />;
// 	}

// 	return (
// 		<div>
// 			<ul>
// 				{ posts.map( ( item ) => (
// 					<li key={ item.id }>{ item.title.rendered }</li>
// 				) ) }
// 			</ul>
// 		</div>
// 	);
// };

// const PagesTab = () => {
// 	const [ isLoading, setIsLoading ] = useState( true );
// 	const [ pages, setPages ] = useState( null );
// 	useEffect( () => {
// 		apiFetch( { path: '/wp/v2/pages' } ).then( ( result ) => {
// 			setPages( result );
// 			setIsLoading( false );
// 		} );
// 	}, [] );

// 	if ( isLoading ) {
// 		return <TabLoading />;
// 	}

// 	return (
// 		<div>
// 			<ul>
// 				{ pages.map( ( item ) => (
// 					<li key={ item.id }>{ item.title.rendered }</li>
// 				) ) }
// 			</ul>
// 		</div>
// 	);
// };

// const TabLoading = () => {
// 	return (
// 		<div
// 			style={ {
// 				display: 'flex',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				minHeight: '100px',
// 			} }
// 		>
// 			<Spinner />
// 		</div>
// 	);
// };

export default App;
