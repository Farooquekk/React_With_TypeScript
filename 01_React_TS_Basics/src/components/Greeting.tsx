type GreetingProps = {
    firstName:string;
    lastName:string;
};

const Greeting=({firstName,lastName}:GreetingProps)=>{

    return (
        <div>
            <h1>Hello {firstName} {lastName}👋</h1>
        </div>
    )
};
export default Greeting;