import { useRecoilState } from "recoil"
import { minutesState } from "../atom"
import React from "react"

function AtomSet(){
    const [minutes, setMinutes] = useRecoilState(minutesState)
    const minutesOnchange = (event:React.FormEvent<HTMLInputElement>)=>{
        setMinutes(+event.currentTarget.value);
    }
    return (
        <div>
            <input type="number" value={minutes} onChange={minutesOnchange}/>
            <input type="number"/>
        </div>
    )
}