import { dbConnection } from "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";

dbConnection()
export async function GET(request,{params}){
    console.log(params.id);
    const todo=await todoModel.findById(params.id)
    
    return new Response(JSON.stringify(todo))

}