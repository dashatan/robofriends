type ScrollProps ={
    children: React.ReactNode
}

const Scroll = ({children}: ScrollProps)=>{
    return <div className="scrollable">{children}</div>;
};

export default Scroll;