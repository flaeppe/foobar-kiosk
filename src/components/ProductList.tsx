import * as React from "react";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { IProductState, IProduct } from "types";

import { Box, Flex } from "reflexbox";
import { Product } from "components";

import * as style from "styles/components/ProductList.scss";

interface IProductListProps {
    products: IProductState;
    onSelect: Function;
}

export default class ProductList extends React.Component<IProductListProps, {}> {
    render() {
        if (this.props.products.products.length > 0) {
            let content = this.props.products.products.map((product: IProduct) => {
                return <Product {...product} key={product.code} onSelect={this.props.onSelect}/>;
            });

            return (
                <ReactCSSTransitionGroup
                    component={Flex}
                    style={{ transform: "translate(0, " + this.props.products.page * -206 + "px)" }}
                    className={style.grid}
                    transitionName="product"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {content}
                </ReactCSSTransitionGroup>
            );
        } else {
            return (
                <Flex auto align="center" justify="center" className={style.start}>
                    <Box>Scan an item to make it a part of your purchase</Box>
                </Flex>
            );
        }
    }
}
