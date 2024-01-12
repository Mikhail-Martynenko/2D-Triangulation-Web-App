import React from 'react';
import earcut from "earcut";
import {useDispatch, useSelector} from "react-redux";
import {inputSlice} from "../../../store/reducers/slice";
import ScalingMesh from "../../../scalingMesh";
import MeshQuality from "../../../meshQuality";
import {Button} from "antd";

const Earcut = () => {
    const dispatch = useDispatch()
    const {exampleFigure} = useSelector(state => state.inputReducer)
    const {setMeshQualityForFigure} = inputSlice.actions
    const arrCoordinatesVerticesTriangle = [];

    function triangulationEarcut(array) {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const toProcess = earcut.flatten(array);
        const result = earcut(toProcess.vertices, toProcess.holes, toProcess.dimensions);
        const v = toProcess.vertices
        for (let i = 0; i < result.length; i += 3) {
            arrCoordinatesVerticesTriangle.push(
                [
                    v[result[i] * 2], v[result[i] * 2 + 1],
                    v[result[i + 1] * 2], v[result[i + 1] * 2 + 1],
                    v[result[i + 2] * 2], v[result[i + 2] * 2 + 1]
                ]
            );
            context.beginPath();
            context.moveTo(v[result[i] * 2], v[result[i] * 2 + 1]);
            context.lineTo(v[result[i + 1] * 2], v[result[i + 1] * 2 + 1]);
            context.lineTo(v[result[i + 2] * 2], v[result[i + 2] * 2 + 1]);
            context.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, 0.5)`;
            context.strokeStyle = 'black';
            context.fill();
            context.closePath();
            context.stroke();
        }
    }

    function triangulationEarcutButton(e) {
        e.preventDefault();
        const scalingMesh2 = new ScalingMesh();
        const resultPoints2 = scalingMesh2.scale(JSON.parse(exampleFigure));
        triangulationEarcut([resultPoints2]);
        const meshQuality2 = new MeshQuality()
        const [str, percent] = meshQuality2.renderStatistics(arrCoordinatesVerticesTriangle)
        dispatch(setMeshQualityForFigure([str, percent]))
    }

    return (
        <div>
            <Button type="primary" onClick={triangulationEarcutButton}>Триангулировать</Button>
        </div>
    );
};
export default Earcut;