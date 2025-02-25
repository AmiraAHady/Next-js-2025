

import { todoModel } from "@/app/_lib/models/todo";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {

  async function addNewTodo(formData){
    'use server'
   const title=formData.get('title')
   const status=formData.get('status')
   console.log(title,status);
    await todoModel.create({title,status})
    

    redirect('/todo')

  }

  

  return (
    <>
      <form action={addNewTodo}>
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <label htmlFor="inputtitle" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={`form-control
                    `}
                  id="inputtitle"
                  name="title"
                 
                />
               
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputstatus" class="col-sm-2 col-form-label">
                Status
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={`form-control `}
                  id="inputstatus"
                  name="status"
                 
                />
             
              </div>
              <button className="btn btn-success"> Add ToDo</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
