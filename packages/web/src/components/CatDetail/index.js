import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout';
import {
	catDetailByName,
	catImgByName,
	createResource,
	storeSearchedCat
} from '../../services';
import Detail from './Detail';
import MoreImage from './MoreImages';
import Spinner from '../Commons/Spinner';

const CatDetail = () => {
	const { name } = useParams();
	const detailResource = createResource(catDetailByName(name));
	const imgResource = createResource(catImgByName(name));

	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Detail resource={detailResource} storeSearchedCat={storeSearchedCat} />
				<MoreImage resource={imgResource} />
			</Suspense>
		</Layout>
	);
};

export default CatDetail;
