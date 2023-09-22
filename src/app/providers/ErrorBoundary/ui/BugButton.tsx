import { useTranslation } from "react-i18next";

import {classNames} from "shared/lib/classNames/classNames"
import { useEffect, useState } from "react";

export interface BugButtonProps {
className?: string;
}



export const BugButton = ({className}:BugButtonProps)=>  {
    const {t} = useTranslation()

    const [error, setError] = useState(false)

const onThrow = () => setError(true)

useEffect(()=>{
    if(error){
        throw new Error();
    }
  }, [error])
     


  return (
    <div className={classNames('', {}, [className])}>
        <button onClick={ onThrow}>{t('Кинути помилку')}</button>
    </div>
  )
};