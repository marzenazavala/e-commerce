import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from '../collection/Collection';


const ShopPage = ({match}) => {
    console.log(match)
    return(
        <div className="shop-page">
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </Switch>
           
        </div>
    )}


export default ShopPage