import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputSlice} from "../../../store/reducers/slice";
import {Delaunay} from "d3-delaunay";
import ScalingMesh from "../../../scalingMesh";
import MeshQuality from "../../../meshQuality";
import {Button} from 'antd';

const D3Delaunay = () => {
    const dispatch = useDispatch()
    const {exampleFigure} = useSelector(state => state.inputReducer)
    const {setMeshQualityForFigure} = inputSlice.actions

    const arrCoordinatesVerticesTriangle = [];

    function triangulationDelaunay(arr) {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const delaunay = Delaunay.from(arr);
        let triangles = delaunay.triangles
        for (let i = 0; i < triangles.length / 3; i++) {
            const {points, triangles} = delaunay;
            const t0 = triangles[i * 3];
            const t1 = triangles[i * 3 + 1];
            const t2 = triangles[i * 3 + 2];
            arrCoordinatesVerticesTriangle.push(
                [
                    points[t0 * 2], points[t0 * 2 + 1],
                    points[t1 * 2], points[t1 * 2 + 1],
                    points[t2 * 2], points[t2 * 2 + 1]
                ]
            );
            context.beginPath();
            context.moveTo(points[t0 * 2], points[t0 * 2 + 1]);
            context.lineTo(points[t1 * 2], points[t1 * 2 + 1]);
            context.lineTo(points[t2 * 2], points[t2 * 2 + 1]);
            context.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, 0.5)`;
            context.strokeStyle = 'black';
            context.fill();
            context.closePath();
            context.stroke();
        }
    }

    function triangulationD3DelaunayButton(e) {
        e.preventDefault();
        const scalingMesh = new ScalingMesh();
        const meshQuality = new MeshQuality()
        const resultPoints = scalingMesh.scale(JSON.parse(exampleFigure));
        triangulationDelaunay(resultPoints);
        const [str, percent] = meshQuality.renderStatistics(arrCoordinatesVerticesTriangle)
        dispatch(setMeshQualityForFigure([str, percent]))
    }

    return (
        <div>
            <Button className='btn' type="primary" onClick={triangulationD3DelaunayButton}>Триангулировать</Button>
        </div>
    );
};

export default D3Delaunay;