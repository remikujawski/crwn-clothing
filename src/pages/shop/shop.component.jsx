import React from "react";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collectiions: SHOP_DATA
        };
    }

    render() {
        const {collectiions} = this.state;
        return (
            <div className="shop-page">
                {
                    collectiions.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;