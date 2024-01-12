import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputSlice} from "../../store/reducers/slice";
import TextArea from "antd/es/input/TextArea";
import {Button, Modal} from "antd";

const InputCustom = () => {
    const dispatch = useDispatch()
    const {exampleFigure} = useSelector(state => state.inputReducer)
    const {setArrayForFigure} = inputSlice.actions
    const [state, setState] = useState(exampleFigure)

    let regexp = /[a-zа-я]/i;

    const handleInputChange = (e) => {
        if (!regexp.test(e.target.value)) {
            setState(e.target.value);
        }
    };

    const setArrButton = (e) => {
        e.preventDefault()
        try {
            JSON.parse(`${state}`)
            dispatch(setArrayForFigure(state))
        } catch {
            const error = () => {
                Modal.error({
                    title: 'Ошибка!',
                    content: 'Проверьте правильность введённых данных.',
                });
            };
            error()
        }
    }

    return (
        <form>
            <TextArea allowClear
                      value={state}
                      onChange={handleInputChange}
                      type='text'
                      placeholder="Введите массив точек"
                      autoSize={{
                          minRows: 2,
                          maxRows: 6,
                      }}
            />
            <Button style={{top: "20px"}} type="primary" onClick={setArrButton}>Установить массив для триангуляции</Button>
        </form>
    );
};
export default InputCustom;
