import React from 'react';
import bemCssModules from 'bem-css-modules';
import { default as RocketCountryStyles } from './RocketCountry.module.scss';
import { Rocket } from '../models/Rocket';

type RocketCountryProps = Pick<Rocket, 'country'>;

const style = bemCssModules(RocketCountryStyles);

export const RocketCountry: React.FC<RocketCountryProps> = ({country}) => <p className={style()}>{country}</p>