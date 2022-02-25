import './demo.scss';
import './demo.post.css';

import { Spinner, TabPanel } from '@wordpress/components';
import { Suspense, lazy } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

const PostsContent = lazy(() => import('./posts'));
const PagesContent = lazy(() => import('./pages'));

const PostsTab = () => <Suspense fallback={<div>Loading Posts Tab...</div>}><PostsContent /></Suspense>;
const PagesTab = () => <Suspense fallback={<div>Loading Pages Tab...</div>}><PagesContent /></Suspense>

const FancyApp = () => {
	return (
		<TabPanel
			className="fancy-app"
			tabs={ [
				{
					name: 'posts-tab',
					title: __( 'Posts' ),
					className: 'posts-tab',
					Component: PostsTab,
				},
				{
					name: 'pages-tab',
					title: __( 'Pages' ),
					className: 'pages-tab',
					Component: PagesTab,
				},
			] }
		>
			{/* { ( tab ) => <p>Selected tab: { tab.title }</p> } */}
			{/* { ( tab ) =>  <tab.Component /> } */}
		</TabPanel>
	);
};


const TabLoading = () => {
	return (
		<div
			style={ {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100px',
			} }
		>
			<Spinner />
		</div>
	);
};

export default FancyApp;

export {
	TabLoading
}
