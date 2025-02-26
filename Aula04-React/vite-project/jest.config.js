export default {
  preset: "ts-jest", 
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tex?$":[
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
        },
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"] 
}