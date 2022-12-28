import React from 'react';
import {Tag} from "antd";
import {
    UserOutlined,
    GithubOutlined,
} from '@ant-design/icons';
const Links = () => {
    return (
        <div>
            <Tag icon={<GithubOutlined/>} color="black">
                <a href="https://github.com/Mikhail-Martynenko">Github</a>
            </Tag>
            <Tag icon={<UserOutlined/>} color="#3b5999">
                <a href="https://t.me/anekaif">Telegram</a>
            </Tag>
        </div>
    );
};
export default Links;