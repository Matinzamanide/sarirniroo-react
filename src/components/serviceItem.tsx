interface IChildren{
    children:React.ReactNode;
}
export default function ServiceItem({ children }:IChildren) {
    return (
      <li className="flex items-center gap-4 relative pl-10 before:absolute before:left-0 
                    before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 
                    before:bg-blue-400 before:rounded-full">
        {children}
      </li>
    );
  }