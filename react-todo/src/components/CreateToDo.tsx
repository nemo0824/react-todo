import {useForm} from "react-hook-form"
import { useRecoilState, useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IFrom {
    toDo:string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState)
    const {register, handleSubmit, setValue} = useForm<IFrom>();
    const handleValid = ({toDo}:IFrom) =>{
        setValue("toDo", "")
        setToDos(oldtoDos => [{text: toDo, category:"TO_DO", id:Date.now()},...oldtoDos])
    };
    return (

    <form onSubmit={handleSubmit(handleValid)}> 
            <input {...register("toDo",{
                required: "toDo를 입력해주세요 ",
            })} placeholder="write a to do "/>
            <button>Add</button>
        </form>
    )
        

}

export default CreateToDo