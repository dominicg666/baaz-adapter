import { useCallback } from 'react';
import { useAppContext } from '../../context/app';
/**
 * Modal Lib.
 *
 * @returns {{
 *   handleClose: function,
 *   isOpen: boolean
 * }}
 */
export const useModalDefault = props => {
    const [{ drawer }, { closeDrawer, toggleDrawer }] = useAppContext();
    const isOpen = drawer === 'modal';

    const handleClose = useCallback(() => {
        closeDrawer();
    }, [closeDrawer]);

    const toggleModal = useCallback(() => {
        toggleDrawer('modal');
    }, [closeDrawer]);


    return {
        toggleModal,
        handleClose,
        isOpen
    };
};