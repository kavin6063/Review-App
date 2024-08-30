

const Header = ({text = "Review App"}) => {

const headerClass= ` mt-5 mb-4 container mx-auto flex flex-row item-center justify-center rounded-2xl border border-gray-200 w-[300px] bg-[#ffffff] shadow-xl`;
const headerText = `text-3xl font-bold text-center text-[#0c4a6e] p-5`
  return (
    <header className={headerClass}>
        <h1 className={headerText}>{text}</h1>
    </header>
  )
}

export default Header