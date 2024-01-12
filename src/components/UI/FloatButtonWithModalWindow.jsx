import React, {useState} from 'react';
import {FloatButton, Modal} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const FloatButtonWithModalWindow = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <FloatButton onClick={() => setOpen(true)}
                         icon={<QuestionCircleOutlined/>}
                         type="primary"
                         style={{
                             right: 94,
                         }}
            />
            <Modal title="Информация" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}
                   width={1000}>
                <p>1. Введенный массив должен быть двумерным, в формате [[X1,Y1],[X2,Y2],[X3,Y3]...], где X-координата
                    точки
                    по горизонтальной оси X,
                    а Y-координата точки по вертикальной оси Y.
                </p>
                <p>2. Чем ближе каждый треугольник в триангуляционной сетке приближен к равностороннему, тем больше
                    будет
                    процент качества триангуляции,
                    так как равносторонние треугольники лучше подходят для численного интегрирования, которое
                    выполняется в
                    пакете ACELAN.
                </p>
            </Modal>
        </div>
    );
};

export default FloatButtonWithModalWindow;