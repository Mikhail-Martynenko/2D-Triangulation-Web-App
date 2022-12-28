import React, {useState} from "react";
import "./App.css"
import D3Delaunay from "./components/D3-delaunay";
import Earcut from "./components/Earcut";
import {useSelector} from "react-redux";
import InputCustom from "./components/UI/InputCustom";
import {Col, Progress, Radio, Row, Space} from "antd";
import Links from "./components/Links";
function App() {
    const {meshQualityState} = useSelector(state => state.inputReducer)
    const [value, setValue] = useState(1);
    return (
        <div className='App'>
            <Row>
                <Col xs span={24} style={{textAlign: "center"}}><h1>2D-Triangulation App</h1></Col>
            </Row>
            <Row>
                <Col xs span={12}>
                    <canvas id="canvas" width="640" height="480"></canvas>
                </Col>
                <Col xs span={12}>
                    <InputCustom/>
                    <h1>Выберите метод триангуляции</h1>
                    <Radio.Group style={{padding: "25px"}} onChange={e => setValue(e.target.value)} value={value}>
                        <Radio value={1}><h3>D3-delaunay</h3></Radio>
                        <Radio value={2}><h3>Earcut</h3></Radio>
                    </Radio.Group>
                    {
                        value === 1
                            ? <D3Delaunay/>
                            : <Earcut/>
                    }
                    <Space wrap>
                        <Progress style={{padding: "50px"}} type="circle" percent={meshQualityState.percent}/>
                        <h2>{meshQualityState.text}</h2>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col xs span={8}><Links/></Col>
            </Row>
        </div>
    );
}
export default App;
