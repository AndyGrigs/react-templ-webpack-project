import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

export interface PageErrorProps {
className?: string;
}

const reloadWindow = () => {
    location.reload()
}

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Произошла ошибка')}
            <button onClick={reloadWindow}>{t('Обновити сторінку')}</button>
        </div>
    );
};
