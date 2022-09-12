import React from 'react';
import { Link } from 'react-router-dom';
import LayoutDefault from '../../../layouts/default';
import styles from './styles/Home.module.scss';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	return (
		<LayoutDefault>
			<div className={`${styles.Home} mb-4`}>is Home</div>
			<Link className='btn btn-primary' to={'login'}>Go to Login</Link>
		</LayoutDefault>
	);
};

export default Home;

