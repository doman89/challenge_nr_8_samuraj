import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_ROCKET } from '../queries/getRocket';
import { Spinner } from '../components/Spinner/Spinner';
import { Rocket } from '../components/models/Rocket';
import { RocketName } from '../components/RocketName/RocketName';
import { RocketCountry } from '../components/RocketCountry/RocketCountry';
import { RocketDescription } from '../components/RocketDescription/RocketDescription';

interface GraphQlResult {
	rocket: Required<Rocket>;
}

export const RocketDetail: React.FC = () => {
	const { id } = useParams();

	const {error, loading, data } = useQuery<GraphQlResult>(GET_ROCKET, {
		variables: { id }
	});

	if (error) {
		return <p>Oops, something went wrong</p>;
	}

	if (loading) {
		return <Spinner />
	}

	if (!data?.rocket) {
		return <p>There is not any data to display</p>;
	}

	return (
		<div>
			<RocketName {...data.rocket} />
			<RocketCountry {...data.rocket} />
			<RocketDescription {...data.rocket} />
		</div>
	)
}