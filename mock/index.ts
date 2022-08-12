import Mock from 'mockjs';
import projectList from './data/projectList';
import website from './data/website';

Mock.setup({
	timeout: '50-1000',
});

Mock.mock(/\/projectList/, 'get', () => {
	return {
		code: 0,
		result: projectList,
	};
});
Mock.mock(/\/website/, 'get', () => {
	return {
		code: 0,
		result: website,
	};
});
