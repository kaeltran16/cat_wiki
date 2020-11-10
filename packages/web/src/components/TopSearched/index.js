import React, { Suspense } from 'react';
import { Layout, Spinner } from '../Commons';
import Top10Search from './Top10Search';
import { createResource, topSearchedCat } from '../../services';

const TopSearched = () => {
	const resource = createResource(topSearchedCat(10));

	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Top10Search resource={resource} />
			</Suspense>
		</Layout>
	);
};

export default TopSearched;
