import React, { useState } from "react"
import {useForm} from "react-hook-form"
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector, toDoState, Categories } from "../atom";
import ToDo from "./ToDo";








function TodoList(){
    // const toDos= useRecoilValue(toDoState)
    // console.log(toDos)
   const toDos = useRecoilValue(toDoSelector)
   const [category, setCategory] = useRecoilState(categoryState)
   const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value  as any)
   }
//    console.log(category)
   console.log(toDos)
    return (
    <div>
        <h1>ToDo List</h1>
        <hr/>
        <select onInput={onInput} value={category}>
            <option value = {Categories.TO_DO}>TO DO</option>
            <option value = {Categories.DOING}>DOING</option>
            <option value = {Categories.DONE}>DONE</option>
        </select>
        <CreateToDo></CreateToDo>
        {toDos?.map((toDo) => (<ToDo key={toDo.id} {...toDo}/>
    ))}
    
    </div>
    
    )
}
// type IFormData = {
  
//     Email: string;
//     FirstName: string;
//     LastName: string;
//     UserName: string;
//     PassWord: string;
//     PassWord1: string;
//     ExtraError?:string;
//     };

// function  TodoList(){
//     const {register,  handleSubmit, formState:{errors}, setError} = useForm<IFormData>({
//         defaultValues:{
//             Email: "@naver.com"
//         }
//     })
//     const onValid = (data:IFormData) => {
//         if(data.PassWord !== data.PassWord1){
//           setError("PassWord1", 
//             {message: "비밀번호와 다름 다시한번 확인 ㄱ"},
//             {shouldFocus: true}
//         )
//         }
      
//     }
//     console.log(errors)


   

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onValid)} style={{display: "flex", flexDirection:"column"}}>
//               <input {...register("Email", {
//                 required: "Email is required",
//                  pattern: {
//                     value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                     message:"네이버 이메일만 등록해"
//                  }, 
//                  })}  placeholder="Email "/>
//               <span style={{color: "red"}}>
//                 {errors.Email?.message as String}
//               </span>
//               <input {...register("FirstName", {
//                 required:"입력잘해라", 
//                 validate:{
//                     nemo: (value) => value.includes("nemo") ? "nemo빼고 다시써" : true,
//                     nomemo: (value) => value.includes("nomemo") ? "nomemo 빼고 다시써" : true
//                 }})}  placeholder="FirstName "/>
//               <span style={{color: "red"}}>
//                 {errors.FirstName?.message as String}
//               </span>
//               <input {...register("LastName", {required:"입력잘해라"})}  placeholder="LastName "/>
//               <span style={{color: "red"}}>
//                 {errors.LastName?.message as String}
//               </span>
//               <input {...register("UserName", {required:"입력잘해라", minLength: 10})}  placeholder="UserName "/>
//               <span style={{color: "red"}}>
//                 {errors.UserName?.message as String}
//               </span>
//               <input {...register("PassWord", {required:"입력잘해라", minLength: 5})}  placeholder="PassWord "/>
//               <span style={{color: "red"}}>
//                 {errors.PassWord?.message as String}
//               </span>
//               <input {...register("PassWord1", {required:"password is required", minLength: {
//                 value: 5,
//                 message: "5글자 이상 입력해라 "
//               }})}  placeholder="PassWord1 "/>
//                <span style={{color: "red"}}>
//                 {errors.PassWord1?.message as String}
//               </span>
//               <button>Add</button>
//               <span>{errors?.ExtraError?.message}</span>
              
//             </form>
//         </div>
//     )
// }

export default TodoList

// onchange 함수 onsubmit 함수 form을 관리하기위한 함수임 
// 유효성검사도 해야함 
// 꽤나 귀찮은 작업임 근데 한번에 해결할수 있는 라이브러리가있음 --> react-hook-form
// react-hook-form
// onChange 기능 blur 기능 , watch를 통한 모든 값 확인 가능 
// onsubmit 부분 handleSubmit()으로 대체  handleSubmit은 인자를 두개 받음 1. 유효할때 값 , 2. 유효하지않을때 
// required는 html에서도 사용할수있지만 사용자가 브라우저를 킨다음 지울수도있다 따라서 자바스크립트에서 보호되게 사용할 필요성이있다
// 비어있는곳에 focus를 자동으로 해주기도함 , 유효성검사도 minLength: 10 이런식으로 만 해줘도 알아서 유효성검사를 해줄수있음 
// formState 는 무슨 에러인지 알려줌 message를 나타낼수도있음

// register, handleSubmit , fromState --- react-hook-form 편리하게 이용할수있음 
// register함수를 ...register("text", ) 등록할수있음  valid, onChnage, blur 
// hnadleSubmit으로 onSubmit 대체 가능
// formState로 에러를 관리할수있음 어떤에러가있는지 그에러안에서 어떤 메시지를 보내줄지 알려줌
// 옵셔널체이닝
// validate 유효성검사 포함하는지 아닌지 확인 및 메시지ㅣ 할당가능
// 추가적인 메시지 가능 
// 따로 값끼리 비교및 해당하는 메시지가능
