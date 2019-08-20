import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import history from '../../history'; 
import {upload} from '../../actions/Image/UploadImageAct';
import {Field, reduxForm} from 'redux-form';

class ImageUpload extends React.Component{
  
    static propTypes = {
        previewLogoUrl: PropTypes.string,
        mimeType: PropTypes.string,
        maxWeight: PropTypes.number,
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        // redux-form props
        handleSubmit: PropTypes.func.isRequired
    };
    static defaultProps = {
        previewLogoUrl: "https://imgplaceholder.com/400x300",
        mimeType: "image/jpeg, image/png",
        maxWeight: 100,
        maxWidth: 100,
        maxHeight: 100
    };
 
    onSubmit = (imageFile) => {                        
        if (imageFile){                   
            this.props.upload(imageFile);      
        }   
    }

    fileChangeHandler = (event, input) => {        
        event.preventDefault();
        let imageFile = event.target.files[0];

        if (imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile);
            const imageObject = new window.Image();
            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth;
                imageFile.height = imageObject.naturalHeight;
                input.onChange(imageFile);
                URL.revokeObjectURL(imageFile);
            };
            imageObject.src = localImageUrl;
            this.handlePreview(localImageUrl);
        }
    }; 

    handlePreview = imageUrl => {
        const previewImageDom = document.querySelector(".image");
        previewImageDom.src = imageUrl;
    };

    renderInput = ({label ,input, type, meta}) =>{  
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
        const { mimeType } = this.props;
        return(
            <div className={className}>
                <label>{label}</label>
                <input name={input.name}
                       type={type}
                       accept={mimeType}
                       onChange={event => this.fileChangeHandler(event, input)}/>  
                {this.renderError(meta)}             
            </div>                      
        );
    }

    renderError({touched, error}){        
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    render(){     
        const {
            previewLogoUrl,          
            handleSubmit
        } = this.props;

        return(
            <div>
                <h3>Upload Image</h3>
                <img className="ui medium rounded image" src={previewLogoUrl} alt="preview"></img>
                <br/>
                <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)} encType="multipart/form-data">
                    <Field name="files" 
                           component={this.renderInput}
                           label="File" 
                           type="file"                      
                           />
                    <button className="ui button primary">Submit</button>
                    <button className="ui button secondary" onClick={() => history.push('/')}>Cancel</button>
                </form>
            </div>            
        );
    }    
}

const validate = (imageFile) => {     
    
    const errors = {};

    if(imageFile && imageFile.hasOwnProperty()){
        // validate size
        if (imageFile && imageFile.size) {
            // Get image size in kilobytes
            const imageFileKb = imageFile.size / 1024;
            const { maxWeight } = this.props;
            if (imageFileKb > maxWeight) {
                errors.fileInput = `Image size must be less or equal to ${maxWeight}kb`;
            }
        }  

        if(imageFile) {
            // validate type
            const { mimeType } = this.props;
            if (!mimeType.includes(imageFile.type)) {
                errors.fileInput += `Image mime type must be ${mimeType}`;
            }

            // validate width 
            const { maxWidth } = this.props;
            if (imageFile.width > maxWidth) {
                errors.fileInput += `Image width must be less or equal to ${maxWidth}px`;
            }

            // validate height
            const { maxHeight } = this.props;
                if (imageFile.height > maxHeight) {
                    errors.fileInput += `Image height must be less or equal to ${maxHeight}px`;
            }
        }    
    }

    

    return errors;
}

const imageUploadForm = reduxForm({
    form : 'ImageForm',
    validate
}) (ImageUpload);

export default connect(null, {upload})(imageUploadForm)