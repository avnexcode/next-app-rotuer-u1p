"use client"
import { useState } from "react"
import ButtonCount from "../elements/ButtonCount"
import TextLabel from "../elements/TextLabel"

type SetCountGroupProps = {
  children: React.ReactNode
}

const SetCountGroup: React.FC<SetCountGroupProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="flex flex-col gap-5 items-center p-2">
      <TextLabel>
        {children}: {count}
      </TextLabel>
      <div className="flex gap-5">
        <ButtonCount onClick={() => setCount(count - 1)}>Kurang</ButtonCount>
        <ButtonCount onClick={() => setCount(count + 1)}>Tambah</ButtonCount>
      </div>
    </div>
  )
}

export default SetCountGroup;
