import content from './../data/plants.json';
import CollectionPanel from './CollectionPanel';
import "../styles/Collection.css";

export default function CollectionList() {

    return(
    <>
    <h1>List of Plants</h1>

    <div className = 'collection-container'>
    
        {content.map((plants, index) => {
            return (
                
                    <CollectionPanel
                    key={index}
                    data={plants} />
            );
        })}
    </div>
    </>   
    )
}