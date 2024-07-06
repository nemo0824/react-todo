import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atom";

function ToDo({text,category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (newCategory:IToDo["category"]) =>{ 
        setToDos((oldToDos) => {
           const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
        //    console.log(targetIndex)
           const oldToDo = oldToDos[targetIndex];
           const newToDo ={text: text, category:newCategory ,id: id }
        //    console.log(oldToDo, newToDo)
       let arrFornt = oldToDos.slice(0,targetIndex)
       let arrBack = oldToDos.slice(targetIndex+1)
       const toDos = [...arrFornt, newToDo, ...arrBack]
            return toDos
        })
    }
    return (
        <li>
            {text} 
            {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>ToDo</button>}
            {/* 여기서 onClick에서 바로 담아주지않는이유 인자를 못가져가기때문에 함수형으로 ()=> 인자를 넘김 */}
            {category !== Categories.DOING&&<button onClick={() => onClick(Categories.DOING)}>Doing</button>}
            {category !== Categories.DONE &&<button onClick={() => onClick(Categories.DONE)}>Done</button>}
        
        </li>
    )

}


export default ToDo;