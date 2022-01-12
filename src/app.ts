import express, { Application, Request, Response, NextFunction } from 'express'
const app: Application = express()

interface User {
    Name: string
    Age: number
    IsActive: boolean
}

interface DataTypes {
    Object: User
    Array: User[]
}

const getDataOfAllDataType = (dataTypesExample: DataTypes): DataTypes => {
    return dataTypesExample
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const Object = { Name: "Kiran Gurung", Age: 27, IsActive: true };
    const Array = [Object, { Name: "Dolma Sherpa", Age: 23, IsActive: false }]
    const ExampleData = {
        Object,
        Array
    }
    const ExampleDataResponse = getDataOfAllDataType(ExampleData)
    res.send(ExampleDataResponse)
})

const port = 5000
app.listen(port, () => console.log("listening to port", port))