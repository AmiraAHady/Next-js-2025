import { dbConnection }from  "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";


dbConnection()

// crud todo
export async function GET(){
    try {
        const todos=await todoModel.find()
        return new Response(JSON.stringify({data:todos}),{status:200})
        
    } catch (error) {
        return new Response(JSON.stringify({message:`something went wrong:${error}`}))
    }
}