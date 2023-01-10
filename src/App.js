import React from "react";
import "./App.css"
import {useSelector} from "react-redux";
import InputCustom from "./components/UI/InputCustom";
import {Col, Progress, Row, Space} from "antd";
import Links from "./components/Links";
import FloatButtonWithModalWindow from "./components/UI/FloatButtonWithModalWindow";
import TriangulationSelection from "./components/UI/TriangulationSelection";
function App() {
    const {meshQualityState} = useSelector(state => state.inputReducer)
    return (
        <div className='App'>
            <Row>
                <Col xs span={24} style={{textAlign: "center"}}><h1 style={{marginBottom: "10px"}}>2D-Triangulation Web App</h1></Col>
            </Row>
            <hr/>
            <Row>
                <Col xs span={12}>
                    <canvas id="canvas" width="640" height="480"></canvas>
                </Col>
                <Col xs span={12}>
                    <InputCustom/>
                    <TriangulationSelection/>
                    <Space wrap>
                        <Progress style={{padding: "50px"}} type="circle" percent={meshQualityState.percent}/>
                        <h2>{meshQualityState.text}</h2>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col xs span={8}><Links/></Col>
                <Col xs span={8}></Col>
                <Col xs span={8}><FloatButtonWithModalWindow/></Col>
            </Row>
        </div>
    );
}
export default App;
