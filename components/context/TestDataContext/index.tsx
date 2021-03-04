import { createContext, FC, useContext } from 'react'
import { testData } from './data'

const TestDataContext = createContext({})

const TestDataProvider: FC = ({ children }) => {
  return <TestDataContext.Provider value={testData}>{children}</TestDataContext.Provider>
}

const useTestData = (key) => {
  return useContext(TestDataContext)[key]
}

export { TestDataProvider, useTestData }