import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';



export default function Save( { attributes } ) {
    const mediaUrls = attributes.mediaUrl || [];
    const texts = attributes.texts || ['ELECTRONICA', 'HOGAR', 'SALUD Y BELLEZA', 'ENTRETENIMIENTO', 'PAPELERIA KAWAII', 'NOVEDADES']; 

    return (
        <div className="container-buytitiGrid">
            <div className="sub-container">
                {Array(3).fill().map((_, index) => (
                    <div key={index} className={`image-container image-container-${index}`}>
                        <img className={`my-image-class-${index}`} src={mediaUrls[index]} alt={__('Imagen para el botón', 'buytitigrid')} />
                        <p className={`my-paragraph-class-${index}`}>{texts[index]}</p>
						<button className={`my-button-class-${index}`}>Ver Más</button>
                    </div>
                ))}
            </div>
            <div className="sub-container">
                {Array(3).fill().map((_, index) => (
                    <div key={index+3} className={`image-container image-container-${index+3}`}>
                        <img className={`my-image-class-${index+3}`} src={mediaUrls[index+3]} alt={__('Imagen para el botón', 'buytitigrid')} />
                        <p className={`my-paragraph-class-${index+3}`}>{texts[index+3]}</p>
						<button className={`my-button-class-${index+3}`}>Ver Más</button>
                    </div>
                ))}
            </div>
        </div>
    );
}