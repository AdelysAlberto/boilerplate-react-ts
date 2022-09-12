import React from 'react';
import styles from './styles/Dashboard.module.scss';

export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
	return <div className={styles.Dashboard}>Dashboard</div>;
};

export default Dashboard;

