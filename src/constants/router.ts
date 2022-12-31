export const ROUTER_PATH = {
	INDEX: '/',
	ABOUT: '/about',
	BLOGS: '/blogs'
} as const;

export type RouterPath = typeof ROUTER_PATH[keyof typeof ROUTER_PATH];
