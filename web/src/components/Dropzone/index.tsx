import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './style.css';

interface Prorps {
    onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<Prorps> = ({ onFileUpload }) => {
    const [seletedFileUrl, setSeletedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSeletedFileUrl(fileUrl);
        onFileUpload(file);

    }, [onFileUpload])
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
        })

    return (
        <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} accept='image/*' />
        { seletedFileUrl
            ? <img  src={seletedFileUrl} alt="" />
            :(
                <p> 
                    <FiUpload />
                    Imagem do estabelecimento 
                </p>
            )
         }
        </div>
    )
    }

export default Dropzone;