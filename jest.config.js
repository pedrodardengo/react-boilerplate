module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/**/*.ts(x)?'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
	}
}
