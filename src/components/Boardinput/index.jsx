import React, { useEffect, useState } from "react";

const ratio = 2

const mmToPx = (num) => num / ratio

const Boardinput = () => {
    const CONTAINER_WIDTH = (1830)
    let CONTAINER_HEIGHT = (3630)
    const [getHEIGHT, setHEIGHT] = useState(3630)

    // const [get, set] = useState({
    //     Length: "",
    //     Width: "",
    //     Count: "",
    // })
    let [getCountList,setCountList]= useState(1)
    let [Sum,Sums] = useState(0)


    // useEffect(() => {
    //     let a = 0
    //     // a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(get.Width)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(get.Length))))
    //     console.log();
    //     getS=get.Length*Math.ceil(get.Count/(Math.floor(CONTAINER_WIDTH/get.Width)-(Math.floor(CONTAINER_WIDTH/get.Width)/10)))
    //     console.log(getS);
    //     // console.log("chisht uxu vra es");
    //     // setHEIGHT(get)
    //     // if (getHEIGHT <= getS && Sum) {
    //     //     setHEIGHT(Sum+getS)
    //     // }else if(getHEIGHT <= Sum)setHEIGHT(getS)

    // }, [get])



    // const handleChange = (e) => {

    //     let width = e.target.name === "Width" ? +e.target.value : +get.Width
    //     let length = e.target.name === "Length" ? +e.target.value : +get.Length
    //     let count = e.target.name === "Count" ? +e.target.value : +get.Count

    //     let a = 0
        
    //     // a = (Math.floor((CONTAINER_WIDTH) / width)) * (Math.floor((CONTAINER_HEIGHT) / (length)))


    //     // console.log({ width, length, count })

    //     // if (e.target.name === "Length")
    //     //     a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(get.Width || 0)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(e.target.value || 0))))
    //     // else if (e.target.name === "Width")
    //     //     a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(e.target.value || 0)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(get.Length || 0))))

    //     // else if (e.target.name === "Count") {
    //     //     a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(get.Width || 0)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(get.Length || 0))))
    //     //     currentCount = parseInt(e.target.value)
    //     // }

    //     setS(length*Math.ceil(count/(Math.floor(CONTAINER_WIDTH/width)-(Math.ceil(CONTAINER_WIDTH/width/4)))))

    //     // if (a >= count || width === 0 || length === 0 || count === 0)
    //         set({ ...get, [e.target.name]: e.target.value })
    // }
    const handleDeleteInput = (id, input) => {
        // console.log(input);
        
        const updatedInputs = inputs.filter((input) => input.id !== id);
        setInputs(updatedInputs);
    }

    const [inputs, setInputs] = useState([{id: 0, values: { Length: "", Width: "", Count: "", }}]);
    useEffect(() => {
        // debugger
        let Sume=0
        if (inputs) {
            inputs.map((input) => {
                // console.log(input.values.Length, "verevic mi hety");
                // console.log(input.values.Count / (CONTAINER_WIDTH / (input.values.Width + input.values.Width / 10)), "verevic mi qanaqky");
                // console.log(Sume, "ardyunqy");
                 Sume = Sume +Math.ceil(input.values.Length * Math.ceil(input.values.Count / (Math.floor(CONTAINER_WIDTH / input.values.Width) - Math.floor(CONTAINER_WIDTH / input.values.Width)/22)))
                return Sums(Sume)
            })
        }

if (getHEIGHT <= Sume) {
    setHEIGHT(Sume) 
    setCountList(Math.ceil(Sume/3630))
}
else if (getHEIGHT >= Sume){
    setHEIGHT(getHEIGHT)
    setCountList(Math.ceil(getHEIGHT/3630))
}

        // if ((getHEIGHT <= Sum && getS)||(getHEIGHT <= getS && Sum)) {
        //     setHEIGHT(Sum+getS)
        // }else if(getHEIGHT <= Sum && !getS){
        //     setHEIGHT(Sum)
        // }else if(getHEIGHT <= getS && !Sum){
        //     setHEIGHT(getS)
        // }


        console.log(Sume)
        console.log(getHEIGHT);
        console.log(Math.ceil(Sume/3630));
        
       
        // console.log(inputs);
    }, [inputs])
    // let junior =[{id: Date.now(), values: { Length: "123", Width: "351", Count: "12", }},{id: Date.now(), values: { Length: "256", Width: "316", Count: "321", }},{id: Date.now(), values: { Length: "233", Width: "351", Count: "22", }}, ]

    const handleAddInput = () => {
        const newInput = { id: Date.now(), values: { Length: "", Width: "", Count: "", } };
        setInputs([...inputs, newInput]);
        // console.log(inputs);
    };

    const handleInputChange = (id, newData) => {
        // console.log(newData);
        // debugger
        const updatedInputs = inputs.map((input) => {
            if (input.id === id) {

                return {
                    ...input,
                    values: {
                        ...input.values,
                        ...newData,
                    },
                };
                //  setInputs({ ...input[id].values, [e.target.name]: e.target.value });
            }
            return input;
        });

        setInputs(updatedInputs);
    };
    return <div>
        {/* <label >
            <input type="number" name="Length" placeholder="Բարձրություն" onChange={handleChange} value={get.Length} />
            <input type="number" name="Width" placeholder="Լայնություն" style={{ margin: "10px" }} onChange={handleChange} value={get.Width} />
            <input type="number" name="Count" placeholder="Քանակ" onChange={handleChange} value={get.Count} />
        </label>
        <label >
            <button style={{ margin: "10px" }} onClick={handleAddInput} >ավելացնել</button>
        </label>*/}
        <label> 
        <span> Լիստերի քանակը կլորացված դեպի վերև  {getCountList}</span>

            {inputs.map((input) => (

                <div key={input.id}>
                    <input
                        type="number"
                        placeholder="Բարձրություն"
                        value={input.values.Length}
                        name="Length"
                        onChange={(e) => handleInputChange(input.id, { Length: e.target.value })}
                    />
                    <input
                        type="number"
                        value={input.values.Width}
                        name="Width"
                        placeholder="Լայնություն"
                        style={{ margin: "10px" }}
                        onChange={(e) => handleInputChange(input.id, { Width: e.target.value })}
                    />
                    <input
                        type="number"
                        value={input.values.Count}
                        placeholder="Քանակ"
                        name="Count"
                        onChange={(e) => handleInputChange(input.id, { Count: e.target.value })}
                    />
                  { input.id===0 ?   <button style={{ margin: "10px" }} onClick={handleAddInput} >ավելացնել</button>  :
                    <button style={{ margin: "10px" }} onClick={() => handleDeleteInput(input.id, input)}>ջնջել</button>}
                   
                </div>))}
                
        </label>


        <div className="G-flex " style={{ margin: "0px auto", width: `${mmToPx(CONTAINER_WIDTH)}px`, height: `${mmToPx(getHEIGHT)}px`, backgroundColor: "darkblue" }} >
            {/* {new Array(parseInt(get.Count || 0)).fill(0).map((_, index) => { return <div className="boxItem" key={index} style={{ width: `${mmToPx(get.Width)}px`, height: `${mmToPx(get.Length)}px` }}></div> })} */}
            {
                inputs.map((input) => {
                    return new Array(parseInt(input.values?.Count || 0)).fill(0).map((_, index) => {
                        return <div className="boxItem" key={index} style={{
                            width: `${mmToPx(input.values.
                                Width)}px`, height: `${mmToPx(input.values.Length)}px`
                        }}></div>
                    })
                })
            }

        </div>

    </div>
}

export default Boardinput