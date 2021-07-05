import React from 'react'
import { Popover, Button } from 'antd';

function Popover({ content, placement }) {
    return (
        <div>
            <Popover placement={placement} content={content} title="Title">
                {content}
            </Popover>
        </div>
    )
}

export default Popover
