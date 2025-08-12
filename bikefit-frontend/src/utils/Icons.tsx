import React, { JSXElementConstructor, ReactElement } from 'react';

interface IconProps {
    type: string;
}

const iconMap: { [key: string]: ReactElement<any, any> | null } = {
    "exclude": <i className="bi bi-trash-fill" />,
    "edit": <i className="bi bi-pen-fill" />,
    "add": <i className="bi bi-plus-circle" />,
    "profile": <i className="bi bi-person-fill text-white" />


};

const Icon: React.FC<IconProps> = ({ type }) => {
    return iconMap[type] || null;
};

export default Icon;