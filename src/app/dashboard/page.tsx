import { redirect } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
  redirect('/dashboard/home');

  return <div>Dashboard</div>;
};

export default Dashboard;
