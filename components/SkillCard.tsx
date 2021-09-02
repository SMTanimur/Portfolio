import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

const SkillCard: FunctionComponent<{data:ISkill}> = ({data:{Icon,level,name}}) => {
  return (
    <div className="text-white bg-gray-300 my-2 rounded-full" >
      <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-600"
      style={{width:level}}>
      <Icon className="mr-3"/>
      {name}
      </div>
    
    </div>
  )
}

export default SkillCard
