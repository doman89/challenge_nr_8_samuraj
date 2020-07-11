import React from 'react';
import bemCssModules from 'bem-css-modules';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';
import { LaunchPast } from '../models/LaunchPast';
import { CardContent } from '../CardContent/CardContent';
import { CardImage } from '../CardImage/CardImage';
import { default as LaunchCardStyles } from './LaunchCard.module.scss';

const style = bemCssModules(LaunchCardStyles);

export const LaunchCard: React.FC<LaunchPast> = props => {
	const data = new LaunchPastViewModel(props);

	return (
		<article className={style()}>
			<CardImage {...data} />
			<CardContent {...data} />
		</article>
	)
}