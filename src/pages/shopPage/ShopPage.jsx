import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverviewContainer';
import CollectionContainer from '../collection/collectionContainer';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shopActions';



class ShopPage extends React.Component {

    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    };

    render() {
        const {match} = this.props;
        
        return(
            <div className="shop-page">
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionContainer}
                />   
            </div>
        )
    }
    
   };


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage)