import React from 'react';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelectors';
import './collection.scss';


const CollectionPage = ({collection}) => {
    console.log(collection)
    return(
    <div className='collection-page'>
        <h2>Collection Page</h2>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)