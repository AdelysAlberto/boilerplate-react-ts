import React from 'react';
import LayoutDefault from '../../../layouts/default';
import styles from './styles/Login.module.scss';

export interface LoginInterface { }

const Login: React.FC = () => {
	return (
		<LayoutDefault>
			<div className={styles.Login}>Login</div>
		</LayoutDefault>
	)
};

export default Login;

