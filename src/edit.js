import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const ALLOWED_MEDIA_TYPES = [ 'image' ];

    const mediaIds = attributes.mediaId || [];
    const mediaUrls = attributes.mediaUrl || [];
    const texts = attributes.texts || ['ELECTRONICA', 'HOGAR', 'SALUD Y BELLEZA', 'ENTRETENIMIENTO', 'PAPELERIA KAWAII', 'NOVEDADES']; 

    const onSelectMedia = ( index ) => ( media ) => {
        mediaIds[index] = media.id;
        mediaUrls[index] = media.url;
        setAttributes( { mediaId: [...mediaIds], mediaUrl: [...mediaUrls] } );
    };

    return (
        <div className="container-buytitiGrid">
            <div className="sub-container">
                {Array(3).fill().map((_, index) => (
                    <div key={index} className={`image-container image-container-${index}`}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMedia(index)}
                                allowedTypes={ALLOWED_MEDIA_TYPES}
                                value={mediaIds[index]}
                                render={({ open }) => (
                                    <Button onClick={open}>
                                        { ! mediaIds[index] ? __('Añadir imagen', 'buytitigrid') : <img className={`my-image-class-${index}`} src={mediaUrls[index]} alt={__('Imagen para el botón', 'buytitigrid')} /> }
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        <p className={`my-paragraph-class-${index}`}>{texts[index]}</p>
						<Button className={`my-button-class-${index}`}>Ver Más</Button>
                    </div>
                ))}
            </div>
            <div className="sub-container">
                {Array(3).fill().map((_, index) => (
                    <div key={index+3} className={`image-container image-container-${index+3}`}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMedia(index+3)}
                                allowedTypes={ALLOWED_MEDIA_TYPES}
                                value={mediaIds[index+3]}
                                render={({ open }) => (
                                    <Button onClick={open}>
                                        { ! mediaIds[index+3] ? __('Añadir imagen', 'buytitigrid') : <img className={`my-image-class-${index+3}`} src={mediaUrls[index+3]} alt={__('Imagen para el botón', 'buytitigrid')} /> }
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        <p className={`my-paragraph-class-${index+3}`}>{texts[index+3]}</p>
						<Button className={`my-button-class-${index+3}`}>Ver Más</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}