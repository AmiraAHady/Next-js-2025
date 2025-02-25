"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";

const Page = () => {
  const [todo, setTodo] = useState({
    title: "",
    status: "",
  });
  const [errors, setErrors] = useState({
    titleError: "",
    statusError: "",
  });

  const router=useRouter()

  const handelChange=async(evt)=>{
    evt.preventDefault()
    if(evt.target.name=="title"){
        setTodo({...todo,title:evt.target.value})
        setErrors({...errors,titleError:(evt.target.value.length==0?"title is Required":"")})
    }else if(evt.target.name=="status"){
        setTodo({...todo,status:evt.target.value})
    }
    //
    // setTodo({...todo,[evt.target.name]:evt.target.value})
  }

  const handelSubmit=async(evt)=>{
    
    evt.preventDefault()
    if(!errors.titleError&&!errors.statusError){
       
        try {
            const res=await fetch('http://localhost:3000/api/todo',{
                method:"POST",
                body:JSON.stringify(todo)
            })
            if(res.status==201){
              router.push('/todo')
            }

        } catch (error) {
            console.log(error);
        }
    }
  }

  return (
    <>
      <form onSubmit={(e)=>handelSubmit(e)}>
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <label htmlFor="inputtitle" class="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={`form-control ${
                    errors.titleError ? "is-invalid" : "is-valid"
                  }`}
                  id="inputtitle"
                  name="title"
                  value={todo.title}
                  onChange={(e) => {
                    handelChange(e);
                  }}
                />
                <p className="text-danger"> {errors.titleError}</p>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputstatus" class="col-sm-2 col-form-label">
                Status
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  className={`form-control ${
                    errors.statusError ? "is-invalid" : "is-valid"
                  }`}
                  id="inputstatus"
                  name="status"
                  value={todo.status}
                  onChange={(e) => {
                    handelChange(e);
                  }}
                />
                <p className="text-danger"> {errors.statusError}</p>
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
