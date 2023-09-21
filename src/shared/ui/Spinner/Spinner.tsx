import "./Spinner.scss"
import {classNames} from "shared/lib/classNames/classNames"

export interface SpinnerProps {
className?: string;
}

export const Spinner = ({className}:SpinnerProps)=>  {
  return (
    <div className={classNames('', {}, [className])}>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  )
};