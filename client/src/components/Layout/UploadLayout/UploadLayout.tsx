import { FC, useEffect } from "react";
import cn from 'classnames';

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

import Header from "../../Header/Header";
import MainMenu from "../../Main/MainMenu/MainMenu";

import { UploadLayoutProps } from "./UploadLayout.types";

import styles from './UploadLayout.module.scss';

const UploadLayout: FC<UploadLayoutProps> = ({children}) => {
    const {color} = useTypedSelector(state => state.common)
    const {themeChange} = useActions()

    useEffect(() => {
        const themeColor = localStorage.getItem('theme')
        if (themeColor === 'w' 
            || themeColor === 'r' 
            || themeColor === 'a' 
            || themeColor === 'v') {
            themeChange(themeColor)
        }
    }, [])

    return (
        <div className={cn(styles.Container, {
            [styles.White]: color === 'w',
            [styles.Azure]: color === 'a',
            [styles.Vinous]: color === 'v',
            [styles.Red]: color === 'r',
        })}>
            <Header />
            <MainMenu />
            {children}        
        </div>
    )
}

export default UploadLayout;