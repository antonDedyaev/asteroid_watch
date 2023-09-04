import nextJest from 'next/jest.js'
// import { pathsToModuleNameMapper } from 'ts-jest'
// import { compilerOptions } from './tsconfig.json';

 
const createJestConfig = nextJest({
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // modulePaths: ["<rootDir>/"],
  // moduleNameMapper: {'^@/(.*)$': '<rootDir>/$1'},
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)