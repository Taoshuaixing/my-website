import Mock from 'mockjs';
import projectList from './data/projectList';

Mock.setup({
	timeout: '50-1000',
});

Mock.mock(/\/projectList/, 'get', () => {
	return {
		code: 0,
		result: projectList,
	};
});
