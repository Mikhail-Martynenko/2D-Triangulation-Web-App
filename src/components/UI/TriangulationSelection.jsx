import React, {useState} from 'react';
import {Radio} from "antd";
import Earcut from "./TriangulationButtons/Earcut";
import D3Delaunay from "./TriangulationButtons/D3-delaunay";

const TriangulationSelection = () => {
    const [value, setValue] = useState(1);

    return (
        <div>
            <h1 style={{padding: "25px", marginBottom: "0px"}}>Выберите метод триангуляции</h1>
            <Radio.Group style={{padding: "10px"}} onChange={e => setValue(e.target.value)} value={value}>
                <Radio value={1}><h3>Earcut</h3></Radio>
                <Radio value={2}><h3>D3-delaunay</h3></Radio>
            </Radio.Group>
            {
                value === 1
                    ? <Earcut/>
                    : <D3Delaunay/>
            }
        </div>
    );
};
export default TriangulationSelection;
