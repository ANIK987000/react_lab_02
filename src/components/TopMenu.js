import MenuItem from "./MenuItem";

const TopMenu=()=>{
    return(
        <div>
            <MenuItem url={""} title={"Home"}></MenuItem>
            <MenuItem url={"/CreateNews"} title={"CreateNews"}></MenuItem>
            <MenuItem url={"/NewsList"} title={"NewsList"}></MenuItem>
        </div>
        
    )
}
export default TopMenu;