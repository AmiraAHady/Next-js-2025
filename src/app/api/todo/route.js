import { dbConnection }from  "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";
import { validationSchema } from "./schema";


dbConnection()
//localhost:3000/api/todo
// crud todo
export async function GET(){
    try {
        const todos=await todoModel.find()
        return new Response(JSON.stringify({data:todos}),{status:200})
        
    } catch (error) {
        return new Response(JSON.stringify({message:`something went wrong:${error}`}))
    }
}
export async function POST(request){
    const todo=await request.json()

    try {

        const validation=validationSchema.safeParse(todo)

        // console.log(validation);
        if(!validation.success){
            return new Response(JSON.stringify({message:`${validation.error.errors}`}),{status:400})
        }
       const newTodo= await todoModel.create(todo)
       return new Response(JSON.stringify(newTodo),{status:201})
        
    } catch (error) {
        return new Response(JSON.stringify({message:`something went wrong:${error}`}))
        
    }

}