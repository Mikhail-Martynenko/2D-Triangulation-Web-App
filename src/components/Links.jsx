import React from 'react';
import {Tag} from "antd";
import {GithubOutlined} from '@ant-design/icons';

const Links = () => {
    return (
        <div>
            <Tag icon={<GithubOutlined/>} color="black">
                <a href="https://github.com/Mikhail-Martynenko">Github</a>
            </Tag>
        </div>
    );
};
export default Links;
