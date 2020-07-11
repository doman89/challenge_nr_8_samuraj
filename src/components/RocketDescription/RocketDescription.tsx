import React from 'react';
import { RocketViewModel } from '../models/RocketViewModel';

type RocketDescriptionProps = Pick<RocketViewModel, 'description'>;

export const RocketDescription: React.FC<RocketDescriptionProps> = ({description}) => (
	<p>
		{description}
	</p>
);