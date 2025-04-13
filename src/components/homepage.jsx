import Heading1 from "./Heading";

export default function HomePage() { // satu component harus satu function
    return(
        <div> 
            <Heading1 name="fajari" />
            <Heading2 />
            <Heading1 author='imami'/>
        </div>
    );
}