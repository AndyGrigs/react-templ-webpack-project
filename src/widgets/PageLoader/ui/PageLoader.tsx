import { Spinner } from 'shared/ui/Spinner/Spinner';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

export interface PageLoaderProps {
className?: string;
}

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Spinner />
    </div>
);
