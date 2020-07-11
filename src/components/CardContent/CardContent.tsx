import React from 'react';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';
import { MissionName } from '../MissionName/MissionName';
import { LaunchDate } from '../LaunchDate/LaunchDate';
import { RocketViewModel } from '../models/RocketViewModel';
import { RocketCountry } from '../RocketCountry/RocketCountry';
import { RocketName } from '../RocketName/RocketName';
// import bemCssModules from 'bem-css-modules';
// import { default as CardContentStyles } from './CardContent.module.scss';

// const style = bemCssModule(CardContentStyles);

type CardContentProps = Omit<LaunchPastViewModel, 'image' | 'id'>;

export const CardContent: React.FC<CardContentProps> = props => {
	const rocket = new RocketViewModel(props.rocket);

	return (
		<div>
			<MissionName {...props} />
			<LaunchDate {...props} />
			<RocketName {...rocket} />
			<RocketCountry {...rocket} />
		</div>
	)
};