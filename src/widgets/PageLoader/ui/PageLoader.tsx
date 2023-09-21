import { Spinner } from "shared/ui/Spinner/Spinner";
import cls from "./PageLoader.module.scss"
import {classNames} from "shared/lib/classNames/classNames"

export interface PageLoaderProps {
className?: string;
}

export const PageLoader = ({className}:PageLoaderProps)=>  {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  )
};