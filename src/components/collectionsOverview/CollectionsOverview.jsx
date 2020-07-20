import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collectionsOverview.scss';
import CollectionPreview from '../collectionPreview/CollectionPreview';
import {selectCollections} from '../../redux/shop/shopSelectors';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
           {
              collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
              ))
            }
    </div>

);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
