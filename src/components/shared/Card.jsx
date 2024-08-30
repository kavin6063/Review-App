

const Card = ({children , reverse = false}) => {
  const cardClass = `card bg-white text-[#333333] w-[70%] mx-auto p-[50px] rounded-[20px] mb-[20px] relative`
  return (
    <div className={`${cardClass} ${reverse && "reverse"}`}>
        { children }
    </div>
  )
}

export default Card



