 type IProps = {
    padding: 'px-2' | 'px-4' | 'px-6'| 'px-8';
    text : String
}
 const ButtonComp = ({padding,text}:IProps)=>{
    return (
        <button
        className={`ease-in-out transition-all hover:scale-105  w-full lg:w-max ${padding} duration-300  h-max rounded-full text-center text-white py-2 text-sm  bg-gradient-to-r from-pink  to-indigo-600 `}>
            {text}
        </button>
    )
 }

 export default ButtonComp