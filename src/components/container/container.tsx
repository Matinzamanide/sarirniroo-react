interface IContainer{
    children:React.ReactNode
}
const Container :React.FC<IContainer> = ({children}) => {
    return ( 
        <div className="w-[90%] mx-auto">
            {children}
        </div>
     );
}
 
export default Container;