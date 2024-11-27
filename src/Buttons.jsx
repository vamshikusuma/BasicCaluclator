
export default function Buttons({handleElement,result,clear}){

return(
    <>
    <div >
        <div className="row">
        <button onClick={()=>{
           handleElement("7")
            }}>7</button>
            <button onClick={()=>{
            handleElement("8")}}>8</button>
            <button  onClick={()=>{
                handleElement("9")
            }} >9</button>
            <button onClick={()=>{
                handleElement("/")
            }}>/</button>
        </div>
        <div className="row">
            <button onClick={()=>{
                handleElement("4")
            }}>4</button>
            <button onClick={()=>{
                handleElement("5")
            }}>5</button>
            <button onClick={()=>{
                handleElement("6")
            }}>6</button>
            <button onClick={()=>{
                handleElement("*")
            }} >*</button>
        </div>
        <div className="row">
            <button onClick={()=>{
                handleElement("1")
            }}>1</button>
            <button onClick={()=>{
                handleElement("2")
            }}>2</button>
            <button onClick={()=>{
                handleElement("3")
            }}>3</button>
            <button onClick={()=>{
                handleElement("-")
            }}>-</button>
        </div>
        <div className="row">
            <button onClick={()=>{
                handleElement("0")
            }}>0</button>
            <button onClick={()=>{
                clear()
            }} >c</button>
            <button onClick={()=>{
                result();
            }}>=</button>
            <button onClick={()=>{
                handleElement("+")
            }}>+</button>
        </div>


    </div>

    </>
)

}