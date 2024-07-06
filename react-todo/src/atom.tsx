import {atom, selector} from "recoil"

// type categories = "DONE" | "DOING" | "TO_DO"

export enum Categories {
    "TO_DO",
    "DOING",
    "DONE",
}

export interface IToDo{
    id:number;
    text:string;
    category: Categories
}

export const categoryState = atom<Categories>({
    key: "category",
    default:  Categories.TO_DO
})

export const toDoState = atom<IToDo[]>({ 
    key:"toDo",
    default: []
})


export const toDoSelector = selector({
    key:"toDoSelector",
    get:({get})=>{
        const toDos = get(toDoState)
        const category = get(categoryState)
       
       return toDos.filter((toDo) => toDo.category === category)
    }
})

export const minutesState = atom({
    key: "minutesState",
    default: 0
})

export const minutesSelector = selector({
    key: "minutesSelector",
    get:({get})=>{
        const minute = get(minutesState)
        
    }
})

