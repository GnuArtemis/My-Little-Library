import React from 'react'

export default function BookMedia(props) {
    console.log(props)
    let saveObject;
    let deleteFlag;
    if("saveButtonClick" in props) {
        deleteFlag=false;
        saveObject = {
            title: props.data.title,
            authors: props.data.authors,
            subtitle: props.data.subtitle,
            description: props.data.description,
            image: props.data.imageLinks.smallThumbnail,
            link: props.data.canonicalVolumeLink
        }
    }else {
        deleteFlag=true;
        saveObject = props.data;
    }
    return (
        <div className="media my-3 mx-3 py-3 px-3 border">
            <img src={saveObject.image} className="mr-3" alt="Book Cover" />
            <div className="media-body">
                <div className="d-flex justify-content-between">
                    <h5 className="mt-0">{saveObject.title}</h5>
                    <div>

                        <a href={saveObject.link} target="blank" className="btn btn-primary">Buy</a>
                        {deleteFlag ? (<button onClick={() => props.deleteButtonClick(props.data._id)} className="btn btn-danger">Delete</button>) : (<button onClick={() => props.saveButtonClick(saveObject)} className="btn btn-success">Save</button>) }
                        
                    </div>
                </div>
                <h6>{saveObject.subtitle}</h6>
                <h6>Written by: {Array.isArray(saveObject.authors ) ? saveObject.authors.join(", ") : "Unknown"}</h6>
                <p>{saveObject.description}</p>
            </div>
        </div>
    )
}
