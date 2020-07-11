import React from 'react';
import bemCssModules from 'bem-css-modules';
import { default as CardImageStyles } from './CardImage.module.scss';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';

type CardImageProps = Pick<LaunchPastViewModel, 'image'>;

const style = bemCssModules(CardImageStyles);

export const CardImage: React.FC<CardImageProps> = ({image}) => (
	<div className={style()}>
		<img alt="" className={style('image')} src={image} />
	</div>	
);