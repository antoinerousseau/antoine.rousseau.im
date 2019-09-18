import React, {createContext, useContext} from 'react'

export const TagContext = createContext()

const Tag = ({name}) => {
  const {tag, setTag} = useContext(TagContext)

  const handleClick = () => {
    setTag(tag === name ? null : name)
  }

  return (
    <button className={'tag' + (tag === name ? ' active' : '')} onClick={handleClick}>
      {name}
    </button>
  )
}

export default Tag
