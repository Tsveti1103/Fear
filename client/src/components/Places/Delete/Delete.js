import delStyles from './Delete.module.css';

import { useState } from 'react';

import { usePlaceContext } from '../../../contexts/PlaceContext';


export default function Delete(
    { currentFear },
) {
    const [isOpen, setIsOpen] = useState(false);
    const { delFears } = usePlaceContext();

    const onChange = () => {
        setIsOpen(current => !current);
        if (!isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }
    const onDelete = () => {
        delFears(currentFear.id);
    }
    return (
        <>
            <button onClick={onChange} className={delStyles.btn} title="Delete"><i className="fa-regular fa-trash-can"></i></button>
            <div className={delStyles.modal}  style={{ display: isOpen ? 'flex' : 'none' }}>
                <form className={delStyles.modalContent} >
                    <span onClick={onChange} className={delStyles.close} title="Close Modal">&times;</span>
                    <div className={delStyles.container}>
                        <h1>Delete Place</h1>
                        <p>Are you sure you want to delete <b>{currentFear.title}</b> ?</p>
                        <div className={delStyles.clearfix}>
                            <button type="button" onClick={onChange} className={delStyles.cancelbtn}>Cancel</button>
                            <button type="button" className={delStyles.deletebtn} onClick={onDelete}>Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}