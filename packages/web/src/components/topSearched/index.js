import React, { Suspense } from 'react';
import Spinner from '../Commons/Spinner';
import Layout from '../layout';
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
