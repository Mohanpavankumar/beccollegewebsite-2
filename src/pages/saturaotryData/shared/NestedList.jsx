import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const leaf = { paddingLeft: "70px" };
const branch = { paddingLeft: "40px" };


export const OverlayTriggerComponent = ({ hoverText, label }) => {
    return (
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-top`}>
                    <span>{hoverText}</span>
                </Tooltip>
            }
        >
            <span className="my-auto">{label}</span>
        </OverlayTrigger>
    )
}

const Leaf = ({ url, label, hoverText }, idx) => {
    return (
        <a
            href={url}
            className="d-flex"
            style={leaf}
            key={`leaf-${idx}`}
        >
            <OverlayTriggerComponent hoverText={hoverText} label={label} />
        </a>
    );
};

const Branch = ({ label, children }, idx) => {
    const [expand, setExpand] = useState(false);
    const childList = children.map(Leaf);
    return (
        <>
            <div
                className="d-flex c-pointer"
                style={branch}
                onClick={() => setExpand(!expand)}
                key={`branch-${idx}`}
            >
                <span className="my-auto">{expand ? <FaAngleDown /> : <FaAngleRight />}</span>
                <span className="my-auto">{label}</span>
            </div>
            {expand && childList}
        </>
    );
};

const Root = ({ label, children }, idx) => {
    const [expand, setExpand] = useState(false);
    const childList = children.map(Branch);
    return (
        <>
            <div
                className="d-flex c-pointer"
                onClick={() => setExpand(!expand)}
                key={`root-${idx}`}
            >
                <span className="my-auto">{expand ? <FaAngleDown /> : <FaAngleRight />}</span>
                <span className="my-auto">{label}</span>
            </div>
            {expand && childList}
        </>
    );
};

export const NestedList = ({ nodes }) => {
    return (
        <div className="ml-2">{nodes.map(Root)}</div>
    );
}

