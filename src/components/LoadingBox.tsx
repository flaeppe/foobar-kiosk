import * as React from "react";
import * as classNames from "classnames";

import * as style from "styles/components/LoadingBox.scss";

interface ILoadingBoxProps {
    className?: string;
}

export default class LoadingBox extends React.Component<ILoadingBoxProps, {}> {
    render() {
        return (
            <div className={classNames(style.loading, this.props.className)}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        );
    }
};
